from flask import Flask, request
import sys
import json
import string
import random
import atexit

app = Flask(__name__)

filename = sys.argv[1] if len(sys.argv) > 1 else 'db.json'
id_length = 16

data = {}


def startup():

	global data
	try:
		fd = open(filename)
		data = json.load(fd)
		fd.close()
	except FileNotFoundError:
		print("DB file not found, creating on POST/write.")

	print("Read", len(data), "quizzes from DB")


@app.route('/db/<id>', methods = ['GET'])
def get(id):
	return data[id] if id in data else ('Error: Not found', 404)


def generateRandomString():
	return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(id_length))

def generateNewKey():

	id = generateRandomString()
	while id in data:
		id = generateRandomString()

	return id

@app.route('/db', methods = ['POST'])
def post():

	id = generateNewKey()
	data[id] = request.data.decode('UTF-8')

	print("Received new quiz. ID:", id)

	try:
		fd = open(filename, 'w+')
		json.dump(data, fd, indent=2)
		fd.close()
	except e:
		print("Failed to open/create DB file for writing:", e)

	return id, 201


startup()

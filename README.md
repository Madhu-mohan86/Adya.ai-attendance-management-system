# Attendance Management App with Docker

This repository contains an attendance management application that can be run using Docker for easy deployment and scalability. It is Uploaded to Docker Hub in https://hub.docker.com/r/madhu86/attendance_management


## Run Locally

1. Install the dependencies `npm install`

2. Create .env with SECRET_TOKEN,MONGODB_URI,PORT,HOST

2. Run the server with `node src/main.js` and visit http://{HOST}:{PORT}

3. To run the endpoints go to http://{HOST}:{PORT}/docs

## Run using Docker

1. docker pull `madhu86/Attendance_management`

2. `docker run -p 3002:3002 -d --name attendance-mangement madhu86/Attendance_management`

3. To run the endpoints go to http://0.0.0.0:3002/docs


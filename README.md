Field Report API
A simple RESTful API built with Node.js and Express.js to allow field operatives to create, read, update, and delete (CRUD) reports, including geolocation data (latitude and longitude). The API uses an in-memory storage (array) and follows the Model-View-Controller (MVC) architecture.
Table of Contents
Features (#features)

Project Structure (#project-structure)

Prerequisites (#prerequisites)

Installation (#installation)

Running the API (#running-the-api)

API Endpoints (#api-endpoints)

Example Usage (#example-usage)

Testing (#testing)

Notes (#notes)

Contributing (#contributing)

License (#license)

Features
Create reports with description, latitude, longitude, and operative name.

Retrieve all reports or a specific report by ID.

Update existing reports.

Delete reports by ID.

In-memory storage (data persists only during runtime).

MVC architecture for organized code.

Basic input validation for required fields.

Project Structure

crud-api/
├── controllers/
│   └── reportController.js  # Handles HTTP requests and responses
├── models/
│   └── reportModel.js      # Manages data and CRUD logic
├── routes/
│   └── reportRoutes.js     # Defines API endpoints
├── index.js                # Server setup and entry point
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation

Prerequisites
Node.js: Version 14.x or higher (run node --version to check).

npm: Included with Node.js (run npm --version to check).

A tool like Postman or cURL for testing API endpoints.

Installation
Clone the repository or copy the project files to your local machine:
bash

git clone <repository-url>
cd crud-api

Or navigate to the project directory:
bash

cd /home/moses-githinji/crud-api

Install dependencies:
bash

npm install

Running the API
Start the server:
bash

npm start

Or, for development with auto-restart (if nodemon is installed):
bash

npm run dev

The API will be available at http://localhost:3000.

API Endpoints
All endpoints are prefixed with /api/reports.
Method

Endpoint

Description

Request Body (JSON) Example

POST

/

Create a new report

{ "description": "Incident at main street", "latitude": 40.7128, "longitude": -74.0060, "operativeName": "Moses Githinji" }

GET

/

Get all reports

None

GET

/:id

Get a report by ID

None

PUT

/:id

Update a report by ID

{ "description": "Updated incident report" }

DELETE

/:id

Delete a report by ID

None

Response Status Codes
201 Created: Report created successfully.

200 OK: Request successful (GET or PUT).

204 No Content: Report deleted successfully.

400 Bad Request: Missing required fields.

404 Not Found: Report not found.

500 Internal Server Error: Server error.

Example Usage
Create a Report
bash

curl -X POST http://localhost:3000/api/reports \
-H "Content-Type: application/json" \
-d '{"description":"Incident at main street","latitude":40.7128,"longitude":-74.0060,"operativeName":"Moses Githinji"}'

Response (201):
json

{
  "id": "<unique-id>",
  "description": "Incident at main street",
  "latitude": 40.7128,
  "longitude": -74.0060,
  "operativeName": "Moses Githinji",
  "createdAt": "2025-06-19T22:00:00.000Z"
}

Get All Reports
bash

curl http://localhost:3000/api/reports

Response (200):
json

[
  {
    "id": "<unique-id>",
    "description": "Incident at main street",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "operativeName": "Moses Githinji",
    "createdAt": "2025-06-19T22:00:00.000Z"
  }
]

Get a Report by ID
bash

curl http://localhost:3000/api/reports/<unique-id>

Response (200 or 404 if not found):
json

{
  "id": "<unique-id>",
  "description": "Incident at main street",
  "latitude": 40.7128,
  "longitude": -74.0060,
  "operativeName": "Moses Githinji",
  "createdAt": "2025-06-19T22:00:00.000Z"
}

Update a Report
bash

curl -X PUT http://localhost:3000/api/reports/<unique-id> \
-H "Content-Type: application/json" \
-d '{"description":"Updated incident report"}'

Response (200 or 404 if not found):
json

{
  "id": "<unique-id>",
  "description": "Updated incident report",
  "latitude": 40.7128,
  "longitude": -74.0060,
  "operativeName": "Moses Githinji",
  "createdAt": "2025-06-19T22:00:00.000Z"
}

Delete a Report
bash

curl -X DELETE http://localhost:3000/api/reports/<unique-id>

Response (204 or 404 if not found): No content.
Testing
Use Postman or cURL to test the endpoints as shown above.

Sample coordinates for testing:
Nairobi, Kenya: { "latitude": -1.2864, "longitude": 36.8172 }

New York City, NY, USA: { "latitude": 40.7128, "longitude": -74.0060 }

To add unit tests, consider using a framework like Jest:
bash

npm install --save-dev jest

Update package.json scripts:
json

"scripts": {
  "test": "jest"
}

Notes
In-memory Storage: Data is stored in an array and will be lost when the server restarts. For persistent storage, consider integrating a database like MongoDB.

Geolocation: The API expects clients (e.g., mobile apps) to provide latitude and longitude (e.g., via the browser’s navigator.geolocation).

Security: Add authentication (e.g., JWT) and input sanitization for production use.

Validation: Basic validation ensures description, latitude, and longitude are provided. Enhance with stricter checks (e.g., latitude between -90 and 90) using a library like Joi.

Contributing
Fork the repository.

Create a new branch: git checkout -b feature-branch.

Make changes and commit: git commit -m "Add feature".

Push to the branch: git push origin feature-branch.

Create a pull request.

License
This project is licensed under the MIT License.
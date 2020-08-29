# Phonebook-REST-app
## To run the api : 
  git pull
  npm run dev

Documentation:

# Get all the contacts:
GET: http://localhost:3000/users
Response Body:
{
    "status": "success",
    "data": {
        "users": [
            {
                "_id": "5f4967cafd8172b71b189e9b",
                "mobile": 1718352959,
                "name": "Syed",
                "__v": 0
            },
            {
                "_id": "5f4967e2fd8172b71b189e9c",
                "mobile": 1680548656,
                "name": "Sakib",
                "__v": 0
            },
            {
                "_id": "5f49feca8ca04619c5a02e8b",
                "mobile": 1680548555,
                "name": "Alice",
                "__v": 0
            }
        ]
    }
}


# Add a new contact (name, mobile number):
POST: http://localhost:3000/user
Response Body:
{
    "message": "Contact Created Successfully",
    "data": {
        "user": {
            "_id": "5f4a01e66cfc671d32aecfc6",
            "mobile": 1900000000,
            "name": "Max",
            "__v": 0
        }
    }
}


# Delete a given number:
DELETE: http://localhost:3000/user/1900000000
Response Body:
{
    "message": "Contact deleted"
}


# Edit a contact number(by _id):
PATCH: http://localhost:3000/user/5f4a0037dad1301b46035470
Response Body:
{
    "message": "number updated successfully",
    "updatedUser": [
        {
            "_id": "5f4a0037dad1301b46035470",
            "mobile": 1700000000,
            "name": "Bob",
            "__v": 0
        }
    ]
}


# Get contact details by a mobile number:
GET: http://localhost:3000/user/1680548656
Response Body:
{
    "status": "success",
    "user": [
        {
            "_id": "5f4967e2fd8172b71b189e9c",
            "mobile": 1680548656,
            "name": "Sakib",
            "__v": 0
        }
    ]
}



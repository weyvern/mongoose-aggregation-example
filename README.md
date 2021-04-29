# Auth API with MongoDB

![WBS Coding School](https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_logo.svg)

## Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

## Environment

Create a .env file with:

- MONGO_URI variable, it has to be a valid MongoDB connection string.

# Commands

## Dev

Dev commands runs app with nodemon

```bash
npm run dev
```

## Start

Start commands runs app with Node

```bash
npm start
```

## Features

- [x] Create/read locations
- [x] Create commments and calculate rating in location collection (you can check get the location after to check it out😉)

# API routes and methods

- POST /locations

-- Sample request:

```json
{
  "name": String
}
```

-- Sample response:

```json
{
  "comments_list": [],
  "_id": "608ae4842d23290cc3bc6258",
  "name": "Tofucream",
  "__v": 0
}
```

- GET /locations

-- Sample response:

```json
[
  {
    "comments_list": [],
    "_id": "608ae4842d23290cc3bc6257",
    "name": "Happy Soja Beans",
    "__v": 0
  },
  {
    "comments_list": [],
    "_id": "608ae4842d23290cc3bc6258",
    "name": "Tofucream",
    "__v": 0
  }
]
```

- GET /locations/:id

-- Sample response:

```json
{
  "comments_list": [],
  "_id": "608ae4842d23290cc3bc6257",
  "name": "Happy Soja Beans",
  "__v": 0
}
```

- POST /comments/:location_id

-- Sample request:

```json
{
  "text": "Best icecream ever!!!!",
  "rating": 10
}
```

-- Sample response:

```json
{
  "_id": "608ae4e02d23290cc3bc625d",
  "location_id": "608ae4842d23290cc3bc6258",
  "text": "Best icecream ever!!!!",
  "rating": 10,
  "date": "2021-04-29T16:54:56.414Z",
  "__v": 0
}
```

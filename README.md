# cc10_solo_project_1

This was created during my time as a student at Code Chrysalis.
It is a weekend solo project. In this project, we created a CRUD API server using Express, Knex and Postgres.

## Introduction

- Do you have no idea where to eat near CC?
- You can find suitable place as soon as possible using this API.

## Function

- It uses GURUNAVI API for seeding restaurant data near CC.
- You can see all the restaurant information which is not deleted.
- If you find a new restaurant near CC, you can add new place.
- If you find the information is not correct, you can update it.
- If you find the restaurant is closed, you can change the state closed.
- If you find the restaurant is not exist, you can delete it.

## Setup

### Postgres

For SQL server, it uses Postgres SQL.
At first you should create database. To setup default database, you can use the command below.

```
    echo "CREATE DATABASE cc_restaurants;" | psql

```

### Installing dependencies and Start up

#### Example:

To install dependencies:

```
yarn start
```

To run migrations and set up the database:

```
yarn migrate
```

To rollback migrations

```
yarn rollback
```

To run tests

```
yarn test
```

To run app

```
yarn run
```

To start nodemon

```
yarn dev
```

To change your own gurunavi keyid you should change the key.
The file within the key is here.

```
/models/restaurants/create.js
```

The place is not suitable so I will change it later.

## How to use API

I recommend to use API client like Insomnia.

### Seed the gurunavi data.

- HTTP request method: POST
- Request Path

```
/api/restaurant/add-all
```

- Response:

```
[
  {
    "id": Num,
    "name": String,
    "name_kana": String,
    "url": String,
    "category": String,
    "address": String,
    "tel": String,
    "opentime": String,
    "budget": Int,
    "lunch": Int,
    "credit_card": String,
    "deleted": Boolean,
    "deleted_date": Time,
    "created_at": Time,
    "modified_at": Time
  },
  {...},
  ...
]
```

### Show not deleted list.

- HTTP request method: Get
- Path

```
/api/restaurant
```

### Insert a new shop.

- HTTP request method: POST
- Path

```
/api/restaurant/add
```

- Request body

```
{
	"name": String,
    "category": String,
    "url": String,
    "address": String,
    "tel": String,
	"opentime": String,
    "budget": Int,
    "lunch": Int,
}
```

### Change Information

- HTTP request method: PATCH
- Path

```
/api/restaurant/patch
```

- Request body

```
{
    "id": Int,
    "column": String,
    "value": String
}
```

### Soft delete

- HTTP request method: PUT
- Path

```
/api/restaurant/soft-delete
```

- Request Body

```
{
    "id": Int
}
```

### Delete

- HTTP request method: DELETE
- Path

```
/api/restaurant/delete
```

- Request Body

```
{
    "id": Int
}
```

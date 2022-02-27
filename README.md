# Project E-commerce API

This repository contains the full code and documentation for [E-commerce](https://github.com/hazrinatn/project_api)’s API.

#### Contents

- [Overview](#1-overview)
- [Authentication](#2-authentication)
- [Resources](#3-resources)
  - [Users](#31-users)
  - [Products](#32-products)
- [Architecture Diagram](#4-architecture)
- [Entity Relationship Diagram](#5-erd)

## 1. Overview

Project E-commerce API is a JSON-based OAuth2 API. The token is generated using JSON Web Token (JWT).

## 2. Authentication

In order to publish or edit the products, users (merchants) will need an access token. An access token grants limited access to a user’s account.

## 3. Resources

The API is RESTful and arranged around resources. All requests must be made with an integration token.

Typically, the first request you make should be to acquire user details. This will confirm that your access token is valid, and give you a user id that you will need for subsequent requests.

### 3.1. Users

#### Getting the authenticated user’s details

Returns details of the user who has granted permission to the application.

Example request:

```
POST /login/
Host: localhost
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDQ2NDA4MzEsImV4cCI6MTY0NTI0NTYzMX0.miNjUnu6GssoM2yGP8CLH2ecNMPVpk06-vMfIQBau88
Content-Type: application/json
Accept: application/json
Accept-Charset: utf-8
```

The response is a User object id within a data envelope.

Example response:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
 "user": "621a0a5b4280f7543ca2b871"
}
```

Where a full User object is:

| Field        | Type   | Description                                    |
| ------------ | ------ | ---------------------------------------------- |
| id           | string | A unique identifier for the user.              |
| email        | string | The user’s email (unique).                     |
| password     | string | The user’s password (min. 6),hashed by bcrypt. |
| name         | string | The user’s name (min. 3, max. 50).             |
| address      | string | The user’s address                             |
| join_date    | date   | The user’s sign up date                        |
| phone_number | number | The user's phone number                        |

Possible errors:

| Error code       | Description                                       |
| ---------------- | ------------------------------------------------- |
| 401 Unauthorized | The `accessToken` is invalid or has been revoked. |

### 3.2. Products

#### Listing, Inserting, Updating, and Deleting the products

The users that are logged in can access the list of the products (using GET method), insert products (using POST method), update products (using PUT method), and delete products (using DELETE method).

```
GET /products
```

The response is a list of products objects. The response array is wrapped in a data envelope wrapped in a data envelope. This endpoint will return all products when the user is logged in.

Example response:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

[
    {
        "_id": "621a61e6bfaf3035e034e8ea",
        "name": "Kipas angin",
        "quantity": 1,
        "price": 500000,
        "__v": 0
    },
    {
        "_id": "621a630d1c52cc5c2cd5f8b5",
        "name": "Sapu tangan",
        "quantity": 1,
        "price": 45000,
        "__v": 0
    },
    {
        "_id": "621a6398e2b05c17c469b98f",
        "name": "Tempat makan",
        "quantity": 1,
        "price": 70000,
        "__v": 0
    },
    {
        "_id": "621a63f4bfcde241f8b056a4",
        "name": "Tempat minum",
        "quantity": 1,
        "price": 60000,
        "__v": 0
    },
    {
        "_id": "621a64e5b4d2153b5023d4cc",
        "name": "Sikat gigi",
        "quantity": 1,
        "price": 15000,
        "__v": 0
    },
    {
        "_id": "621a66f038398e5b1cf3aac9",
        "name": "Minyak Telon",
        "quantity": 1,
        "price": 17000,
        "__v": 0
    }
]
```

Where a Product object is:

| Field    | Type   | Description                          |
| -------- | ------ | ------------------------------------ |
| id       | string | A unique identifier for the product. |
| name     | string | The product’s name on E-commerce.    |
| quantity | number | The product's quantity (min. 1).     |
| price    | number | The product's price (min. 10000)     |

Possible errors:

| Error code       | Description                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| 401 Unauthorized | The `accessToken` is invalid, lacks the `listPublications` scope or has been revoked. |

### 4. Architecture Diagram

![Architecture Diagram](./architecture_diagram.png "The architecture diagram of the app")

### 5. ERD

![Entity Relationship Diagram](./ERD.png "The Entity Relationsip Diagram of the app")

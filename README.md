<h1 align="center">Challenge #01</h1>

<p align="center">
  <i>My first challenge as intern at Compass UOL.</i>
</p>

<p align="center">
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/v1-docs-19C034?style=flat.svg">
  </a>
</p>

<hr>

## Table of contents

- [Installation](#installation)
  - [Requirements](#prerequisites)
- [Run the app](#run-the-application-locally)
- [Run the tests](#run-the-tests)
- [Building for production](#building-for-production)
- [Documentation](#documentation)
  - [Swagger](#swagger)
  - [Users routes](#users-routes)
  - [Events routes](#events-routes)
- [Deploy on railway](#deploy-on-railway)

<br>

## Running the application

### Prerequisites

- Install <strong>[Git][git]</strong> and <strong>[Node.js][node]</strong> (which includes [Node Package Manager][npm])

### Installation

Clone the repository on your machine in a new folder:

```
  git clone https://github.com/pedrobraghin/first-challenge.git
```

Install dependencies:

```
  cd [FOLDER NAME]
  npm install
```

## Run the application locally

```
  npm run start:dev
```

## Run the tests

```
  npm run test
```

## Building for production

```
  npm run build
```

## Documentation

All API endpoints can be found in the documentation below or in the <strong>Swagger</strong> documentation.

## Swagger

In addition to the documentation, the documentation with Swagger is also available at the endpoint:

```
/api/v1/api-docs
```

## Users routes

- ### Signup

  `POST /api/v1/users/signup`

  ### Request body example

  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "birthDate": "1995-01-31",
    "email": "john@example.com",
    "city": "London",
    "country": "England",
    "password": "12345678",
    "confirmPassword": "12345678"
  }
  ```

  ### Response examples

  `201 Created`

  ```
  // no response body
  ```

- ## Signin

  `POST /api/v1/users/signin`

  ### Request body example

  ```json
  {
    "email": "john@example.com",
    "password": "12345678"
  }
  ```

  ### Response examples

  `200 OK`

  ```json
  {
    "status": "success",
    "message": "Authentication successful"
  }
  ```

  `401 Unauthorized`

  ```json
  {
    "status": "fail",
    "message": "Invalid email or password"
  }
  ```

## Events Routes

- ## Create Event

  `POST /api/v1/events`

  ### Request body example

  ```json
  {
    "description": "Hackathon event",
    "dateTime": "2023-02-11T13:38:11.295Z"
  }
  ```

  ### Response body example

  `201 Created`

  ```json
  {
    "description": "Hackathon event",
    "dateTime": "2023-02-11T13:38:11.295Z",
    "createdAt": "2023-02-11T13:38:11.295Z",
    "_id": "a04bd7c2-2cf8-4dee-8784-26e71e5d12ca"
  }
  ```

- ## Get all events

  `GET /api/v1/events/`

  ### Response examples

  `200 OK`

  ```json
  {
    "status": "success",
    "data:": {
      "events": [
        {
          "description": "Hackathon event",
          "dateTime": "2023-02-11T13:38:11.295Z",
          "createdAt": "2023-02-11T13:38:11.295Z",
          "_id": "a04bd7c2-2cf8-4dee-8784-26e71e5d12ca"
        }
      ]
    }
  }
  ```

  `404 Not Found`

  ```json
  {
    "status": "fail",
    "message": "No events found"
  }
  ```

- ## Get events by day of the week

  `GET /api/v1/events`

  | Parameter    | Type  | Accepted values                                                |
  | ------------ | ----- | -------------------------------------------------------------- |
  | dayOfTheWeek | query | monday, tuesday, wednesday, thursday, friday, saturday, sunday |

  ### Response body examples

  `Request to: /api/v1/events?dayOfTheWeek=saturday`

  `200 OK`

  ```json
  {
    "status": "success",
    "data": {
      "events": [
        {
          "description": "Hackathon event",
          "dateTime": "2023-02-11T13:38:11.295Z",
          "createdAt": "2023-02-11T13:38:11.295Z",
          "_id": "a04bd7c2-2cf8-4dee-8784-26e71e5d12ca"
        }
      ]
    }
  }
  ```

  `Request to: /api/v1/events?dayOfTheWeek=sumday`

  `400 Bad Request`

  ```json
  {
    "status": "fail",
    "message": "Day of the week invalid"
  }
  ```

  `Request to: /api/v1/events?dayOfTheWeek=sunday`

  `404 Not Found`

  ```json
  {
    "status": "fail",
    "message": "No events found"
  }
  ```

- ## Get event by id

  `GET /api/v1/events/{id}`

  | Parameter | Type | Accepted Values   |
  | --------- | ---- | ----------------- |
  | id        | path | event hash string |

  ### Response body examples

  `Request to: /api/v1/events/a04bd7c2-2cf8-4dee-8784-26e71e5d12ca`

  `200 OK`

  ```json
  {
    "status": "success",
    "data": {
      "event": {
        "description": "Hackathon event",
        "dateTime": "2023-02-11T13:38:11.295Z",
        "createdAt": "2023-02-11T13:38:11.295Z",
        "_id": "a04bd7c2-2cf8-4dee-8784-26e71e5d12ca"
      }
    }
  }
  ```

  `Request to: /api/v1/events/123`

  `404 Not Found`

  ```json
  {
    "status": "fail",
    "message": "Event not found"
  }
  ```

- ## Delete events by day of the week

  `DELETE /api/v1/events`

  | Parameter    | Type  | Accepted values                                                |
  | ------------ | ----- | -------------------------------------------------------------- |
  | dayOfTheWeek | query | monday, tuesday, wednesday, thursday, friday, saturday, sunday |

  ### Response body example

  `Request to: /api/v1/events?dayOfTheWeek=saturday`

  `200 OK`

  ```json
  {
    "status": "success",
    "data": {
      "deletedEvents": [
        {
          "description": "Hackathon event",
          "dateTime": "2023-02-11T13:38:11.295Z",
          "createdAt": "2023-02-11T13:38:11.295Z",
          "_id": "a04bd7c2-2cf8-4dee-8784-26e71e5d12ca"
        }
      ]
    }
  }
  ```

  `Request to: /api/v1/events?dayOfTheWeek=monday`

  `200 OK`

  ```json
  {
    "status": "success",
    "data": {
      "deletedEvents": []
    }
  }
  ```

  `Request to: /api/v1/events?dayOfTheWeek=sumday`

  `400 Bad Request`

  ```json
  {
    "status": "fail",
    "message": "Day of the week invalid"
  }
  ```

  `Request to: /api/v1/events?dayOfTheWeek=monday`

  `404 Not Found`

  ```json
  {
    "status": "fail",
    "message": "No events found"
  }
  ```

- ## Delete event by id

  `DELETE /api/v1/events/{id}`

  | Parameter | Type | Accepted Values   |
  | --------- | ---- | ----------------- |
  | id        | path | event hash string |

  ### Response body examples

  `Request to: /api/v1/events/a04bd7c2-2cf8-4dee-8784-26e71e5d12ca`

  `200 OK`

  ```json
  {
    "status": "success",
    "data": {
      "event": {
        "description": "Hackathon event",
        "dateTime": "2023-02-11T13:38:11.295Z",
        "createdAt": "2023-02-11T13:38:11.295Z",
        "_id": "a04bd7c2-2cf8-4dee-8784-26e71e5d12ca"
      }
    }
  }
  ```

  `Request to: /api/v1/events/123`

  `404 Not Found`

  ```json
  {
    "status": "fail",
    "message": "Event not found"
  }
  ```

## Default routes

If a route that not exists is requested, the server return a 404 response:

```json
{
  "status": "fail",
  "message": "Route not found. You can see the API documentation at https://github.com/pedrobraghin/first-challenge"
}
```

If a server side error occurs, the server return a 500 response:

```json
{
  "status": "error",
  "message": "Internal server error. Please try again later"
}
```

## Deploy on Railway

<p>
  The API are deployed on Railway, so you can testing without necessarily intall the application on your machine.
  Just make the requests to link bellow:
</p>

```
https://first-challenge-pb.up.railway.app
```

[git]: https://git-scm.com
[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/get-npm

# Autocomplete service

## Project requirements
- Docker
- Docker Compose

## Project setup

- Define environment variables in the .env file. See .env.example for environment variables names.
- Start with: docker-compose up -d
- Default api endpoint: http://localhost:3000/api/

## Collector API

- POST /actions/

  Example input data:

  ```
  {
    "timestamp": "2018-07-24T14:02:14.236Z",
    "event": "login"
  }
  ```

  Example output data:

  ```
  {
    "timestamp": "2018-07-24T14:02:14.236Z",
    "eventId": "5b5735ae7c1915001a6e4377",
    "id": "5b5736fc7c1915001a6e4379"
  }
  ```

## Autocomplete

- GET /events/autocomplete
  
  Accepts arguments:

    - query (String)
  
      Word used to look for suggestions, example: "foo";
  
    - filter (Object)
  
      Filter defining fields, where, include, offset, and limit. Example: {limit: 10, skip: 20}

  Example input:

  ```
  {
    "query": "lo",
    "filter: {
      "limit": 2
    }
  }
  ```

  Example output:

  ```
  [
    {
      "name": "login",
      "id": "5b5735ae7c1915001a6e4377"
    },
    {
      "name": "logout",
      "id": "5b5735ae7c1915001a6e4378"
    }
  ]
  ```
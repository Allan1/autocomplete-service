# Autocomplete service

## Project requirements
- Docker
- Docker Compose

## Project setup

- Define environment variables in the .env file. See .env.example for environment variables names.
- Configure host, port and restApiRoot on server/config.json
- Start with: docker-compose up -d
- Default api endpoint: http://localhost:3000/api/

## Collector API

- POST /actions/

  Example input data:

  ```
  {
    "timestamp": "2018-07-24T14:02:14.236Z",
    "event": "buy"
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

  Example input:

  ```
  {
    "query": "bu"
  }
  ```

  Example output:

  ```
  [
    {
      "name": "buy",
      "id": "5b5735ae7c1915001a6e4377"
    }
  ]
  ```
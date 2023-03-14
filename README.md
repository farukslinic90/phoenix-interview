# phoenix-interview

## Install dependencies

`yarn install`

## Run server

`yarn dev`

## Run test

- Should have server running

- `yarn test`

## Playground

`run http://localhost:5000/`

### mutation

```
mutation {
  updateUser(message: "Updated message") {
    message
  }
}
```

### query

```
query {
  user {
    id
  }
}
```

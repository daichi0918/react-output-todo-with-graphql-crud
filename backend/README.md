### getTodo

```
query {
  getTodos {
    id
    title
  }
}
```

### createTodo

```
mutation createTodo($createTodoInput: CreateTodoInput!) {
  createTodo(createTodoInput: $createTodoInput) {
    id
    title
    content
  }
}
```

```
{
  "createTodoInput": {
    "title": "test"
  }
}
```

### updateTodo

```
mutation updateTodo($updateTodoInput: UpdateTodoInput!) {
  updateTodo(updateTodoInput: $updateTodoInput) {
    id
    title
    content
  }
}
```

```
{
"updateTodoInput": {
"id": 1,
"title": "test update",
"content": "update"
}
}

```

### deleteTodo

```

mutation deleteTodo($id: Int!) {
deleteTodo(id: $id) {
id
}
}

```

```
{
"id": 1
}

```

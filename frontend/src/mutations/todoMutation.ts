import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation createTodo($createTodoInput: CreateTodoInput!) {
    createTodo(createTodoInput: $createTodoInput) {
      id
      title
      content
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($updateTodoInput: UpdateTodoInput!) {
    updateTodo(updateTodoInput: $updateTodoInput) {
      id
      title
      content
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

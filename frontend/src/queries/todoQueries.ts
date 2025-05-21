import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      title
      content
    }
  }
`;
export const GET_TODO = gql`
  query GetTodo($id: Int!) {
    getTodo(id: $id) {
      id
      title
      content
    }
  }
`;

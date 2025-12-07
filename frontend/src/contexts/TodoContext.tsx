'use client';

// import { INITIAL_TODO_LIST, INITIAL_TODO_LIST_LENGTH } from '@/constants/data';
import type { Todo } from '../gql/graphql';
import { useGetTodosQuery } from '../gql/graphql';
import React, {
  type FC,
  type ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface Props {
  children: ReactNode;
}

interface TodoContextInterface {
  originalTodoList: Array<Todo>;
  setOriginalTodoList: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  todoListLength: number;
  setTodoListLength: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoContext = createContext({} as TodoContextInterface);

export const TodoProvider: FC<Props> = ({ children }) => {
  const [originalTodoList, setOriginalTodoList] = useState<Array<Todo>>([]);
  const [todoListLength, setTodoListLength] = useState<number>(0);

  const contextValue = useMemo(
    () => ({
      originalTodoList,
      setOriginalTodoList,
      todoListLength,
      setTodoListLength,
    }),
    [originalTodoList, todoListLength] // `originalTodoList`が変わった場合のみ再生成
  );

  const { data, loading, error } = useGetTodosQuery();

  useEffect(() => {
    if (loading || error) return;
    const todos =
      data?.getTodos?.filter((todo): todo is Todo => Boolean(todo)) ?? [];
    setOriginalTodoList(todos);
    setTodoListLength(todos.length);
  }, [data, error, loading]);
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

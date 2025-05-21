'use client';

import { useQuery } from '@apollo/client';
// import { INITIAL_TODO_LIST, INITIAL_TODO_LIST_LENGTH } from '@/constants/data';
import type { TodoType } from '../type';
import React, {
  type FC,
  type ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { GET_TODOS } from '../queries/todoQueries';

interface Props {
  children: ReactNode;
}

interface TodoContextInterface {
  originalTodoList: Array<TodoType>;
  setOriginalTodoList: React.Dispatch<React.SetStateAction<Array<TodoType>>>;
  todoListLength: number;
  setTodoListLength: React.Dispatch<React.SetStateAction<number>>;
}

export const TodoContext = createContext({} as TodoContextInterface);

export const TodoProvider: FC<Props> = ({ children }) => {
  const [originalTodoList, setOriginalTodoList] = useState<Array<TodoType>>([]);
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

  const { data, loading, error } = useQuery<{ getTodos: TodoType[] }>(
    GET_TODOS
  );

  useEffect(() => {
    if (loading || error) return;
    if (data?.getTodos && Array.isArray(data.getTodos)) {
      setOriginalTodoList(data.getTodos);
      setTodoListLength(data.getTodos.length);
    }
  }, [data, error, loading]);
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

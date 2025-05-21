/**
 * TodoTop
 *
 * @packge hooks
 */

import { useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { TodoContext } from '../contexts/TodoContext';
import type { TodoType } from '../type';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from '../mutations/todoMutation';
import { GET_TODOS } from '../queries/todoQueries';

/**
 * useTodoTop
 */
export const useTodoTop = () => {
  const navigate = useNavigate();
  const [deleteTodo] = useMutation<{ deleteTask: number }>(DELETE_TODO);
  /**
   * state定義
   */
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  const { originalTodoList, setOriginalTodoList } = useContext(TodoContext);

  /**
   * action定義
   */
  /**
   * searchKeyWordの更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleSearchKeyWordInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchKeyWord(e.target.value);

  /**
   * 表示用TodoList
   */
  const showTodoList = useMemo(() => {
    return originalTodoList.filter((todo: TodoType) => {
      const regexp = new RegExp('^' + searchKeyWord, 'i');
      return todo.title.match(regexp);
    });
  }, [searchKeyWord, originalTodoList]);

  /**
   * todoの削除処理
   * @param { number } targetId
   * @param { string } taskName
   */
  const handleDeleteTodoTask = async (targetId: number, taskName: string) => {
    if (window.confirm(`「${targetId}:${taskName}」を削除していいですか？`)) {
      await deleteTodo({
        variables: { id: targetId },
        refetchQueries: [{ query: GET_TODOS }],
      });
      // if (typeof id !== 'number') return;
      // const newTodoList = originalTodoList.filter(
      //   (todo: TodoType) => todo.id !== targetId
      // );
      // setOriginalTodoList(newTodoList);
    }
  };
  /**
   * 詳細ページ遷移
   * @param { number } targetId
   */
  const goToDetailPage = (targetId: number) => {
    navigate(`/detail/${targetId}`);
  };

  /**
   * 編集ページ遷移
   * @param { number } targetId
   */
  const goToEditPage = (targetId: number) => {
    navigate(`/edit/${targetId}`);
  };

  return {
    originalTodoList,
    setOriginalTodoList,
    searchKeyWord,
    setSearchKeyWord,
    showTodoList,
    handleSearchKeyWordInput,
    handleDeleteTodoTask,
    goToDetailPage,
    goToEditPage,
  };
};

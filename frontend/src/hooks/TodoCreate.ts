/**
 * TodoCreate
 *
 * @packge hooks
 */

import { useContext } from 'react';
import { useNavigate } from 'react-router';
// import { TodoContext } from '../contexts/TodoContext';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z
    .string()
    .min(1, 'titleを入力してください')
    .max(20, '20文字以内で入力してください'),
  content: z
    .string()
    .min(1, 'contentを入力してください')
    .max(100, '100文字以内で入力してください'),
});

type FormInput = z.infer<typeof schema>;

const DEFAULT_FROM_INPUT: FormInput = {
  title: '',
  content: '',
};

type UseTodoCreateReturn = () => {
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
  handleAddTodo: () => Promise<void>;
};

/**
 * useTodoCreate
 */
export const useTodoCreate: UseTodoCreateReturn = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_FROM_INPUT,
  });

  const {
    originalTodoList,
    setOriginalTodoList,
    todoListLength,
    setTodoListLength,
  } = useContext(TodoContext);

  const onSubmit = async (data: FormInput) => {
    const { title, content } = data;
    const newId = todoListLength + 1;
    const newTodoList = [
      ...originalTodoList,
      {
        id: newId,
        title: title,
        content: content,
      },
    ];
    setOriginalTodoList(newTodoList);
    setTodoListLength(newId);
    reset();
    navigate('/');
  };

  return { register, errors, handleAddTodo: handleSubmit(onSubmit) };
};

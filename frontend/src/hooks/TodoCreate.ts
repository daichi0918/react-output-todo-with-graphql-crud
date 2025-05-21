/**
 * TodoCreate
 *
 * @packge hooks
 */

import { useNavigate } from 'react-router';
// import { TodoContext } from '../contexts/TodoContext';
import {
  type FieldErrors,
  type UseFormRegister,
  useForm,
} from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CREATE_TODO } from '../mutations/todoMutation';
import { useMutation } from '@apollo/client';
import type { TodoType } from '../type';
import { GET_TODOS } from '../queries/todoQueries';

const schema = z.object({
  title: z
    .string()
    .min(1, 'titleを入力してください')
    .max(20, '20文字以内で入力してください'),
  content: z.string().optional(),
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
  const [createTodo] = useMutation<{ createTodo: TodoType }>(CREATE_TODO);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_FROM_INPUT,
  });

  // const {
  //   originalTodoList,
  //   setOriginalTodoList,
  //   todoListLength,
  //   setTodoListLength,
  // } = useContext(TodoContext);

  const onSubmit = async (data: FormInput) => {
    // const newId = todoListLength + 1;
    // const newTodoList = [
    //   ...originalTodoList,
    //   {
    //     id: newId,
    //     title: title,
    //     content: content,
    //   },
    // ];
    // setOriginalTodoList(newTodoList);
    // setTodoListLength(newId);
    await createTodo({
      variables: {
        createTodoInput: data,
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
    reset();
    navigate('/');
  };

  return { register, errors, handleAddTodo: handleSubmit(onSubmit) };
};

/**
 * TodoEdit
 *
 * @packge hooks
 */
import { useContext, useMemo } from 'react';
// import { TodoContext } from '../contexts/TodoContext';
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z
    .string()
    .min(1, 'titleを入力してください')
    .max(20, '20文字以内で入力してください'),
  content: z.string().optional(),
});

type FormInput = z.infer<typeof schema>;

// type UseTodoCreateReturn = () => {
//   register: UseFormRegister<FormInput>;
//   errors: FieldErrors<FormInput>;
//   handleAddTodo: () => Promise<void>;
// };

/**
 * useTodoEdit
 */
export const useTodoEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  /**
   * state定義
   */
  const {
    originalTodoList,
    setOriginalTodoList,
    todoListLength,
    setTodoListLength,
  } = useContext(TodoContext);

  // 該当のtodoを取得
  const todo = useMemo(
    () => originalTodoList.find((todo) => String(todo.id) === id),
    [id, originalTodoList]
  );
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: { title: todo?.title, content: todo?.content },
  });

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
    navigate('/');
  };

  return { control, errors, handleUpdateTodo: handleSubmit(onSubmit) };
};

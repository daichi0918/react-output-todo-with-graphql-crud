/**
 * TodoEdit
 *
 * @packge hooks
 */
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  GetTodosDocument,
  useGetTodoQuery,
  useUpdateTodoMutation,
} from '../gql/graphql';
import { useEffect } from 'react';

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
  const [updateTodo] = useUpdateTodoMutation();
  /**
   * state定義
   */

  // 該当のtodoを取得
  const { data } = useGetTodoQuery({
    variables: { id: Number(id) },
  });
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  useEffect(() => {
    if (data?.getTodo) {
      reset({
        title: data.getTodo.title,
        content: data.getTodo.content ?? '',
      });
    }
  }, [data, reset]);

  const onSubmit = async (data: FormInput) => {
    await updateTodo({
      variables: {
        updateTodoInput: { id: Number(id), ...data },
      },
      refetchQueries: [{ query: GetTodosDocument }],
    });
    reset();
    navigate('/');
  };

  return { control, errors, handleUpdateTodo: handleSubmit(onSubmit) };
};

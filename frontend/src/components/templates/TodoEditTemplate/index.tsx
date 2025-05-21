/**
 * TodoEditTemplate
 *
 * @package templates
 */
import { useTodoEdit } from '../../../hooks/TodoEdit';
import { SubmitButton } from '../../atoms/SubmitButton';
import { PageContainer } from '../../layouts/PageContainer';
import { InputFormSection } from '../../molecules/InputFormSection';
import { TextAreaSection } from '../../molecules/TextAreaFormSection';
import { NavSection } from '../../organisms/NavSection';
import style from './style.module.css';
import { Controller } from 'react-hook-form';
/**
 * @param {id: string } id
 * @return {JSX.Element}
 */

export const TodoEditTemplate = () => {
  const { control, errors, handleUpdateTodo } = useTodoEdit();
  return (
    <PageContainer>
      <NavSection />
      <h1 className={style.title}>Todo Edit</h1>
      <form className={style.container} onSubmit={handleUpdateTodo}>
        <div className={style.content}>
          <Controller
            name="title"
            render={({ field }) => (
              <InputFormSection
                placeholder={'Title'}
                errorMessage={errors.title?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>
        <div className={style.content}>
          <Controller
            name="content"
            render={({ field }) => (
              <TextAreaSection
                placeholder={'Content'}
                errorMessage={errors.content?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>
        <div className={style.content}>
          <SubmitButton type={'submit'} buttonName={'Update Todo'} />
        </div>
      </form>
    </PageContainer>
  );
};

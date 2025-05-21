// /**
//  * TodoCreate
//  *
//  * @package templates
//  */

// import { InputForm } from '../../atoms/InputForm';
// import { TextAreaForm } from '../../atoms/TextAreaForm';
// import { SubmitButton } from '../../atoms/SubmitButton';
// import { useTodoCreate } from '../../../hooks/TodoCreate';
// import style from './style.module.css';
// import { PageContainer } from '../../layouts/PageContainer';
// import { NavSection } from '../../organisms/NavSection';

// /**
//  * @returns {JSX.Element}
//  */
// export const TodoCreateTemplate = () => {
//   const { register, errors, handleAddTodo } = useTodoCreate();
//   return (
//     <>
//       <PageContainer>
//         <NavSection />
//         <h1 className={style.title}>Create Todo</h1>
//         <form className={style.container} onSubmit={handleAddTodo}>
//           <div className={style.content}>
//             <InputForm placeholder={'Title'} {...register('title')} />
//             {errors['title'] && (
//               <div className={style.error}>
//                 <span>{errors['title'].message}</span>
//               </div>
//             )}
//           </div>
//           <div className={style.content}>
//             <TextAreaForm placeholder={'Content'} {...register('content')} />
//             {errors['content'] && (
//               <div className={style.error}>
//                 <span>{errors['content'].message}</span>
//               </div>
//             )}
//           </div>
//           <div className={style.content}>
//             <SubmitButton type={'submit'} buttonName={'Create Todo'} />
//           </div>
//         </form>
//       </PageContainer>
//     </>
//   );
// };

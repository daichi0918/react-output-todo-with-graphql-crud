/**
 * TodoList
 *
 * @package organisms
 */
import style from './styles.module.css';
import type { TodoType } from '../../../const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faFile,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

type TodoListType = {
  showTodoList: Array<TodoType>;
  handleDeleteTodoTask: (targetId: number, taskName: string) => void;
  goToDetailPage: (targetId: number) => void;
  goToEditPage: (targetId: number) => void;
};

/**
 *
 * @param props
 * @returns {JSX.Element}
 */
export const TodoList = (props: TodoListType) => {
  const { showTodoList, handleDeleteTodoTask, goToEditPage } = props;

  return (
    <ul className={style.todo_top_list}>
      {showTodoList.length > 0 &&
        showTodoList.map((todo: TodoType) => (
          <li key={todo.id} className={style.todo_top_item}>
            <span>{todo.title}</span>
            <div className={style.todo_top_icons}>
              {/* <div className={style.icon_wrapper}>
                <FontAwesomeIcon
                  icon={faFile}
                  size="lg"
                  onClick={() => goToDetailPage(todo.id)}
                />
              </div> */}
              <div className={style.icon_wrapper}>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="lg"
                  onClick={() => goToEditPage(todo.id)}
                />
              </div>
              <div className={style.icon_wrapper}>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  onClick={() => handleDeleteTodoTask(todo.id, todo.title)}
                />
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

/**
 * SubmitButton
 *
 * @package atoms
 */
import type { JSX } from 'react';
import style from './styles.module.css';

type Button = {
  buttonName: string;
} & JSX.IntrinsicElements['button'];

/**
 * @param {Button} props
 * @returns {JSX.Element}
 */
export const SubmitButton = (props: Button) => {
  const { buttonName, onClick } = props;
  return (
    <button className={style.button} onClick={onClick}>
      {buttonName}
    </button>
  );
};

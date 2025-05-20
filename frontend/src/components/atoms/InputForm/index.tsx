/**
 * InputForm
 *
 * @package atoms
 */

import { type JSX, forwardRef } from 'react';
import style from './style.module.css';

type InputFormType = JSX.IntrinsicElements['input'];

/**
 *
 * @param {InputFormType} props
 * @returns {JSX.Element}
 */
export const InputForm = forwardRef<HTMLInputElement, InputFormType>(
  ({ placeholder, readOnly = false, ...rest }, ref) => {
    return (
      <input
        type="text"
        className={style.input}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
        {...rest}
      />
    );
  }
);

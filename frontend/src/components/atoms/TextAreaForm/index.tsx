/**
 * TextAreaForm
 *
 * @package atoms
 */
import { forwardRef, type JSX } from 'react';
import style from './style.module.css';

type TextAreaFormType = JSX.IntrinsicElements['textarea'];

/**
 * @param {TextAreaFormType} props
 * @returns {JSX.Element}
 */
export const TextAreaForm = forwardRef<HTMLTextAreaElement, TextAreaFormType>(
  ({ placeholder, readOnly = false, ...rest }, ref) => {
    return (
      <textarea
        className={style.textarea}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
        {...rest}
      />
    );
  }
);

import type { FC, ComponentProps } from 'react';
import styles from './style.module.css';
import { InputForm } from '../../atoms/InputForm';

type InputFormSectionProps = ComponentProps<'input'> & {
  errorMessage?: string;
};

export const InputFormSection: FC<InputFormSectionProps> = (props) => (
  <>
    <InputForm placeholder={'Title'} {...props} />
    {props?.errorMessage && (
      <p className={styles.error}>{props.errorMessage}</p>
    )}
  </>
);

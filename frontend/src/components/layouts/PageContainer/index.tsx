import type { ReactNode } from 'react';
import style from './style.module.css';

type Props = {
  children: ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return <div className={style.container}>{children}</div>;
};

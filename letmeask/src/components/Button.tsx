import { ButtonHTMLAttributes } from 'react';
import '../styles/Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

function Button({ isOutlined, ...props }: ButtonProps) {
  return (
    <button className="button" { ...props } />
  );
}

export default Button;

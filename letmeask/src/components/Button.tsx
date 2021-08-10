import { ButtonHTMLAttributes } from 'react';
import '../styles/Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  return (
    <button type="button" { ...props } />
  );
}

export default Button;

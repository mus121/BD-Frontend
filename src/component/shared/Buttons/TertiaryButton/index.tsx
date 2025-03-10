import clsx from 'clsx';
import './style.scss';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface TertiaryButtonProps extends ComponentPropsWithoutRef<'button'> {
  type?: 'button' | 'submit' | 'reset';
  text?: React.ReactNode;
  tertiaryButtonClassName?: string;
  sizeVariant?: 'xs' | 'sm' | 'base';
  colorVariant: 'orange' | 'black' | 'gray' | 'lightGray';
  isDisabled?: boolean;
  width?: string;
  children?: ReactNode;
}

function TertiaryButton({
  type = 'button',
  text = 'Button text',
  tertiaryButtonClassName = '',
  sizeVariant = 'xs',
  colorVariant = 'orange',
  children,
  ...props
}: TertiaryButtonProps) {
  const className = clsx(
    'primaryButtonGeneric',
    `${sizeVariant}Size--TertiaryButton`,
    `${colorVariant}--TertiaryButton`,
    tertiaryButtonClassName,
  );

  return (
    <button
      {...props}
      type={type}
      className={className}
    >
      {children || text}
    </button>
  );
}
export default TertiaryButton;

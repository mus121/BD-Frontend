/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import './style.scss';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface SecondaryButtonProps extends ComponentPropsWithoutRef<'button'> {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  secondaryButtonClassName?: string;
  sizeVariant?: 'xs' | 'sm' | 'base';
  colorVariant: 'orange' | 'black' | 'gray' | 'lightGray';
  children?: ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  type = 'button',
  text = 'Button text',
  secondaryButtonClassName = '',
  sizeVariant = 'xs',
  colorVariant = 'orange',
  children,
  ...props
}) => {
  const className = clsx(
    'secondaryButtonGeneric',
    `${sizeVariant}Size--SecondaryButton`,
    `${colorVariant}--SecondaryButton`,
    secondaryButtonClassName,
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
};

export default SecondaryButton;

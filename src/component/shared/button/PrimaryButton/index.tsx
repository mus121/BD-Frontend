/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import './style.scss';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface PrimaryButtonProps extends ComponentPropsWithoutRef<'button'> {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  primaryButtonClassName?: string;
  sizeVariant?: 'xs' | 'sm' | 'base';
  colorVariant: 'orange' | 'black' | 'gray' | 'lightGray';
  children?: ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type = 'button',
  text = 'Button text',
  primaryButtonClassName = '',
  sizeVariant = 'xs',
  colorVariant = 'orange',
  children,
  ...props
}) => {
  const className = clsx(
    'primaryButtonGeneric',
    `${sizeVariant}Size--PrimaryButton`,
    `${colorVariant}--PrimaryButton`,
    primaryButtonClassName,
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

export default PrimaryButton;

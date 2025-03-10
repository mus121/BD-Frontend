/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import './style.scss';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface ImpactButtonProps extends ComponentPropsWithoutRef<'button'> {
  type?: 'button' | 'submit' | 'reset';
  text?: string;
  impactButtonClassName?: string;
  sizeVariant?: 'xs' | 'sm' | 'base';
  colorVariant: 'orange' | 'black' | 'gray' | 'lightGray';
  children?: ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const ImpactButton = ({
  type = 'button',
  text = 'Button text',
  impactButtonClassName = '',
  sizeVariant = 'xs',
  colorVariant = 'orange',
  children,
  ...props
}: ImpactButtonProps) => {
  const className = clsx(
    'ImpactButtonGeneric',
    `${sizeVariant}Size--ImpactButton`,
    `${colorVariant}--ImpactButton`,
    impactButtonClassName,
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

export default ImpactButton;

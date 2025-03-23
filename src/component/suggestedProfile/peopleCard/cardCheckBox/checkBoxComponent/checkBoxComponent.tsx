import React from 'react';
interface CheckboxProps {
  checked: boolean;
  onClick: (checked: boolean) => void;
  sizeVariant?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  id?: string;
  isDisabled?: boolean;
  dataCy?: string;
}
declare const CheckboxComponent: React.FC<CheckboxProps>;
export default CheckboxComponent;

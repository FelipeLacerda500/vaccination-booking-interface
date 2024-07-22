import React, { forwardRef } from 'react';
import { CustomDatePickerContainer } from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  minDate?: boolean;
  maxDate?: boolean;
}

export const CustomDatePicker = forwardRef<HTMLInputElement, IInputProps>(
  ({ minDate, maxDate, ...rest }, ref) => {
    return (
      <CustomDatePickerContainer
        type="date"
        min={minDate ? `${new Date().toISOString().split('T')[0]}` : undefined}
        max={maxDate ? `${new Date().toISOString().split('T')[0]}` : undefined}
        ref={ref}
        {...rest}
      />
    );
  },
);

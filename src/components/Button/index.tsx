import React, { forwardRef } from 'react';
import { StyledButton } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledButton ref={ref} {...rest}>
        {children}
      </StyledButton>
    );
  },
);

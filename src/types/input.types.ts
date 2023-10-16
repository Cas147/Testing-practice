import {UseFormRegister } from 'react-hook-form'
import { LoginFormValues } from '../pages/Login/types';

export type InputProps = {
  name?: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  errors?: Record<string, any>;
  register: UseFormRegister<LoginFormValues>;
  dataTestid?: string;
  placeholder? : string;
};

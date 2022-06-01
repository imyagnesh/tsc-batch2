import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/CustomForm';
import axiosInstance from '../../utils/axiosInstance';
import { registerFields, registerInitValues } from './fields';

function Register() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;
      const res = await axiosInstance.post('register', rest);
      sessionStorage.setItem('@app_token', JSON.stringify(res));
      actions.resetForm();
      navigate('/');
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  };

  return (
    <CustomForm
      initialValues={registerInitValues}
      onSubmit={onSubmit}
      fields={registerFields}
      btnText="Sign up"
    />
  );
}

export default Register;

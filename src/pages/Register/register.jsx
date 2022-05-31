import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/CustomForm';
import axiosInstance from '../../utils/axiosInstance';
import { registerFields, registerInitValues } from './fields';

function Register() {
  const navigate = useNavigate();

  const onSubmit = async values => {
    try {
      const { confirmPassword, ...rest } = values;
      const res = await axiosInstance.post('register', rest);

      console.log(res.data);
      navigate('/');
    } catch (error) {
      console.log(error.message);
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

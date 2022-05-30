import React from 'react';
import CustomForm from '../../components/CustomForm';
import { registerFields, registerInitValues } from './fields';

function Register() {
  const onSubmit = values => {
    console.log(values);
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

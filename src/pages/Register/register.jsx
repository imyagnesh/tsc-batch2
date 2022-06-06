import React from 'react';
import CustomForm from '../../components/CustomForm';
import { AuthContext } from '../../context/authContext';
import { registerFields, registerInitValues } from './fields';

function Register() {
  return (
    <AuthContext.Consumer>
      {({ onRegister }) => (
        <CustomForm
          initialValues={registerInitValues}
          onSubmit={onRegister}
          fields={registerFields}
          btnText="Sign up"
        />
      )}
    </AuthContext.Consumer>
  );
}

export default Register;

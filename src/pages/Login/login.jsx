import React from 'react';
import Checkbox from '../../components/Checkbox';
import LinkUI from '../../components/LinkUI';
import { loginFields, loginInitValues } from './fields';
import CustomForm from '../../components/CustomForm';

function Login() {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <CustomForm
      initialValues={loginInitValues}
      onSubmit={onSubmit}
      fields={loginFields}
      btnText="Sign in"
    >
      <div className="flex items-center justify-between">
        <Checkbox id="remember-me" name="remember-me" label="Remember me" />
        <div className="text-sm">
          <LinkUI href="#">Forgot your password?</LinkUI>
        </div>
      </div>
    </CustomForm>
  );
}

export default Login;

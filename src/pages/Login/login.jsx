import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Field } from 'formik';
import Checkbox from '../../components/Checkbox';
import LinkUI from '../../components/LinkUI';
import { loginFields, loginInitValues } from './fields';
import CustomForm from '../../components/CustomForm';
import axiosInstance from '../../utils/axiosInstance';

function Login() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      const { rememberMe, ...rest } = values;
      const res = await axiosInstance.post('login', rest);
      localStorage.setItem('@app_remember_me', rememberMe);
      if (rememberMe) {
        localStorage.setItem('@app_token', JSON.stringify(res));
      } else {
        sessionStorage.setItem('@app_token', JSON.stringify(res));
      }
      actions.resetForm();
      navigate('/');
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  };

  return (
    <CustomForm
      initialValues={loginInitValues}
      onSubmit={onSubmit}
      fields={loginFields}
      btnText="Sign in"
    >
      <div className="flex items-center justify-between">
        <Field id="rememberMe" name="rememberMe" label="Remember me" component={Checkbox} />
        <div className="text-sm">
          <LinkUI href="#">Forgot your password?</LinkUI>
        </div>
      </div>
    </CustomForm>
  );
}

export default Login;

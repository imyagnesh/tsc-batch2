import React from 'react';
import { Formik } from 'formik';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import LinkUI from '../../components/LinkUI';
import TextInput from '../../components/TextInput';

function Login() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <TextInput
              value={values.email}
              onChange={handleChange}
              error="Something Wrong"
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              className="rounded-t-md"
            />
            <TextInput
              value={values.password}
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              className="rounded-b-md"
            />
          </div>

          <div className="flex items-center justify-between">
            <Checkbox id="remember-me" name="remember-me" label="Remember me" />
            <div className="text-sm">
              <LinkUI href="#">Forgot your password?</LinkUI>
            </div>
          </div>

          <Button type="submit">Sign in</Button>
        </form>
      )}
    </Formik>
  );
}

export default Login;

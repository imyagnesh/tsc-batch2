import React from 'react';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import LinkUI from '../../components/LinkUI';
import TextInput from '../../components/TextInput';

function Login() {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <TextInput
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
          className="rounded-t-md"
        />
        <TextInput
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
  );
}

export default Login;

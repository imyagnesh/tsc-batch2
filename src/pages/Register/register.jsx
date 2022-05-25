import React from 'react';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

function Register() {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <TextInput
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Name"
          className="rounded-t-md"
        />
        <TextInput
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email address"
        />
        <TextInput
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          placeholder="Password"
        />
        <TextInput
          id="confirm-password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          placeholder="Confirm Password"
          className="rounded-b-md"
        />
      </div>
      <div>
        <Button type="submit">Sign up</Button>
      </div>
    </form>
  );
}

export default Register;

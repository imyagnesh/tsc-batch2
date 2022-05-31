import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '../Button';

function CustomForm({ fields, btnText, children, ...props }) {
  return (
    <Formik {...props}>
      {({ dirty, isValid }) => (
        <Form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            {fields.map(x => (
              <Field key={x.name} {...x} />
            ))}
          </div>
          {children}
          <Button disabled={!dirty || !isValid} type="submit">
            {btnText}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CustomForm;

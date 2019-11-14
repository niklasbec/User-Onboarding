import React from 'react';
import { Form, Field, withFormik } from 'formik';

function newForm() {
  return (
    <div>
      <Form>
          <label>Name
          <Field type='text' name='name' placeholder='Enter name here'/>
          </label>

          <label>Email
          <Field type='email' name='email' placeholder='Enter email here'/>
          </label>

          <label>Password
          <Field type='password' name='password' placeholder='Enter password here'/>
          </label>

          <label>TOS
          <Field type='checkbox' name='tos' />
          </label>
          <input type='submit'></input>
      </Form>
    </div>
  );
}

const newFormWithFormik = withFormik ({
    mapPropsToValues() {
        return {
            name: '',
            email: '',
            password: '',
            tos: false

        }
    }
})(newForm)

export default newFormWithFormik;

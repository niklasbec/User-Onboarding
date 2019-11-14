import React from 'react';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function newForm() {
  return (
    <div>
      <Form>
          <ErrorMessage name="name" render={msg => <div className="error">{msg}</div>}/>
          <label>Name
          <Field type='text' name='name' placeholder='Enter name here'/>
          </label>

          <ErrorMessage name="email" render={msg => <div className="error">{msg}</div>}/>
          <label>Email
          <Field type='email' name='email' placeholder='Enter email here'/>
          </label>

          <ErrorMessage name="password" render={msg => <div className="error">{msg}</div>}/>
          <label>Password
          <Field type='password' name='password' placeholder='Enter password here'/>
          </label>

          <ErrorMessage name="tos" render={msg => <div className="error">{msg}</div>}/>
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
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please enter your name!'),
        email: Yup.string().required('Please enter a valid email!'),
        password: Yup.string().required('Please enter a password!'),
        tos: Yup.boolean().required('Please agree to our TOS')
    }),

    handleSubmit(values, tools) {
        console.log(values);
        console.log(tools);
        
        axios.post('https://reqres.in/api/users', values)

        .then(response => {
            tools.resetForm()
            })
            .catch(error => {
                console.log(error);
            })
    }


})(newForm)

export default newFormWithFormik;

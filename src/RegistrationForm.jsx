/**
 * Registration form.
 * The component we have built together as the part of
 * React Advanced Form presentation on Medium.
 */
import React from 'react'
import { Form, Field } from 'react-advanced-form'
import { Input, Button } from 'react-advanced-form-addons'

export default class RegistrationForm extends React.Component {
  registerUser = ({ serialized, fields, form }) => {
    return fetch('https://backend.dev', {
      body: JSON.stringify(serialized)
    })
  }
  
  render() {
    return (
      <Form
        action={this.registerUser}
        onSubmitStart={this.props.onSubmitStart}>
        
        <Field.Group name="primaryInfo">
          <Input
            name="firstName"
            label="Nama"
            required={({ get }) => {
              return !!get(['primaryInfo', 'lastName', 'value'])
            }} />
        </Field.Group>

        <Field.Group name="primaryInfo">
          <Input
            name="userEmail"
            type="email"
            label="E-mail"
            required />
        </Field.Group>

        <Input
          name="userPassword"
          type="password"
          label="Password"
          required />
        <Input
          name="confirmPassword"
          type="password"
          label="Konfirmasi password"
          required
          skip />
        <Button primary>Registrasi</Button>
      </Form>
    );
  }
}

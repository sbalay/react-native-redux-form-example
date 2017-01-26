import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import MyTextInput from './MyTextInput'
import styles from './MyForm.styles';

function MyForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Field
        name={'email'}
        component={MyTextInput}
        placeholder={'Email'}
      />
      <Field
        name={'password'}
        component={MyTextInput}
        placeholder={'Password'}
        secureTextEntry
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

export default reduxForm({
  form: 'signIn',
  validate: (values) => {
    const errors = {};
    errors.email = !values.email
      ? 'Email field is required'
      : !emailRegex.test(values.email)
      ? 'Email format is invalid'
      : undefined;

    errors.password = !values.password
      ? 'Password field is required'
      : values.password.length < 8
      ? 'Password must be at least 8 characters long'
      : undefined;

    return errors;
  }
})(MyForm);

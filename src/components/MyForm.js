import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import MyTextInput from './MyTextInput'
import styles from './MyForm.styles';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

function MyForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Field
        name={'email'}
        component={MyTextInput}
        placeholder={'Email'}
        validate={[
          (val) => val ? undefined : 'Email field is required',
          (val) => emailRegex.test(val) ? undefined : 'Email format is invalid'
        ]}
      />
      <Field
        name={'password'}
        component={MyTextInput}
        placeholder={'Password'}
        secureTextEntry
        validate={[
          (val) => val ? undefined : 'Password field is required',
          (val) => val && val.length >= 8 ? undefined : 'Password must be at least 8 characters long'
        ]}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


export default reduxForm({ form: 'signIn' })(MyForm);

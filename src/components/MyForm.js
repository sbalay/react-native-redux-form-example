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

export default reduxForm({ form: 'signIn' })(MyForm);

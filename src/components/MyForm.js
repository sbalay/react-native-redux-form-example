import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import MyTextInput from './MyTextInput'
import styles from './MyForm.styles';

function MyForm(props) {

  const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={styles.formLabel}>Email</Text>
      <Field
        style={styles.formInput}
        name={'email'}
        component={MyTextInput}
      />
      <Text>The form is:</Text>
      {
        formStates.filter((state) => props[state]).map((state) => {
          return <Text key={state} style={{ fontWeight: 'bold'}}> - { state }</Text>
        })
      }
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default reduxForm({ form: 'signIn' })(MyForm);

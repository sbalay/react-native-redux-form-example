import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import MyTextInput from './MyTextInput'
import styles from './MyForm.styles';

function MyForm({ handleSubmit }) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={styles.formLabel}>Email</Text>
      <Field
        style={styles.formInput}
        name={'email'}
        component={MyTextInput}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default reduxForm({ form: 'signIn' })(MyForm);

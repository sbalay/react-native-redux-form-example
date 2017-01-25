import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text } from 'react-native';

import MyTextInput from './MyTextInput'
import styles from './MyForm.styles';

function MyForm() {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={styles.formLabel}>Email</Text>
      <Field
        style={styles.formInput}
        name={'email'}
        component={MyTextInput}
      />
    </ScrollView>
  );
}

export default reduxForm({ form: 'signIn' })(MyForm);

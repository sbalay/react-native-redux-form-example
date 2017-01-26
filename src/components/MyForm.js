import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import MyTextInput from './MyTextInput';
import styles from './MyForm.styles';

const phoneFormatter = (number) => {
  if (!number) return '';
  // NNN-NNN-NNNN
  const splitter = /.{1,3}/g;
  number = number.replace(/-/g, '').substring(0, 10);
  return number.toString().substring(0, 7).match(splitter).join('-') + number.substring(7);
};

function MyForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Field
        name={'phone_number'}
        component={MyTextInput}
        placeholder={'Phone (NNN-NNN-NNNN)'}
        format={phoneFormatter}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


export default reduxForm({
  form: 'signIn'
})(MyForm);

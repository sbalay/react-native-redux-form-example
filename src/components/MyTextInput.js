import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './MyTextInput.styles';

/**
 * to be wrapped with redux-form Field component
 */
export default function MyTextInput(props) {
  const { input, meta, ...inputProps } = props;

  // do not display warning if the field has not been touched or if it's currently being edited
  const validationStyles = meta.touched && !meta.active
    ? meta.valid ? styles.valid : styles.invalid
    : null;

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
      />
    </View>
  );
}

MyTextInput.propTypes = {
  input: React.PropTypes.shape({
    onBlur: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func.isRequired,
    value: React.PropTypes.any.isRequired
  }).isRequired,
  meta: React.PropTypes.shape({
    active: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string,
    invalid: React.PropTypes.bool.isRequired,
    pristine: React.PropTypes.bool.isRequired,
    visited: React.PropTypes.bool.isRequired
  }).isRequired
};

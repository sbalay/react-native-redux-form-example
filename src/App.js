import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';

import MyForm from './components/MyForm';

export default class MyComponent extends Component {

  render() {
    return <MyForm onSubmit={() => Alert.alert('Submitted!')}/>;
  }
}

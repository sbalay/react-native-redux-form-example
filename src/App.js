import React, { Component } from 'react';
import { Alert } from 'react-native';

import MyForm from './components/MyForm';

export default class MyComponent extends Component {

  render() {
    return <MyForm onSubmit={(values) => Alert.alert('Submitted!', JSON.stringify(values))}/>;
  }
}

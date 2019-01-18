import React from 'react';
import { YellowBox } from 'react-native';
import EventList from './EventList';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default class App extends React.Component {
  render() {
    return (
      <EventList />
    );
  }
}


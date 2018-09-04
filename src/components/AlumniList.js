import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlumniDetail from './AlumniDetail';

class AlumniList extends Component {
  state = { alumni: [] };

  componentWillMount() {
    axios.get('https://alumni.sabanciuniv.edu/ana-sayfa.json')
      .then(response => this.setState({ alumni: response.data }));
  }

  renderAlumni() {
    return this.state.alumni.map(alumni =>
      <AlumniDetail key={alumni.nid} alumni={alumni} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlumni()}
      </View>
    );
  }
}

export default AlumniList;

import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlumniDetail = (props) => (

  <Card>
    <CardSection style={styles.cardSectionStyle}>
    <View>
      <Image style={styles.imageStyle} source={{ uri: props.alumni.field_resim.src }} />
      <Text style={styles.textStyle}>{props.alumni.title}</Text>
      <Text>{props.alumni.field_fakulte}</Text>
      <Text>{props.alumni.field_basari_adi}</Text>
      <Text style={styles.buttonStyle}>{props.alumni.nothing}</Text>
    </View>
    </CardSection>
  </Card>
);

const styles = {
  buttonStyle: {
    padding: 4,
    color: '#fff',
    backgroundColor: '#3492ad',
    borderRadius: 5,
  },
  headerContentStyle: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: 85,
    width: 150,
    margin: 'auto',
    alignItems: 'center'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18
  }
};

export default AlumniDetail;

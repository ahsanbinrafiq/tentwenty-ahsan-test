import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {seatMapImage} from '../../../assets/Images';

const RenderSeatMapItem = ({item, index}: {item: string; index: number}) => {
  return (
    <View style={styles.renderSeatMapView}>
      <View style={styles.dateTextView}>
        <Text style={styles.timeTextStyle}>12:30</Text>
        <Text style={styles.cinemaHalTextStyle}>Cinetech + hall 1</Text>
      </View>
      <View
        style={[
          styles.seatMapView,
          {borderColor: index === 0 ? '#61C3F2' : 'rgba(32, 44, 67, 0.1)'},
        ]}>
        <Image source={seatMapImage} style={styles.seatMapImage} />
      </View>
      <View style={styles.dateTextView}>
        <Text style={styles.fromText}>From</Text>
        <Text style={styles.priceText}>50$</Text>
        <Text style={styles.orText}>Or</Text>
        <Text style={styles.priceText}>2500 bonus</Text>
      </View>
    </View>
  );
};

export default RenderSeatMapItem;

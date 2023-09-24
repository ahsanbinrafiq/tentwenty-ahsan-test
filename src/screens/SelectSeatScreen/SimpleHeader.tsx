import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {backArrow} from '../../../assets/Images';

const SimpleHeader = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.headerStyle}>
      <View style={{flex: 0.25}}>
        <TouchableOpacity
          style={styles.searchIconTouchable}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={backArrow} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.watchTextStyle}>The King’s Man</Text>
        <Text style={styles.timeStampTextStyle}>
          March 5, 2021 I 12:30 hall 1
        </Text>
      </View>
      <View style={{flex: 0.25}} />
    </View>
  );
};

export default SimpleHeader;

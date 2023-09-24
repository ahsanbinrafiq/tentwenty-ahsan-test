import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {searchIcon} from '../../../assets/Images';

const SimpleHeader = ({
  setSearchActive,
}: {
  setSearchActive: (val: boolean) => void;
}) => {
  return (
    <>
      <Text style={styles.watchTextStyle}>Watch</Text>
      <TouchableOpacity
        style={styles.searchIconTouchable}
        onPress={() => {
          setSearchActive(true);
        }}>
        <Image source={searchIcon} style={styles.iconStyle} />
      </TouchableOpacity>
    </>
  );
};

export default SimpleHeader;

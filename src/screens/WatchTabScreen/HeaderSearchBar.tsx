import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {closeIcon, searchIcon} from '../../../assets/Images';
import styles from './styles';

const HeaderSearchBar = ({
  setSearchWritingActive,
  setSearchText,
  setSearchActive,
}: {
  setSearchWritingActive: (val: boolean) => void;
  setSearchText: (val: string) => void;
  setSearchActive: (val: boolean) => void;
}) => {
  return (
    <View style={styles.headerSearchMainView}>
      <Image source={searchIcon} style={styles.iconStyle} />
      <TextInput
        style={styles.searchTextInputStyle}
        placeholder="TV shows, movies and more"
        placeholderTextColor={'rgba(32, 44, 67, 0.3)'}
        onChangeText={val => {
          if (val === '') {
            setSearchWritingActive(false);
          } else {
            setSearchWritingActive(true);
          }
          setSearchText(val);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setSearchActive(false);
          setSearchWritingActive(false);
          setSearchText('');
        }}>
        <Image source={closeIcon} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSearchBar;

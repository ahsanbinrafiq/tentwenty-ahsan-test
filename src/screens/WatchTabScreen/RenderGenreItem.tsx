import React from 'react';
import {GenreItemData} from './types';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const RenderGenreItem = ({item}: {item: GenreItemData}) => {
  return (
    <TouchableOpacity style={[styles.genreItemContainer]} onPress={() => {}}>
      <View style={styles.backgroundView}>
        <Text style={styles.genreItemTextStyle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderGenreItem;

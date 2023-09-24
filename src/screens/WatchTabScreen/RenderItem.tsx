import React from 'react';
import {ItemData} from './types';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const RenderItem = ({item}: {item: ItemData}, navigation: any) => {
  return (
    <TouchableOpacity
      style={[styles.itemContainer]}
      onPress={() => {
        navigation.navigate('MovieDetailScreen', {
          movieId: item?.id,
        });
      }}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
        }}
        style={styles.backgroundImage}
        resizeMode="stretch">
        <Text style={styles.itemTextStyle}>{item.original_title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RenderItem;

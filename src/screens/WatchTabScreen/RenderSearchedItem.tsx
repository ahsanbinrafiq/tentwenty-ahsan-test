import React from 'react';
import {ItemData} from './types';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {moreIcon} from '../../../assets/Images';

const RenderSearchedItem = ({item}: {item: ItemData}) => {
  return (
    <TouchableOpacity style={[styles.searchedItemContainer]} onPress={() => {}}>
      <View style={styles.searchedItemMainView}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          }}
          style={styles.searchedItemImage}
        />
        <View style={styles.searchedItemTextView}>
          <Text style={styles.searchedItemNameText}>{item.original_title}</Text>
          <Text style={styles.searchedItemSecondText}>{'Fantasy'}</Text>
        </View>
      </View>
      <View style={styles.moreIconView}>
        <Image source={moreIcon} style={styles.moreIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default RenderSearchedItem;

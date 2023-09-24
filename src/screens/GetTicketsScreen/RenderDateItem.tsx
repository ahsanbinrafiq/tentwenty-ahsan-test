import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const RenderDateItem = ({item, index}: {item: string; index: number}) => {
  return (
    <View
      style={[
        styles.renderDateItemView,
        {
          backgroundColor: index === 0 ? '#61C3F2' : 'rgba(166, 166, 166, 0.1)',
        },
      ]}>
      <Text style={{color: index === 0 ? '#ffffff' : '#202C43'}}>{item}</Text>
    </View>
  );
};

export default RenderDateItem;

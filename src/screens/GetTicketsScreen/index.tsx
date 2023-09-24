import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import SimpleHeader from './SimpleHeader';
import {useNavigation} from '@react-navigation/native';
import RenderDateItem from './RenderDateItem';
import RenderSeatMapItem from './RenderSeatMapItem';

const dateList = [
  '5 Mar',
  '6 Mar',
  '7 Mar',
  '8 Mar',
  '9 Mar',
  '10 Mar',
  '11 Mar',
  '12 Mar',
  '13 Mar',
  '14 Mar',
  '15 Mar',
  '16 Mar',
];
function GetTicketsScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SimpleHeader navigation={navigation} />
      <View style={styles.listMainView}>
        <View style={styles.dateMainView}>
          <Text style={styles.dateHeadingStyle}>Date</Text>
          <FlatList
            key={'%'}
            horizontal
            data={dateList}
            renderItem={RenderDateItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.seatMapListMainView}>
          <FlatList
            key={'#'}
            horizontal
            data={dateList}
            renderItem={RenderSeatMapItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={styles.bottomMainView}>
        <TouchableOpacity
          style={styles.bottomButtonMainStyle}
          onPress={() => {
            navigation.navigate('SelectSeatScreen');
          }}>
          <Text style={styles.buttonTextStyle}>Select Seats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default GetTicketsScreen;

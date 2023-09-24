import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import SimpleHeader from './SimpleHeader';
import {
  crossDark,
  frontScreenLine,
  notAvailableSeal,
  regularSeat,
  selectedSeat,
  vipSeat,
} from '../../../assets/Images';

const seatsMapping = [
  [1, 1, 4, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 4, 1, 1],
  [2, 1, 2, 1, 4, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 4, 1, 2, 1, 2],
  [1, 2, 1, 1, 4, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 4, 1, 1, 2, 1],
  [1, 1, 2, 1, 4, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 4, 1, 2, 1, 1],
  [
    2, 2, 1, 1, 1, 4, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 4, 1, 1, 1, 2,
    2,
  ],
  [
    1, 1, 2, 2, 1, 4, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 4, 1, 2, 2, 1,
    1,
  ],
  [
    2, 2, 1, 1, 1, 4, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 4, 1, 1, 1, 2,
    2,
  ],
  [
    1, 1, 2, 2, 1, 4, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 4, 1, 2, 2, 1,
    1,
  ],
  [
    2, 2, 1, 1, 1, 4, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 4, 1, 1, 1, 2,
    2,
  ],
  [
    3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3,
    3,
  ],
];

function SelectSeatScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SimpleHeader navigation={navigation} />
      <View style={styles.listMainView}>
        <View style={styles.frontScreenMainView}>
          <Image
            source={frontScreenLine}
            resizeMode="center"
            style={styles.frontScreenImage}
          />
          <Text style={styles.screenTextStyle}>SCREEN</Text>
        </View>
        <View style={styles.seatMapMainView}>
          {seatsMapping.map((item, index) => {
            return (
              <View key={Math.random()} style={styles.seatFirstMapMainView}>
                <Text style={styles.rowNumberingText}>{index + 1}</Text>
                <View style={styles.seatFirstMapView}>
                  {item.map((seatItem, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.seatItemTouchBox}>
                        {seatItem === 4 ? (
                          <View style={styles.seatGapView} />
                        ) : (
                          <Image
                            source={
                              seatItem === 1
                                ? notAvailableSeal
                                : seatItem === 2
                                ? regularSeat
                                : vipSeat
                            }
                            style={styles.seatMapItemImage}
                          />
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.plusMinusMainView}>
          <View style={styles.whiteCircleView}>
            <Text style={styles.whiteCircleText}>+</Text>
          </View>
          <View style={styles.whiteCirclesGap} />
          <View style={styles.whiteCircleView}>
            <Text style={styles.whiteCircleMinusText}>-</Text>
          </View>
        </View>
        <View style={styles.bottomLineView} />
      </View>
      <View style={styles.bottomMainView}>
        <View style={styles.seatsMainView}>
          <View style={styles.seatsFirstRow}>
            <View style={styles.seatItemView}>
              <Image source={selectedSeat} style={styles.seatItemImage} />
              <Text style={styles.seatItemText}>Selected</Text>
            </View>
            <View style={styles.seatItemView}>
              <Image source={notAvailableSeal} style={styles.seatItemImage} />
              <Text style={styles.seatItemText}>Not available</Text>
            </View>
          </View>
          <View style={styles.seatsSecondRow}>
            <View style={styles.seatItemView}>
              <Image source={vipSeat} style={styles.seatItemImage} />
              <Text style={styles.seatItemText}>VIP (150$)</Text>
            </View>
            <View style={styles.seatItemView}>
              <Image source={regularSeat} style={styles.seatItemImage} />
              <Text style={styles.seatItemText}>Regular (50 $)</Text>
            </View>
          </View>
        </View>
        <View style={styles.selectedSeatBubleMainView}>
          <View style={styles.selectedSeatBubleView}>
            <Text style={styles.bubleColumnText}>4 / </Text>
            <Text style={styles.bubleRowText}>3 row</Text>
            <Image source={crossDark} style={styles.bubleCrossImage} />
          </View>
        </View>
        <View style={styles.bottomButtonsMainView}>
          <TouchableOpacity
            style={styles.bottomButtonMainStyleGray}
            onPress={() => {
              navigation.navigate('SelectSeatScreen');
            }}>
            <Text style={styles.buttonTextStyleGray}>Total Price</Text>
            <Text style={styles.buttonTextStyleGrayPrice}>$ 50</Text>
          </TouchableOpacity>
          <View style={styles.gapBetweenButtons} />
          <TouchableOpacity
            style={styles.bottomButtonMainStyle}
            onPress={() => {
              navigation.navigate('SelectSeatScreen');
            }}>
            <Text style={styles.buttonTextStyle}>Proceed to pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SelectSeatScreen;

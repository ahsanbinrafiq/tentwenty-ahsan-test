import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  searchIconTouchable: {
    width: 40,
    height: 40,
  },
  iconStyle: {
    width: 30,
    height: 30,
    tintColor: '#000000',
  },
  watchTextStyle: {
    color: '#202C43',
    fontSize: 16,
    textAlign: 'center',
  },
  timeStampTextStyle: {
    color: '#61C3F2',
    fontSize: 12,
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listMainView: {
    backgroundColor: '#F6F6FA',
    flex: 1,
    paddingVertical: 20,
  },
  bottomMainView: {
    backgroundColor: '#ffffff',
    flex: 0.6,
    flexDirection: 'column',
    padding: 20,
  },
  bottomButtonMainStyle: {
    flex: 1,
    backgroundColor: '#61C3F2',
    height: 50,
    marginBottom: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {color: '#ffffff', fontSize: 14, fontWeight: '600'},
  bottomButtonMainStyleGray: {
    flex: 0.6,
    backgroundColor: 'rgba(166, 166, 166, 0.1)',
    height: 50,
    marginBottom: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonTextStyleGray: {color: '#202C43', fontSize: 10, fontWeight: '400'},
  buttonTextStyleGrayPrice: {color: '#202C43', fontSize: 16, fontWeight: '600'},
  seatsMainView: {flex: 1, flexDirection: 'column'},
  seatsFirstRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatsSecondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  seatItemView: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  seatItemImage: {width: 15, height: 15},
  seatItemText: {color: '#8F8F8F', fontSize: 12, marginStart: 10},
  selectedSeatBubleMainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  selectedSeatBubleView: {
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(166, 166, 166, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bubleColumnText: {color: '#202C43', fontSize: 14, fontWeight: '400'},
  bubleRowText: {color: '#202C43', fontSize: 10, fontWeight: '400'},
  bubleCrossImage: {width: 12, height: 12, marginStart: 10},
  bottomButtonsMainView: {flex: 1, flexDirection: 'row'},
  gapBetweenButtons: {marginHorizontal: 5},
  frontScreenMainView: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  frontScreenImage: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
  },
  screenTextStyle: {
    color: '#8F8F8F',
    fontSize: 8,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: -75,
  },
  plusMinusMainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    right: 15,
  },
  whiteCircleView: {
    borderRadius: 30,
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCircleText: {fontSize: 16, color: '#202C43'},
  whiteCircleMinusText: {fontSize: 18, color: '#202C43'},
  whiteCirclesGap: {marginHorizontal: 5},
  bottomLineView: {
    width: Dimensions.get('window').width - 40,
    height: 5,
    backgroundColor: '#202C43',
    borderRadius: 20,
    opacity: 0.3,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
  seatMapMainView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  seatFirstMapMainView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatFirstMapView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowNumberingText: {
    color: '#202C43',
    fontSize: 6,
    fontWeight: '700',
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 5,
  },
  seatItemTouchBox: {marginHorizontal: 3, marginBottom: 10},
  seatGapView: {width: 7, height: 7},
  seatMapItemImage: {width: 7, height: 7},
});

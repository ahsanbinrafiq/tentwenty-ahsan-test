import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2E2739',
    paddingTop: 5,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 1,
  },

  tabbarItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabIconStyle: {
    height: 20,
    width: 26,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  tabTextStyle: {
    color: '#827D88',
    fontSize: 11,
  },
});

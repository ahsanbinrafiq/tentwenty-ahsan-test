import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainerWithLoader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    height: 450,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  backAndTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 15,
  },
  watchTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 15,
  },
  backIconStyle: {
    width: 30,
    height: 30,
  },
  timeStampText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  getTicketsText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  headerBottomView: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 30,
  },
  getTicketsButtonStyle: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#61C3F2',
    borderRadius: 10,
    marginTop: 15,
  },
  watchTrailerButtonStyle: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#61C3F2',
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 1,
    flexDirection: 'row',
  },
  playIconStyle: {
    width: 8,
    height: 12,
    marginRight: 10,
  },
  genreHeadingText: {
    color: '#202C43',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
  },
  genreListItemText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  genreListItemView: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 5,
    borderRadius: 30,
  },
  detailsMainView: {
    marginHorizontal: 40,
    marginVertical: 30,
  },
  genreListOuterView: {
    flexDirection: 'row',
  },
  overViewTextStyle: {
    color: '#8F8F8F',
    fontSize: 12,
    fontWeight: '400',
  },
  lineSeparator: {
    opacity: 0.05,
    backgroundColor: '#000000',
    width: '100%',
    height: 1,
    marginTop: 22,
    marginBottom: 15,
  },
});

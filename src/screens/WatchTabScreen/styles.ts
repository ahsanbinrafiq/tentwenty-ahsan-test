import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    paddingBottom: 70,
  },
  headerView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  itemContainer: {
    height: 180,
    borderRadius: 15,
    flex: 1,
    margin: 20,
    backgroundColor: '#000',
  },
  backgroundImage: {
    height: 180,
    flex: 1,
    overflow: 'hidden',
    borderRadius: 15,
  },
  backgroundView: {
    height: 100,
    flex: 1,
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: '#000',
  },
  genreItemContainer: {
    height: 110,
    borderRadius: 15,
    flex: 1,
    margin: 5,
  },
  searchedItemContainer: {
    height: 110,
    borderRadius: 15,
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSearchMainView: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 40,
    paddingHorizontal: 20,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  searchTextInputStyle: {
    flex: 1,
    marginHorizontal: 10,
    color: '#202C43',
  },
  searchIconTouchable: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  watchTextStyle: {
    color: '#202C43',
    fontSize: 16,
  },
  listMainView: {
    backgroundColor: '#F6F6FA',
    flex: 1,
  },
  searchWritingActiveMainView: {
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  topSearchTextStyle: {
    color: '#202C43',
    marginBottom: 10,
  },
  searchedListViewStyle: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.11)',
  },
  genreListViewStyle: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  genreItemTextStyle: {
    color: '#ffffff',
    marginLeft: 20,
    position: 'absolute',
    bottom: 20,
    fontSize: 16,
  },
  itemTextStyle: {
    color: '#ffffff',
    marginLeft: 20,
    position: 'absolute',
    bottom: 20,
    fontSize: 18,
  },
  searchedItemMainView: {
    flexDirection: 'row',
  },
  searchedItemImage: {
    width: 130,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  searchedItemTextView: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'center',
  },
  searchedItemNameText: {
    color: '#202C43',
    fontSize: 16,
  },
  searchedItemSecondText: {
    color: '#DBDBDF',
    fontSize: 12,
  },
  moreIconView: {
    width: 40,
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  moreIcon: {
    width: 20,
    height: 4,
  },
});

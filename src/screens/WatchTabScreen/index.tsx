import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './styles';
import {createGetRequest} from '../../services/api/utils';
import {AxiosResponse} from 'axios';
import {makeRequest} from '../../services/api/api';
import Toast from 'react-native-simple-toast';
import RenderItem from './RenderItem';
import RenderGenreItem from './RenderGenreItem';
import RenderSearchedItem from './RenderSearchedItem';
import HeaderSearchBar from './HeaderSearchBar';
import SimpleHeader from './SimpleHeader';
import {useNavigation} from '@react-navigation/native';

function WatchTabScreen() {
  const navigation = useNavigation<any>();
  const [moviesList, setMoviesList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchWritingActive, setSearchWritingActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    (async () => {
      const request = createGetRequest(
        '/movie/upcoming?api_key=9709a1ab87cb774cc4444dfd2415901c',
      );

      const response: AxiosResponse<any> = await makeRequest<any>(request);

      if (response.status === 200) {
        setMoviesList(response?.data?.results);
      } else {
        Toast.show('Something went wrong', Toast.SHORT);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const request = createGetRequest(
        '/genre/movie/list?api_key=9709a1ab87cb774cc4444dfd2415901c',
      );

      const response: AxiosResponse<any> = await makeRequest<any>(request);

      if (response.status === 200) {
        setGenreList(response?.data?.genres);
      } else {
        Toast.show('Something went wrong', Toast.SHORT);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (searchText !== '') {
        const request = createGetRequest(
          `/search/movie?query=${searchText}&api_key=9709a1ab87cb774cc4444dfd2415901c`,
        );

        const response: AxiosResponse<any> = await makeRequest<any>(request);

        if (response.status === 200) {
          setSearchedList(response?.data?.results);
        } else {
          Toast.show('Something went wrong', Toast.SHORT);
        }
      }
    })();
  }, [searchText]);

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.headerView}>
        {searchActive ? (
          <HeaderSearchBar
            setSearchWritingActive={setSearchWritingActive}
            setSearchText={setSearchText}
            setSearchActive={setSearchActive}
          />
        ) : (
          <SimpleHeader setSearchActive={setSearchActive} />
        )}
      </View>
      <View style={styles.listMainView}>
        {searchWritingActive ? (
          <View style={styles.searchWritingActiveMainView}>
            <Text style={styles.topSearchTextStyle}>top results</Text>
            <View style={styles.searchedListViewStyle} />
            <FlatList
              key={'%'}
              data={searchedList}
              renderItem={RenderSearchedItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : (
          <>
            {searchActive ? (
              <View style={styles.genreListViewStyle}>
                <FlatList
                  key={'#'}
                  data={genreList}
                  renderItem={RenderGenreItem}
                  numColumns={2}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            ) : (
              <FlatList
                key={'$'}
                data={moviesList}
                renderItem={item => RenderItem(item, navigation)}
                keyExtractor={(item, index) => index.toString()}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

export default WatchTabScreen;

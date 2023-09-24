import React, {useEffect, useState} from 'react';
import {MovieDetailsScreenRouteProp} from './types';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {backArrow, playButtonWhite} from '../../../assets/Images';
import Toast from 'react-native-simple-toast';
import {createGetRequest} from '../../services/api/utils';
import {AxiosResponse} from 'axios';
import {makeRequest} from '../../services/api/api';
import {useNavigation} from '@react-navigation/native';

const genreList = ['Action', 'Thriller', 'Science', 'Fiction'];

function MovieDetailsScreen({route}: {route?: MovieDetailsScreenRouteProp}) {
  const navigation = useNavigation<any>();
  const movieId = route?.params?.movieId;
  const [loader, setLoader] = useState(true);
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const request = createGetRequest(
        `/movie/${movieId}?api_key=9709a1ab87cb774cc4444dfd2415901c`,
      );

      const response: AxiosResponse<any> = await makeRequest<any>(request);

      if (response.status === 200) {
        setLoader(false);
        setMovieData(response?.data);
      } else {
        Toast.show('Something went wrong', Toast.SHORT);
      }
    })();
  }, [movieId]);

  return (
    <View
      style={[styles.mainContainer, loader && styles.mainContainerWithLoader]}>
      {loader ? (
        <ActivityIndicator size={'large'} color={'#2E2739'} />
      ) : (
        <ScrollView>
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movieData?.poster_path}`,
            }}
            style={styles.headerView}
            resizeMode="stretch">
            <View style={styles.backAndTextView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image source={backArrow} style={styles.backIconStyle} />
              </TouchableOpacity>
              <Text style={styles.watchTextStyle}>Watch</Text>
            </View>
            <View style={styles.headerBottomView}>
              <Text style={styles.timeStampText}>
                In Theaters December 22, 2021
              </Text>
              <TouchableOpacity
                style={styles.getTicketsButtonStyle}
                onPress={() => {
                  navigation.navigate('GetTicketsScreen');
                }}>
                <Text style={styles.getTicketsText}>Get Tickets</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.watchTrailerButtonStyle}
                onPress={() => {
                  navigation.navigate('VideoPlayerScreen', {
                    movieId: movieId,
                  });
                }}>
                <Image source={playButtonWhite} style={styles.playIconStyle} />
                <Text style={styles.getTicketsText}>Watch Trailer</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.detailsMainView}>
            <Text style={styles.genreHeadingText}>Genres</Text>
            <View style={styles.genreListOuterView}>
              {genreList.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.genreListItemView,
                      {
                        backgroundColor:
                          index === 0
                            ? '#15D2BC'
                            : index === 1
                            ? '#E26CA5'
                            : index === 2
                            ? '#564CA3'
                            : '#CD9D0F',
                      },
                    ]}>
                    <Text style={styles.genreListItemText}>{item}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.lineSeparator} />
            <Text style={styles.genreHeadingText}>Overview</Text>
            <Text style={styles.overViewTextStyle}>{movieData?.overview}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default MovieDetailsScreen;

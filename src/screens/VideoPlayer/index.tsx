import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  BackHandler,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {VideoPlayerScreenRouteProp} from './types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {createGetRequest} from '../../services/api/utils';
import {AxiosResponse} from 'axios';
import {makeRequest} from '../../services/api/api';
import Toast from 'react-native-simple-toast';
import VideoPlayer from 'react-native-video-player';
import Orientation, {
  OrientationLocker,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import styles from './styles';

function VideoPlayerScreen({route}: {route?: VideoPlayerScreenRouteProp}) {
  const navigation = useNavigation<any>();
  const videoRef = useRef<any>(undefined);
  const movieId = route?.params?.movieId;
  const [videoKey, setVideoKey] = useState<string>('');
  const [videoLoading, setVideoLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const request = createGetRequest(
        `/movie/${movieId}/videos?api_key=9709a1ab87cb774cc4444dfd2415901c`,
      );

      const response: AxiosResponse<any> = await makeRequest<any>(request);

      if (response.status === 200) {
        console.log(response?.data.results[0].key);

        setVideoKey(
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        );
      } else {
        Toast.show('Something went wrong', Toast.SHORT);
      }
    })();
  }, [movieId]);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Orientation.lockToPortrait();
        navigation.goBack();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <SafeAreaView style={styles.playerMainView}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          if (videoRef) {
            videoRef.current.showControls(true);
          }
        }}
        style={styles.playerTouchableView}>
        <>
          <OrientationLocker orientation={LANDSCAPE} />
          <>
            {videoKey !== '' ? (
              <VideoPlayer
                ref={videoRef}
                video={{
                  uri: videoKey,
                }}
                loop={false}
                onLoad={() => {
                  setVideoLoading(false);
                }}
                onLoadStart={() => {
                  setVideoLoading(true);
                }}
                showDuration={true}
                onEnd={() => {
                  Orientation.lockToPortrait();
                  navigation.goBack();
                }}
                autoplay={true}
                controlsTimeout={5000}
                resizeMode={'stretch'}
                disableControlsAutoHide={false}
                fullscreenOrientation="landscape"
                fullscreen={true}
                customStyles={{
                  wrapper: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  videoWrapper: {width: '100%', height: '100%'},
                  video: {width: '100%', height: '100%'},
                  seekBarProgress: {
                    backgroundColor: '#61C3F2',
                  },
                  seekBarKnob: {backgroundColor: '#61C3F2'},
                }}
              />
            ) : null}
          </>
          {videoLoading ? (
            <ActivityIndicator
              size={'large'}
              color={'#61C3F2'}
              style={styles.videoLoader}
            />
          ) : null}
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default VideoPlayerScreen;

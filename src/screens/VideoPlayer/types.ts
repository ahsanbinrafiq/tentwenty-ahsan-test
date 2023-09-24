import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  VideoPlayerScreen: {
    movieId: string;
  };
};

export type VideoPlayerScreenRouteProp = RouteProp<
  RootStackParamList,
  'VideoPlayerScreen'
>;

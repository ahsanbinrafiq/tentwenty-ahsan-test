import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  MovieDetailsScreen: {
    movieId: string;
  };
};

export type MovieDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MovieDetailsScreen'
>;

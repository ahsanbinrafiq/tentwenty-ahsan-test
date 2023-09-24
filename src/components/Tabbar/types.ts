import {NavigationState} from '@react-navigation/native';
import {Descriptor} from '@react-navigation/native';

export interface TabBarProps {
  state: NavigationState;
  //   descriptors: Record<string, Descriptor<NavigationState, any, any>>;
  descriptors: BottomNavigator;
  navigation: any; // Adjust the type for the `navigation` prop if possible
}

interface BottomNavigator {
  key: string;
  index: number;
  routeNames: string[];
  history?: unknown[] | undefined;
  route: RouteProps;
}

interface RouteProps {
  key: number;
  name: string;
}

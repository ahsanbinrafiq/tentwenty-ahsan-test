import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {
  dashboardTabIcon,
  mediaLibraryTabIcon,
  moreTabIcon,
  watchTabIcon,
} from '../../assets/Images';

const titleOptions = (route: any) => {
  switch (route.name) {
    case 'dashboardTabScreen':
      return 'Dashboard';
    case 'watchTabScreen':
      return 'Watch';
    case 'mediaLibraryTabScreen':
      return 'Media Library';
    case 'MoreTabScreen':
      return 'More';
    default:
      break;
  }
};

const iconOptions = (route: any) => {
  switch (route.name) {
    case 'dashboardTabScreen':
      return dashboardTabIcon;
    case 'watchTabScreen':
      return watchTabIcon;
    case 'mediaLibraryTabScreen':
      return mediaLibraryTabIcon;
    case 'MoreTabScreen':
      return moreTabIcon;
    default:
      break;
  }
};

export const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}): BottomTabNavigationOptions => ({
  headerShown: false,
  title: titleOptions(route),
  tabBarIcon: iconOptions(route),
});

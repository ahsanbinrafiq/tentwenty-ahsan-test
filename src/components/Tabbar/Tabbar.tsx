import React from 'react';
import {View, Pressable, Image, Text} from 'react-native';
import styles from './styles';
import {dashboardTabIcon} from '../../../assets/Images';

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.tabBarIcon !== undefined
            ? options.tabBarIcon
            : dashboardTabIcon;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <Pressable onPress={onPress}>
              <View style={styles.tabbarItemContainer}>
                <Image
                  source={icon}
                  style={[
                    styles.tabIconStyle,
                    isFocused && {tintColor: '#ffffff'},
                  ]}
                />
                <Text
                  style={[
                    styles.tabTextStyle,
                    isFocused && {color: '#ffffff'},
                  ]}>
                  {label}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;

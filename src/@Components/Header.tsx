import React from 'react';
import {StyleSheet, View} from 'react-native';
import {deepMemo} from '@Utils';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '@Styles';
import FastImage from 'react-native-fast-image';
import {images} from '@Assets';

export const Header = deepMemo(() => {
  return (
    <View style={styles.headerContainer}>
      <LinearGradient
        style={styles.primaryLinear}
        colors={[colors.ORANGISH, colors.MAIZE]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      />
      <LinearGradient
        style={styles.secondaryLinear}
        colors={[
          'rgba(255,255,255,0)',
          'rgba(253,253,253,0.2)',
          'rgba(249,249,249,0.85)',
          colors.BACKGROUND_GRAY,
        ]}
      />
      <FastImage source={images.LOGO} style={styles.logo} />
    </View>
  );
});

const styles = StyleSheet.create({
  headerContainer: {
    height: 79,
    width: '100%',
  },
  primaryLinear: {
    width: '100%',
    height: 157,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  secondaryLinear: {
    width: '100%',
    height: 80,
    position: 'absolute',
    top: 79,
    left: 0,
    right: 0,
  },
  logo: {
    marginTop: 29,
    marginLeft: 19,
    width: 22,
    height: 26,
  },
});

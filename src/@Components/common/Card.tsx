import {colors} from '@Styles';
import {deepMemo} from '@Utils';
import React from 'react';
import {Platform, StyleSheet, View, ViewProps} from 'react-native';

interface Props extends ViewProps {}

export const BoxCard = deepMemo(({style, ...props}: Props = {}) => (
  <View style={[styles.cardContainer, style]} {...props} />
));

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 6,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      default: {
        shadowColor: colors.GREYISH,
        shadowOpacity: 0.4,
        shadowRadius: 6,
      },
    }),
  },
});

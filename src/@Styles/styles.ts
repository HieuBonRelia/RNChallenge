import {Platform, StyleSheet} from 'react-native';
import {colors} from './colors';

export const commonStyles = StyleSheet.create({
  TEXT_STYLE_5: {
    fontFamily: Platform.select({
      ios: 'ProximaNovaA-Bold',
      default: 'ProximaNovaA_Bold',
    }),
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.WHITE,
  },
  TEXT_STYLE_7: {
    fontFamily: Platform.select({
      ios: 'ProximaNovaA-Bold',
      default: 'ProximaNovaA_Bold',
    }),
    fontSize: 18,
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.GREYISH_BROWN,
  },
  TEXT_STYLE_6: {
    fontFamily: Platform.select({
      ios: 'ProximaNovaA-Bold',
      default: 'ProximaNovaA_Bold',
    }),
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.GREYISH_BROWN,
  },
  TEXT_STYLE_3: {
    fontFamily: Platform.select({
      ios: 'ProximaNovaA-Regular',
      default: 'ProximaNovaA_Regular',
    }),
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.WHITE,
  },
  TEXT_STYLE_2: {
    fontFamily: Platform.select({
      ios: 'ProximaNovaA-SemiBold',
      default: 'ProximaNovaA_Semibold',
    }),
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.GREYISH_BROWN,
  },
  TEXT_STYLE: {
    fontFamily: Platform.select({
      ios: 'ProximaNovaA-SemiBold',
      default: 'ProximaNovaA_Semibold',
    }),
    fontSize: 16,
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.WHITE,
  },
  TEXT_STYLE_4: {
    fontFamily: Platform.select({
      ios: 'ProximaNovaA-SemiBold',
      default: 'ProximaNovaA_Semibold',
    }),
    fontSize: 13,
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.WHITE,
  },
  TEXT_STYLE_8: {
    fontFamily: Platform.select({
      ios: 'ProximaNovaA-Regular',
      default: 'ProximaNovaA_Semibold',
    }),
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: colors.WHITE,
  },
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
  shadow: {
    backgroundColor: colors.WHITE,
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
  flex1: {
    flex: 1,
  },
});

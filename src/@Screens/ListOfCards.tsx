import {images} from '@Assets';
import {FoodCard, Header} from '@Components';
import {useCreateCard, useEventCallback, useLoadCards} from '@Hooks';
import {NavigationScreenProps} from '@Navigation';
import {colors, commonStyles} from '@Styles';
import {Card} from '@Type';
import {deepMemo} from '@Utils';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const keyExtractor = (el: Card) => el.id;

export const ListOfCards = deepMemo(
  ({navigation}: NavigationScreenProps<'ListOfCards'>) => {
    const {cards} = useLoadCards();
    const {createCard} = useCreateCard();
    const onPressItem = useEventCallback((item: Card, position?: number) => {
      typeof position === 'number' &&
        navigation.navigate('CardAction', {
          item,
          position,
        });
    });

    const renderItem = useCallback(
      ({item}: {item: Card}) => (
        <FoodCard item={item} onPressItem={onPressItem} />
      ),
      [onPressItem],
    );

    return (
      <View style={styles.screen}>
        <Header />
        <FlatList
          data={cards}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.flatList}
        />
        <View style={styles.footer}>
          <View style={styles.footerBackground} />
          <TouchableOpacity style={styles.actionButton} onPress={createCard}>
            <View style={styles.iconWrapper}>
              <FastImage
                source={images.ADD}
                style={styles.addIcon}
                resizeMode="contain"
              />
            </View>
            <Text style={commonStyles.TEXT_STYLE_6}>New Food Style</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  footer: {
    height: 40,
    backgroundColor: 'transparent',
  },
  actionButton: {
    ...commonStyles.cardContainer,

    height: 40,
    position: 'absolute',
    top: -16,
    left: 18,
    right: 18,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  footerBackground: {
    ...commonStyles.shadow,
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  addIcon: {
    width: 50,
    height: 50,
  },
  iconWrapper: {
    width: 20,
    height: 20,
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_GRAY,
  },
});

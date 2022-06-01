import {images} from '@Assets';
import {FoodCard} from '@Components';
import {useDeleteCard, useDuplicateCard, useEventCallback} from '@Hooks';
import {NavigationScreenProps} from '@Navigation';
import {BlurView} from '@react-native-community/blur';
import {client, SHARE_CARD} from '@Services';
import {colors, commonStyles} from '@Styles';
import {deepMemo} from '@Utils';
import React from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Share from 'react-native-share';
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ACTION_MENU_SIZE = 138;

export const CardAction = deepMemo(
  ({route, navigation}: NavigationScreenProps<'CardAction'>) => {
    const {item, position} = route.params;

    const shouldBeAbove = position > SCREEN_HEIGHT / 2;

    const {deleteCard} = useDeleteCard(item.id);
    const {duplicateCard} = useDuplicateCard(item.id);

    const onDelete = useEventCallback(() => {
      Alert.alert(
        'Confirm delete',
        'This will delete the Food Style and all its settings.',
        [
          {
            text: 'Delete',
            onPress: () => {
              deleteCard();
              navigation.goBack();
            },
            style: 'destructive',
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
      );
    });

    const onDuplicate = useEventCallback(() => {
      duplicateCard();
      navigation.goBack();
    });

    const onShare = useEventCallback(async () => {
      try {
        const {data} = await client.mutate<{shareCard: string}>({
          mutation: SHARE_CARD,
          variables: {
            id: item.id,
          },
        });
        if (data?.shareCard) {
          Share.open({
            url: `https://cards.foodstyles.com/${data?.shareCard}`,
          });
        }
      } catch (error) {}
    });

    return (
      <View style={styles.screenContainer}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurAmount={20}
          blurType="xlight"
        />
        <View style={[styles.cardWrapper, {top: position}]}>
          <View>
            <FoodCard item={item} edit onPressItem={navigation.goBack} />
            <View
              style={[
                styles.actionWrapper,
                shouldBeAbove ? styles.above : styles.below,
              ]}>
              <TouchableOpacity style={styles.actionRow} onPress={onShare}>
                <Text style={[commonStyles.TEXT_STYLE_8, styles.buttonTitle]}>
                  Share
                </Text>
                <FastImage
                  style={styles.icon}
                  source={images.SHARE}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionRow} onPress={onDuplicate}>
                <Text style={[commonStyles.TEXT_STYLE_8, styles.buttonTitle]}>
                  Duplicate
                </Text>
                <FastImage
                  style={styles.icon}
                  source={images.DUPLICATE}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionRow} onPress={onDelete}>
                <Text style={[commonStyles.TEXT_STYLE_8, styles.buttonTitle]}>
                  Delete
                </Text>
                <FastImage
                  style={styles.icon}
                  source={images.DELETE}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  cardWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  actionWrapper: {
    height: ACTION_MENU_SIZE,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  above: {
    top: -ACTION_MENU_SIZE - 15,
  },
  below: {
    bottom: -ACTION_MENU_SIZE - 15,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  icon: {
    height: 44,
    width: 44,
    marginLeft: 4,
  },
  buttonTitle: {
    color: colors.GREEN_TEAL,
  },
});

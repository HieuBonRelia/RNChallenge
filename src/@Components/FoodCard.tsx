import {images} from '@Assets';
import {useEventCallback} from '@Hooks';
import {commonStyles} from '@Styles';
import {Card} from '@Type';
import {deepMemo} from '@Utils';
import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  item: Card;
  onPressItem?: (item: Card, position?: number) => void;
  edit?: boolean;
}
export const FoodCard = deepMemo(({item, edit, onPressItem}: Props) => {
  const ref = useRef<View>(null);

  const onPress = useEventCallback(() => {
    if (!edit) {
      return ref.current?.measure((x, y, width, height, pageX, pageY) => {
        onPressItem?.(item, pageY);
      });
    }
    onPressItem?.(item);
  });

  return (
    <View
      style={[commonStyles.cardContainer, styles.foodCardContainer]}
      ref={ref}>
      <View style={commonStyles.flex1}>
        <Text style={commonStyles.TEXT_STYLE_6}>{item.name}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <FastImage
          source={edit ? images.CLOSE : images.OPTIONS}
          style={styles.optionIcon}
        />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  foodCardContainer: {
    paddingTop: 14,
    paddingLeft: 18,
    paddingRight: 15,
    paddingBottom: 14,
    flexDirection: 'row',
    marginHorizontal: 18,
    marginBottom: 6,
    justifyContent: 'space-between',
    minHeight: 50,
  },
  name: {
    ...commonStyles.TEXT_STYLE_6,
  },
  optionIcon: {
    marginLeft: 12,
    width: 24,
    height: 24,
  },
});

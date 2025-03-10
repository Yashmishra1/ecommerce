import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';
import { removeFromCart, removeFromWishlist } from '../redux/Actions';

const Wishlist = () => {
  const cartData = useSelector(state => state.wishlist);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
          <CartItem 
          item={item}
          isWishList={"aaa"}
          onAddToCart={(x) => {dispatch(onAddToCart(x))}}
          onRemoveFromWishlist={() => {
            dispatch(removeFromWishlist(index))
          }}
          onRemoveItem={() => dispatch(removeFromWishlist(index))} />)
        }}
      />
    </View>
  );
};

export default Wishlist;

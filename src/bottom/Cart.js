import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';
import { removeFromCart } from '../redux/Actions';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.cart);
  console.log("cartData",cartData)
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
          <CartItem item={item}
          onAddWishlist={(x) => { dispatch(onAddWishlist(x))}}
          onRemoveItem={() => dispatch(removeFromCart(index))} />);
        }}
      />
    </View>
  );
};

export default Cart;

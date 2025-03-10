import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {products} from '../mock';
import ProductItem from '../common/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishlist} from '../redux/Actions';
const Main = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    categoryList: [],
    tshirtList: [],
    jeansList: [],
    shoesList: [],
    jacketList: [],
  });

  useEffect(() => {
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    products.category.map(item => {
      setState(prev => ({
        ...prev,
        categoryList: tempCategory,
        tshirtList: products.category[0].data,
        jeansList: products.category[1].data,
        shoesList: products.category[2].data,
        jacketList: products.category[3].data,
      }));
    });
  }, [products]);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <Image
          style={{
            width: '90%',
            height: 200,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 10,
          }}
          source={require('../images/banner.jpeg')}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            data={state.categoryList}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginTop: 20,
                    marginLeft: 20,
                    borderRadius: 20,
                  }}>
                  <Text style={{color: '#000'}}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New T Shirts
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={state.tshirtList}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={() => dispatch(addToWishlist(item))}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Jeans
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={state.jeansList}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={() => dispatch(addToWishlist(item))}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Shoes
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={state.shoesList}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddWishlist={() => dispatch(addToWishlist(item))}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: '#000',
            fontSize: 16,
            fontWeight: '600',
          }}>
          New Jacket
        </Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={state.jacketList}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <ProductItem
                  item={item}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                  onAddWishlist={() => dispatch(addToWishlist(item))}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;

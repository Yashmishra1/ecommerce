import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MyProduct = ({item}) => {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginBottom: 10,
      }}>
      <Image
        source={item.image}
        style={{
          width: '100%',
          height: '50%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />

      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 18,
          fontWeight: '600',
        }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 10,
          paddingLeft: 10,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 600}}>{'₹' + item.price}</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 5,
            paddingTop: 5,
          }}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          width: 40,
          height: 40,
          backgroundColor: '#fff',
          elevation: 5,
          top: 10,
          right: 10,
          alignItems : "center",
          borderRadius : 20,
          justifyContent : "center",
          alignSelf: 'flex-end',
        }}>
        <Image
          style={{width: 24, height: 24}}
          source={require('../images/love.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyProduct;

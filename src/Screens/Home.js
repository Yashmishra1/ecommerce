import {TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';

const Home = () => {
  const [state, setState] = useState({
    selectedTab: 0,
  });
  const {selectedTab} = state;
  return (
    <View style={{flex: 1, backgroundColor: ' red'}}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setState(prev => ({...prev, selectedTab: 0}));
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 0 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setState(prev => ({...prev, selectedTab: 1}));
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/search.png')}
            style={{width: 24, height: 24,
                tintColor: selectedTab == 1 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setState(prev => ({...prev, selectedTab: 2}));
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              backgroundColor: '#000',
              borderRadius: 22,
              backgroundColor : selectedTab == 2 ? "green" : "#000"
            }}>
            <Image
              source={require('../images/bag.png')}
              style={{width: 24, height: 24,   tintColor: "#fff"}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            setState(prev => ({...prev, selectedTab: 3}));
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/love.png')}
            style={{width: 24, height: 24,
                tintColor: selectedTab == 3 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setState(prev => ({...prev, selectedTab: 4}));
          }}
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/user.png')}
            style={{width: 24, height: 24,
                tintColor: selectedTab == 4 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

/* eslint-disable prettier/prettier */

import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import images from '../../Assets/images';

export const HomeScreen = () => {
  const data = [
    {
      image: images.img1,
      text: 'Text one',
    },
    {
      image: images.img2,
      text: 'Text two',
    },
    {
      image: images.img3,
      text: 'Text three',
    },
  ];
  return (
    <ScrollView style={styles.mainViewStyle}>
      <View style={styles.headerViewStyle}>
        <Icon name="menu" type={IconType.Feather} color="white" size={24} />
        <Text style={styles.headerTextStyle}>Movies</Text>
        <Icon name="search" type={IconType.Feather} color="white" size={24} />
      </View>
      <Text style={styles.trendngTextStyle}>Now Playing</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={data}
        renderItem={({item}) => (
          <View style={styles.sliderImageViewStyle}>
            <Image source={item.image} style={styles.ImageViewStyle} />
          </View>
        )}
      />

      {/* Upcoming Movies List View   */}
      <View>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Upcoming</Text>
          <Text style={styles.seeAllTextStyle}>See All</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <View style={styles.upcomingImageViewStyle}>
              <Image source={item.image} style={styles.upcomingImagesStyle} />
            </View>
          )}
        />
      </View>

      {/* Top Rated Movies List View */}
      <View>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Top Rated</Text>
          <Text style={styles.seeAllTextStyle}>See All</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <View style={styles.upcomingImageViewStyle}>
              <Image source={item.image} style={styles.upcomingImagesStyle} />
            </View>
          )}
        />
      </View>

      {/* Popular Movies List View */}
      <View>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Popular</Text>
          <Text style={styles.seeAllTextStyle}>See All</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <View style={styles.upcomingImageViewStyle}>
              <Image source={item.image} style={styles.upcomingImagesStyle} />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

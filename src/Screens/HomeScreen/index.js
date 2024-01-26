/* eslint-disable prettier/prettier */

import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {getNowPlayingMovies, getPopularMovies, getUpcomingMovies} from '../../ApiServices/Axios';

export const HomeScreen = () => {
  //Movie baseUrl
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  const [nowPlayingData, setnNowPlayingData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  // const [Data, setData] = useState([]);
  // const [Data, setData] = useState([]);

  useEffect(() => {
    getNowPlayingMoviesData();
    getUpcomingMoviesData();
  }, []);

  const getNowPlayingMoviesData = async () => {
    await getNowPlayingMovies()
      .then(item => {
        setnNowPlayingData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };
  const getUpcomingMoviesData = async () => {
    await getUpcomingMovies()
      .then(item => {
        setUpcomingData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  return (
    <ScrollView style={styles.mainViewStyle}>
      <View style={styles.headerViewStyle}>
        <Icon name="menu" type={IconType.Feather} color="white" size={24} />
        <Text style={styles.headerTextStyle}>Movies</Text>
        <Icon name="search" type={IconType.Feather} color="white" size={24} />
      </View>
      <Text style={styles.trendngTextStyle}>Now Playing</Text>

      {nowPlayingData.length ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={nowPlayingData}
          renderItem={({item}) => (
            <View style={styles.sliderImageViewStyle}>
              <Image
                source={{
                  uri: `${baseUrl}${item.poster_path}`,
                }}
                style={styles.ImageViewStyle}
              />
            </View>
          )}
        />
      ) : (
        <View style={styles.sliderImageViewStyle}>
          <BarIndicator color="grey" />
        </View>
      )}

      {/* Upcoming Movies List View   */}
      <View style={styles.catagoryViewStyle}>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Upcoming</Text>
          <Text style={styles.seeAllTextStyle}>See All</Text>
        </View>

        {upcomingData.length ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={upcomingData}
            renderItem={({item}) => (
              <View style={styles.upcomingImageViewStyle}>
                <Image
                  source={{
                    uri: `${baseUrl}${item.backdrop_path}`,
                  }}
                  style={styles.upcomingImagesStyle}
                />
                <Text style={styles.upcomingMoviesTitleStyle}>
                  {item.original_title}
                </Text>
              </View>
            )}
          />
        ) : (
          <View style={styles.sliderImageViewStyle}>
            <BarIndicator color="grey" />
          </View>
        )}
      </View>

      {/* Top Rated Movies List View */}

      <View>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Top Rated</Text>
          <Text style={styles.seeAllTextStyle}>See All</Text>
        </View>

        {upcomingData.length ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={upcomingData}
            renderItem={({item}) => (
              <View style={styles.upcomingImageViewStyle}>
                <Image
                  source={{
                    uri: `${baseUrl}${item.backdrop_path}`,
                  }}
                  style={styles.upcomingImagesStyle}
                />
                <Text style={styles.upcomingMoviesTitleStyle}>
                  {item.original_title}
                </Text>
              </View>
            )}
          />
        ) : (
          <View style={styles.sliderImageViewStyle}>
            <BarIndicator color="grey" />
          </View>
        )}
      </View>

      {/* Popular Movies List View */}
      <View>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Popular</Text>
          <Text style={styles.seeAllTextStyle}>See All</Text>
        </View>

        {upcomingData.length ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={upcomingData}
            renderItem={({item}) => (
              <View style={styles.upcomingImageViewStyle}>
                <Image
                  source={{
                    uri: `${baseUrl}${item.backdrop_path}`,
                  }}
                  style={styles.upcomingImagesStyle}
                />
                <Text style={styles.upcomingMoviesTitleStyle}>
                  {item.original_title}
                </Text>
              </View>
            )}
          />
        ) : (
          <View style={styles.sliderImageViewStyle}>
            <BarIndicator color="grey" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

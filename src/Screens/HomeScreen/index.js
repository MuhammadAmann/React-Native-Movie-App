/* eslint-disable prettier/prettier */

import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {BarIndicator} from 'react-native-indicators';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../ApiServices/Axios';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const HomeScreen = ({props, navigation}) => {
  //Movie baseUrl
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';

  const [nowPlayingData, setnNowPlayingData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    getNowPlayingMoviesData();
    getUpcomingMoviesData();
    getTopRatedMoviesData();
    getPopularMoviesData();
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

  const getTopRatedMoviesData = async () => {
    await getTopRatedMovies()
      .then(item => {
        setTopRatedData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const getPopularMoviesData = async () => {
    await getPopularMovies()
      .then(item => {
        setPopularData(item.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  return (
    <ScrollView style={styles.mainViewStyle}>
      <View style={styles.headerViewStyle}>
        <Icon name="menu" type={IconType.Feather} color="white" size={24} />
        <TouchableOpacity
          onPress={() => navigation.navigate('MovieDetailScreen')}>
          <Text style={styles.headerTextStyle}>Movies</Text>
        </TouchableOpacity>
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
            <Pressable
              onPress={() => navigation.navigate('MovieDetailScreen', {item})}
              style={styles.sliderImageViewStyle}>
              <Image
                source={{
                  uri: `${baseUrl}${item.poster_path}`,
                }}
                style={styles.ImageViewStyle}
              />
            </Pressable>
          )}
        />
      ) : (
        <View style={styles.sliderImageViewStyle}>
          <ShimmerPlaceHolder style={styles.ImageViewStyle} />
        </View>
        // <View style={styles.sliderImageViewStyle}>
        //   <BarIndicator color="grey" />
        // </View>
      )}

      {/* Upcoming Movies List View   */}
      <View style={styles.catagoryViewStyle}>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Upcoming</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SeeAllMoviesScreen')}>
            <Text style={styles.seeAllTextStyle}>See All</Text>
          </TouchableOpacity>
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
          <View>
            <ShimmerPlaceHolder style={styles.upcomingImageViewStyle} />
          </View>

          // <View style={styles.sliderImageViewStyle}>
          //   <BarIndicator color="grey" />
          // </View>
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
            data={topRatedData}
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
            data={popularData}
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

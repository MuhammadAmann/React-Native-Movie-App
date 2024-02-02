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
import {fullWidth, widthRef} from '../../Config/screenSizes';
import images from '../../Assets/images';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const HomeScreen = ({navigation}) => {
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
    <ScrollView
      contentContainerStyle={{paddingBottom: 80}}
      style={styles.mainViewStyle}>
      <View style={styles.headerViewStyle}>
        <View style={styles.headerView1Style}>
          <Icon
            onPress={() => navigation.goBack()}
            name="chevron-back-outline"
            type={IconType.Ionicons}
            color="white"
            size={30}
          />
          <Pressable onPress={() => navigation.navigate('UserProfileScreen')}>
            <Image
              source={images.boardingScreenImage}
              style={styles.profileImageStyle}
            />
          </Pressable>
        </View>
        <View style={styles.headerIconViewStyle}>
          <Icon
            onPress={() => navigation.navigate('SearchScreen')}
            name="search"
            type={IconType.Feather}
            color="white"
            size={24}
            style={styles.searchIconStyle}
          />
          <Icon
            name="notifications-outline"
            type={IconType.Ionicons}
            color="white"
            size={24}
          />
        </View>
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
                // resizeMode='cover'
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
      )}

      {/* Upcoming Movies List View   */}
      <View style={styles.catagoryViewStyle}>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Upcoming</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAllMoviesScreen', upcomingData)
            }>
            <Text style={styles.seeAllTextStyle}>See All</Text>
          </TouchableOpacity>
        </View>

        {upcomingData.length ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={upcomingData}
            renderItem={({item}) => (
              <Pressable
                onPress={() => navigation.navigate('MovieDetailScreen', {item})}
                style={styles.upcomingImageViewStyle}>
                <Image
                  source={{
                    uri: `${baseUrl}${item.backdrop_path}`,
                  }}
                  style={styles.upcomingImagesStyle}
                />
                <Text style={styles.upcomingMoviesTitleStyle}>
                  {item.original_title}
                </Text>
              </Pressable>
            )}
          />
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1]}
            renderItem={({item}) => (
              <View style={styles.upcomingShimmerViewStyle}>
                <ShimmerPlaceHolder style={styles.upcomingImagesStyle} />
              </View>
            )}
          />
        )}
      </View>

      {/* Top Rated Movies List View */}

      <View>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Top Rated</Text>
          <Text
            onPress={() =>
              navigation.navigate('SeeAllMoviesScreen', topRatedData)
            }
            style={styles.seeAllTextStyle}>
            See All
          </Text>
        </View>

        {topRatedData.length ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={topRatedData}
            renderItem={({item}) => (
              <Pressable
                onPress={() => navigation.navigate('MovieDetailScreen', {item})}
                style={styles.upcomingImageViewStyle}>
                <Image
                  source={{
                    uri: `${baseUrl}${item.backdrop_path}`,
                  }}
                  style={styles.upcomingImagesStyle}
                />
                <Text style={styles.upcomingMoviesTitleStyle}>
                  {item.original_title}
                </Text>
              </Pressable>
            )}
          />
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1]}
            renderItem={({item}) => (
              <View style={styles.upcomingShimmerViewStyle}>
                <ShimmerPlaceHolder style={styles.upcomingImagesStyle} />
              </View>
            )}
          />
        )}
      </View>

      {/* Popular Movies List View */}
      <View>
        <View style={styles.upcomingHeaderViewStyle}>
          <Text style={styles.upcomingTextStyle}>Popular</Text>
          <Text
            onPress={() =>
              navigation.navigate('SeeAllMoviesScreen', popularData)
            }
            style={styles.seeAllTextStyle}>
            See All
          </Text>
        </View>

        {popularData.length ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={popularData}
            renderItem={({item}) => (
              <Pressable
                onPress={() => navigation.navigate('MovieDetailScreen', {item})}
                style={styles.upcomingImageViewStyle}>
                <Image
                  source={{
                    uri: `${baseUrl}${item.backdrop_path}`,
                  }}
                  style={styles.upcomingImagesStyle}
                />
                <Text style={styles.upcomingMoviesTitleStyle}>
                  {item.original_title}
                </Text>
              </Pressable>
            )}
          />
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1]}
            renderItem={() => (
              <View style={styles.upcomingShimmerViewStyle}>
                <ShimmerPlaceHolder style={styles.upcomingImagesStyle} />
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
};

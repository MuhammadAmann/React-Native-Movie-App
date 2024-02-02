/* eslint-disable prettier/prettier */
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import {styles} from './style';
import {useEffect, useState} from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../../ApiServices/Axios';
import images from '../../../Assets/images';

export const FavoriteListScreen = ({navigation, route}) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  // const data = route.params;

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
    <View style={styles.mainViewStyle}>
      <View style={styles.headerViewStyle}>
        <Pressable onPress={() => navigation.navigate('UserProfileScreen')}>
          <Image
            source={images.boardingScreenImage}
            style={styles.profileImageStyle}
          />
        </Pressable>
        <Text style={styles.headerTextStyle}>Favorite Movies</Text>
        {/* <Icon name="menu" type={IconType.Feather} color="white" size={24} /> */}
      </View>
      <FlatList
        style={styles.wrapViewStyle}
        showsHorizontalScrollIndicator={false}
        data={topRatedData}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('MovieDetailScreen', {item})}
            style={styles.seeAllImagesStyle}>
            <Image
              style={styles.upcomingImageViewStyle}
              source={{
                uri: `${baseUrl}${item.backdrop_path}`,
              }}
            />

            <Text style={styles.upcomingMoviesTitleStyle}>
              {item.original_title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

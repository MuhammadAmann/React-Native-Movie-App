/* eslint-disable prettier/prettier */

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './style';
import images from '../../Assets/images';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native-svg';
import {useEffect, useState} from 'react';
import {getPopularMovies} from '../../ApiServices/Axios';

export const MovieDetailScreen = ({navigation, route}) => {
  const [popularData, setPopularData] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  const data = route.params.item;
  // const myData = route.params.popularData;
  // console.log(popularData);

  useEffect(() => {
    getPopularMoviesData();
  }, []);

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
    <ScrollView style={styles.scrollViewStyle}>
      <View>
        <ImageBackground
          source={{
            uri: `${baseUrl}${data.poster_path}`,
          }}
          style={styles.moviePosterStyle}>
          <LinearGradient
            colors={['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, 1)']}
            style={styles.onImageContentStyle}>
            <View style={styles.headerViewStyle}>
              <View style={styles.backArrowViewStyle}>
                <Icon
                  onPress={() => navigation.goBack()}
                  name="chevron-back-outline"
                  type={IconType.Ionicons}
                  color="white"
                  size={30}
                />
              </View>
              <Icon
                name="heart-o"
                type={IconType.FontAwesome}
                color="white"
                size={30}
              />
            </View>
            <View style={styles.bottomViewStyle}>
              <Text style={styles.titleTextStyle}>{data.original_title}</Text>
              <Text style={styles.subtitetextStyle}>
                Release date: {data.release_date}
              </Text>
              <Text style={styles.subtitetextStyle}>
                Action - Thriller - Comedy
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.mainViewStyle}>
          <Text style={styles.bodyTextStyle}>{data.overview}</Text>
          <View style={styles.iconsViewStyle}>
            <View style={styles.iconViewStyle}>
              <Icon
                name="share-social"
                type={IconType.Ionicons}
                color="white"
                size={24}
              />
            </View>
            <View style={styles.iconView2Style}>
              <Icon
                name="cloud-download-outline"
                type={IconType.Ionicons}
                color="white"
                size={24}
              />
            </View>
          </View>
          <View style={styles.catagoryViewStyle}>
            <View style={styles.upcomingHeaderViewStyle}>
              <Text style={styles.upcomingTextStyle}>Similar Movies</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SeeAllMoviesScreen')}>
                <Text style={styles.seeAllTextStyle}>See All</Text>
              </TouchableOpacity>
            </View>
            {popularData.length ? (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={popularData}
                renderItem={({item}) => (
                  <View style={styles.upcomingImageViewStyle}>
                    <ImageBackground
                      imageStyle={{borderRadius: 20}}
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
                {/* <BarIndicator color="grey" /> */}
                <Text>No Data</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

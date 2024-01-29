/* eslint-disable prettier/prettier */
import {FlatList, Text, View} from 'react-native';
import { Image } from 'react-native-svg';
import { styles } from './style';
import { getPopularMovies } from '../../ApiServices/Axios';
import { useEffect, useState } from 'react';


export const SeeAllMoviesScreen = () => {
    const baseUrl = 'https://image.tmdb.org/t/p/w500/';

    const [popularData, setPopularData] = useState([]);


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
    <View style={styles.mainViewStyle}>
        <View style={styles.wrapViewStyle}>
      popularData.map()
      {/* <FlatList
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
      /> */}
      </View>
    </View>
  );
};

/* eslint-disable prettier/prettier */
import {
  FlatList,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import images from '../../../Assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {removeMovie} from '../../../Redux/slice';

export const FavoriteListScreen = ({navigation, route}) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  const FavoriteMovies = useSelector(state => state.movieCart);
  const dispatch = useDispatch();

  const removeItem = item => {
    dispatch(removeMovie(item.id));
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
      </View>
      {FavoriteMovies.length ? (
        <FlatList
          style={styles.wrapViewStyle}
          showsHorizontalScrollIndicator={false}
          data={FavoriteMovies}
          numColumns={2}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('MovieDetailScreen', {item})}
              style={styles.seeAllImagesStyle}>
              <ImageBackground
                imageStyle={{borderRadius: 20}}
                style={styles.upcomingImageViewStyle}
                source={{
                  uri: `${baseUrl}${item.backdrop_path}`,
                }}>
                <Icon
                  style={styles.FavoriteIconStye}
                  onPress={() => {
                    removeItem(item);
                  }}
                  name="heart"
                  type={IconType.FontAwesome}
                  color="red"
                  size={30}
                />
              </ImageBackground>
              <Text style={styles.upcomingMoviesTitleStyle}>
                {item.original_title}
              </Text>
            </Pressable>
          )}
        />
      ) : (
        <View style={styles.noMoviesViewStyle}>
          <Text style={styles.noMovieDataTextStyle}>No Favorite Movies</Text>
        </View>
      )}
    </View>
  );
};

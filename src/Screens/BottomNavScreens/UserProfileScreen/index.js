/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../Assets/colors';
import images from '../../../Assets/images';

const UserProfileScreen = () => {
  const profileContent = [
    {
      iconName: 'person-outline',
      icontype: 'icontype.Ionicons',
      Title: 'Personal Data',
    },
    {
      iconName: 'language',
      icontype: 'icontype.MaterialIcons',
      Title: 'Language',
    },
    {
      iconName: 'notifications',
      icontype: 'icontype.Ionicons',
      Title: 'Notifications',
    },
  ];
  const securityViewContent = [
    {
      iconName: 'lock',
      icontype: 'icontype.SimpleLineIcons',
      Title: 'Password',
    },
    {
      iconName: 'privacy-tip',
      icontype: 'icontype.MaterialIcons',
      Title: 'Privacy policy',
    },
    {
      iconName: 'logout',
      icontype: 'icontype.AntDesign',
      Title: 'Log out',
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 70}}
      style={styles.scrollviewStyle}>
      <View style={styles.mainViewStyle}>
        {/* <Text style={styles.settingsHeadingTextStyle}>Profile Settings</Text> */}
        <ImageBackground
          source={images.boardingScreenImage}
          style={styles.profileImageViewStyle}>
          <TouchableOpacity style={styles.uploadImageViewStyle}>
            <Icon
              name="add"
              type={IconType.Ionicons}
              color={AppColors.orangeColor}
              size={16}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.userTextStyle}>User Admin</Text>
        <Text style={styles.userEmailTextStyle}>useradmin@falconit.com</Text>
        <Text style={styles.profileheadingTextStyle}>Profile</Text>
        <View style={styles.profileViewStyle}>
          {profileContent.map(value => (
            <View style={styles.profileViewContentStyle}>
              <Icon
                name={value.iconName}
                type={value.icontype}
                color={AppColors.orangeColor}
                size={20}
              />
              <Text style={styles.profileDetailTextStyle}>{value.Title}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.profileheadingTextStyle}>Security</Text>
        <View style={styles.profileViewStyle}>
          {securityViewContent.map(value => (
            <View style={styles.profileViewContentStyle}>
              <Icon
                name={value.iconName}
                type={value.icontype}
                color={AppColors.orangeColor}
                size={20}
              />
              <Text style={styles.profileDetailTextStyle}>{value.Title}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;

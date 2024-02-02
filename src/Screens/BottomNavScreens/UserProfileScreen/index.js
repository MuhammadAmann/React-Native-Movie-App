/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../Assets/colors';
import images from '../../../Assets/images';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const UserProfileScreen = () => {
  const [isVisible, setVisible] = useState(false);
  const [image, setImage] = useState();

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

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
    quality: 1,
    width: 150,
    height: 150,
    includeBase64: false,
  };

  const openCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      console.log('Before if');
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const res = await launchCamera(options);
        if (res.didCancel) {
        } else {
          setImage(res.assets[0]);        }
      } else {
      }
    } catch (error) {
    } finally {
      setVisible(false);
    }
  };

  const openGallery = () => {
    try {
      launchImageLibrary(options, res => {
        if (res.didCancel) {
          return;
        } else if (res.errorMessage) {
          return;
        }
        setImage(res.assets[0]);
      });
    } catch (error) {
    } finally {
      setVisible(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 70}}
      style={styles.scrollviewStyle}>
      <View style={styles.mainViewStyle}>
        {/* <Text style={styles.settingsHeadingTextStyle}>Profile Settings</Text> */}
        <View style={styles.userProfileImageViewStyle}>
          {image ? (
            <ImageBackground
              style={styles.ImageViewStyle}
              source={{uri: image.uri}}
              imageStyle={{borderRadius: 100}}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(true);
                }}
                style={styles.uploadImageViewStyle}>
                <Icon
                  name="add"
                  type={IconType.Ionicons}
                  color={AppColors.orangeColor}
                  size={16}
                />
              </TouchableOpacity>
            </ImageBackground>
          ) : (
            <View
              style={styles.profileImageViewStyle}
              onPress={() => {
                setVisible(true);
              }}>
              <Text style={styles.uploadImageTextStyle}>Upload Image</Text>
              <TouchableOpacity
                onPress={() => {
                  setVisible(true);
                }}
                style={styles.uploadImageViewStyle}>
                <Icon
                  name="add"
                  type={IconType.Ionicons}
                  color={AppColors.orangeColor}
                  size={16}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
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
        <Modal
          onBackdropPress={() => {
            setVisible(false);
          }}
          isVisible={isVisible}
          style={styles.modalStyle}>
          <View style={styles.modalViewStyle}>
            <Icon
              name="circle-with-cross"
              type={IconType.Entypo}
              color= 'grey'
              style={styles.cencelIconStyle}
              onPress={() => {
                setVisible(false);
              }}
              size={20}
            />
            <TouchableOpacity
              onPress={openCamera}
              style={styles.innerModalViewStyle}>
              <Icon
                name="camera-outline"
                type={IconType.Ionicons}
                size={30}
                color={AppColors.orangeColor}
              />
              <Text style={styles.modalTextStyle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openGallery}
              style={styles.innerModalViewStyle}>
              <Icon
                name="image-outline"
                type={IconType.Ionicons}
                size={30}
                color={AppColors.orangeColor}
              />
              <Text style={styles.modalTextStyle}>Open Gallery</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;

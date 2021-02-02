import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { placeholder } from '../../assets/images';

// image url to show image on marker
const CustomMarker = ({ imageUrl }) => {
  return <Image style={styles.image} source={imageUrl ? { url: imageUrl } : placeholder} />;
};

const styles = StyleSheet.create({
  image: { height: 50, width: 50 },
});

export default CustomMarker;

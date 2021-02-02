import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { placeholder } from '../assets/images';
import config from '../config';

const SongsCell = ({ songsInfo }) => {
  return (
    <View style={styles.contentView}>
      <View style={styles.mainView}>
        <Image
          style={styles.image}
          defaultSource={placeholder}
          source={{ uri: songsInfo.artworkUrl100 }}
          resizeMode="contain"
        />
        <View style={styles.infoBGView}>
          <Text style={styles.title} numberOfLines={2}>
            {`${songsInfo.collectionName}, ${songsInfo.trackName}`}
          </Text>
          <Text style={styles.body} numberOfLines={1}>
            {songsInfo.artistName}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default SongsCell;

const styles = StyleSheet.create({
  contentView: {
    width: '100%',
    paddingHorizontal: 10,
  },
  mainView: { flexDirection: 'row', marginRight: 10 },
  title: {
    marginTop: 10,
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  infoBGView: { flex: 1 },
  body: {
    marginTop: 5,
    fontSize: 15,
    marginLeft: 20,
    flex: 1,
    color: config.colors.gray,
  },
  nameBGView: { flexDirection: 'row' },
  divider: {
    marginTop: 10,
    height: 1,
    backgroundColor: config.colors.cellDivider,
  },
  image: { width: 60, height: 60, borderRadius: 30, alignSelf: 'center' },
});

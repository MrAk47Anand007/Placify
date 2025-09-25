import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Pdf from 'react-native-pdf';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import RNFS from 'react-native-fs';

const { width, height } = Dimensions.get('window');

const RenderPdf = ({ uri }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filePath, setFilePath] = useState('');

  useEffect(() => {
    const downloadPdf = async () => {
      try {
        const localFilePath = `${RNFS.DocumentDirectoryPath}/temp.pdf`;
        const downloadResult = await RNFS.downloadFile({
          fromUrl: uri,
          toFile: localFilePath,
        }).promise;

        if (downloadResult.statusCode === 200) {
          setFilePath(localFilePath);
        } else {
          console.error('Failed to download PDF file');
        }
      } catch (error) {
        console.error('Error downloading PDF:', error);
      } finally {
        setIsLoading(false);
      }
    };

    downloadPdf();
  }, [uri]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ShimmerPlaceHolder style={styles.shimmer} autoRun />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pdf
        source={{ uri: filePath }}
        onLoadComplete={(numberOfPages) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmer: {
    width: width - 40,
    height: height - 80,
    borderRadius: 8,
  },
  pdf: {
    flex: 1,
    width: width,
    height: height,
  },
});

export default RenderPdf;

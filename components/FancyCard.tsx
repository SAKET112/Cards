import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Tree Sunset</Text>
          <Text style={styles.cardLabel}>Beautiful</Text>
          <Text style={styles.cardDesc}>silhouette of tree near body of water during beautiful sunset</Text>
          <Text style={styles.cardFooter}>12km away</Text>
          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
      width: 350,
      height: 360,
      borderRadius: 7,
      marginHorizontal: 25,
      marginVertical: 15
    },
    cardElevated: {
      backgroundColor: '#FFFFFF',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    cardImage: {
      height: 180,
      marginBottom: 8,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 13
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6
    },
    cardLabel: {
      color: '#000000',
      fontSize: 18,
      marginBottom: 6
    },
    cardDesc: {
      color: '#E07C24',
      fontSize: 14,
      marginBottom: 12,
      marginTop: 3,
      color: '#242B2E'
    },
    cardFooter: {
      color: '#000000'
    }
})
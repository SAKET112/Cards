import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        { <View style={[styles.card, styles.cardElevated]}>
            <Text>😁</Text>
        </View> }
      </ScrollView>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 8,
        width: 100,
        height: 100
      },
      cardElevated: {
        backgroundColor: '#8b32a8'
      },
      container: {
        padding: 8
      }
})
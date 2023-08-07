import { Linking, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headingContainer}>
                What's new in JavaScript 21 - ES12
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
        }}
        styles={styles.cardImage}
        />
         <View styles={styles.bodyContainer}>
            <Text numberOfLines={3}>
                The ES2021 (ES12) will be released in the middle of 2021. In this tutorial, you will learn about the five most interesting features from this specification: String.prototype.replaceAll(), numeric separators, logical assignment operators, Promise.any(), WeakRef and Finalizers.
            </Text>
         </View>
         <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://blog.alexdevero.com/javascript-es2021-features/')}>
                <Text style={styles.socialLinks}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/saket-bihari-757892186/')}>
                <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8,},
    card: {
        width: 350,
        height: 360,
        borderRadius: 8,
        marginVertical: 15,
        marginHorizontal: 30
    },
    elevatedCard: {
        backgroundColor: '#CAD5E2',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        height: 180,
      marginBottom: 8,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor:'#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 12
    }
})
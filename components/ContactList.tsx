import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Lorem',
            status: 'lorem',
            imageUrl : 'https://upload.wikimedia.org/wikipedia/commons/5/52/Domainme.png' 
        },
        {
            uid: 2,
            name: 'lorem',
            status: 'lorem',
            imageUrl : 'https://www.wikihow.com/images/thumb/5/55/Be-Friends-Forever-with-Your-Best-Friend-Step-1-Version-2.jpg/aid431932-v4-728px-Be-Friends-Forever-with-Your-Best-Friend-Step-1-Version-2.jpg' 
        },
        {
            uid: 3,
            name: 'lorem ipsum',
            status: 'Lorem',
            imageUrl : 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg' 
        },
        {
            uid: 4,
            name: 'Lorem Lorem',
            status: 'Lorem-1',
            imageUrl : 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg' 
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                />
                <View style={styles.userBody}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 8
        
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12,
        color: '#FFF'
    },
    userBody: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
        color: '#000'
    }
})
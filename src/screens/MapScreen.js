import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, StyleSheet , View } from 'react-native'
import Map from '../components/Map'
import Icon from 'react-native-vector-icons/Ionicons'
import GooglePlacesInput from '../components/GooglePlacesInput'

const MapScreen = ({ navigation }) => {
        return (
        // <SafeAreaView forceInset={{ top: 'always' }}>
        //     <GooglePlacesInput/>
        //     <Map />
        // </SafeAreaView>
        <View style = {styles.view}>
            <GooglePlacesInput/>
            <Map/>
        </View>
    )
    }
    MapScreen.navigationOptions = {
        tabBarIcon : ({tintColor})=>(
            <Icon name="md-map" color={tintColor} size={30}/>
        )
    }

const styles = StyleSheet.create({
    view : {
        flex : 1,
        flexDirection : 'column'
    }
})

    export default MapScreen
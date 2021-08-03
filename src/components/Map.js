import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions , Image } from 'react-native'

//const height = Dimensions.get('window').height
//const height = Dimensions.get('screen')

// const response =[
//   {
//     id : '1',
//     coordinates : {
//       latitude : -15.59611,
//       longitude : -56.09667,
//     } ,
//     title : 'Cuiaba',
//     description : 'Cuiaba',
//     //icon : require('..//..')
//   },
//   {
//     id: '2',
//     coordinates: {
//       latitude: -20.44278,
//       longitude: -54.64639,
//     },
//     title: 'Campo Grande',
//     description: 'Campo Grande',
//     category: 1,
//   },
//   {
//     id: '3',
//     coordinates: {
//       latitude: -23.5489,
//       longitude: -46.6388,
//     },
//     title: 'São Paulo',
//     description: 'São Paulo',
//     category: 1,
//   },
//   {
//     id: '4',
//     coordinates: {
//       latitude: -22.9035,
//       longitude: -43.2096,
//     },
//     title: 'Rio de Janeiro',
//     description: 'Rio de Janeiro',
//     category: 1,
//   },
//   {
//     id: '5',
//     coordinates: {
//       latitude: -3.71839,
//       longitude: -38.5434,
//     },
//     title: 'Ceará',
//     description: 'Ceará',
//     category: 1,
//   },
//   {
//     id: '6',
//     coordinates: {
//       latitude: -30.0277,
//       longitude: -51.2287,
//     },
//     title: 'Rio Grande do Sul',
//     description: 'Rio Grande do Sul',
//     category: 1,
//   },
//   {
//     id: '7',
//     coordinates: {
//       latitude: -9.974,
//       longitude: -67.8076,
//     },
//     title: 'Acre',
//     description: 'Acre',
//     category: 1,
//   }
// ]

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 37.57448,
        longitude: 126.98973,
        latitudeDelta: 10,
        longitudeDelta: 1
      }}
    >
      {/* {response.map(marker => (
        <MapView.Marker
        key = {marker.id}
        coordinate = {marker.coordinates}
        title={marker.title}
        description = {marker.description}
      />
      ))} */}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height : "60%"
  }
})

export default Map
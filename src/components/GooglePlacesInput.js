import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {

    const [path , setPath] = useState([])

    return (
        <View style={styles.container}>
          <GooglePlacesAutocomplete
            placeholder="어디로 떠나시나요?"
            query={{
              key: "AIzaSyBZWpySHfPsgd3Cq8gCi7mQbMyn3nYT2Ic",
              language: 'kr', 
            }}
            onPress={(data, details = null) => {console.log(data)} }
            onFail={(error) => console.error(error)}
            requestUrl={{
              url:
                'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
              useOnPlatform: 'web',
            }}
          />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex : 1,
      height : "45%",
      marginTop : 40
    },
  });

export default GooglePlacesInput;
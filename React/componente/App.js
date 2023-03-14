import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text

          style={{
            fontSize: 45,
            alignself: "center",
            color: "green",
          }}
        >
          Neymar no Corinthians!!
        </Text>
        <Image
          style={{ width: 200, height: 210, alignSelf: "center" }}
          source={require('./assets/NEY-1.JPG')}
        />

      </View>

      <TextInput
        style={{
          height: 40,
          bordercolor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="DIGITA"
      />
    </ScrollView>




  )
}
export default pokemon;
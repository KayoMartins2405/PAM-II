import React from 'react';
import {View, StyleSheet } from 'react-native'
import BotaoProps from './components/BotaoProps.js';

const App = () => {
  const handlePress = (msg) => {
    console.log(msg);
  };

  return (
    <View style={styles.container}>
      <BotaoProps label="OI"
       corFundo="green"
       onPress={handlePress}
       />
      
      <BotaoProps> 
      label="Melhor time do Brasil"
       corFundo="yellow"
       msg={"Vai corinthians!!"}
      </BotaoProps>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
});

export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';
export default function App() {
  
  /*const [nome, setNome]= useState('');
  const [email, setemail]= useState('');
  const [senha, setSenha]= useState('');*/
  return (
    <View style={styles.container}>
      <Text>Sejam Bem-Vindos!</Text>
      <StatusBar style="hidden" />
      <TextInput placeholder="Nome Completo:" style={styles.TextInput} onChangeText={text=>setNome(text)}/>
      
      <TextInput placeholder="Email:" style={styles.TextInput} onChangeText={text=>setNome(text)}/>
   
      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    width:'40%',
    height:40,
    backgroundColor:'#B0C4DE',
    borderRadius:20,
    paddingLeft:10,
    margin:10,
  }
});

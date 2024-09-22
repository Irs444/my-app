import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { user } from './utils/data';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';

export default function App() {

  const [userList, setUserList] = useState(user)

  useEffect(() => {
    if(!userList.length){
      setUserList(userList)
    }
  },[userList.length])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cards/>
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
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

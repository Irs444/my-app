import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { user } from './utils/data';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';

export default function App() {

  const [userList, setUserList] = useState(user)

  useEffect(() => {
    if (!userList.length) {
      setUserList(userList)
    }
  }, [userList.length])

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {
        userList.map(({ name, image, location, distance, age }, index) => {
          const isFirst = index == 0;
          return (
            <Cards
            key={index}
            name={name}
            distance={distance}
            location={location}
            age={age}
            image={image}
            isFirst={isFirst}
            />
          )
        }).reverse()
      }
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',

  }
 
});

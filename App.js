import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, PanResponder, StyleSheet, View } from 'react-native';
import { user } from './utils/data';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';

const { width, height } = Dimensions.get("screen")

export default function App() {

  const [userList, setUserList] = useState(user)

  // Animated value for swipe and titl
  const swipe = useRef(new Animated.ValueXY()).current;
  const titleSign = useRef(new Animated.Value(1)).current;

  // Panresponder config
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      titleSign.setValue(y0 > (height * .9) / 2 ? 1 : -1)

    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 100;

      if (isActionActive) {
        // swipe the card off the screen
        Animated.timing(swipe, {
          duration: 1000,
          toValue: {
            x: direction * 500,
            y: dy
          },
          useNativeDriver: true
        }).start(removeTopCards)

      } else {
        // return the card to its original position
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0
          },
          useNativeDriver: true,
          friction: 5
        }).start()
      }
    }

  })

  // remove the top card from the users array

  const removeTopCards = useCallback(() => {
   setUserList((preState) => preState.slice(1))
   swipe.setValue({x:0, y:0});
  }, [swipe])

  // handle user choice (left or right)

  const handleChoices = useCallback((direction) => {
    Animated.timing(swipe.x,{
      toValue: direction * 500,
      duration: 1000,
      useNativeDriver: true
    }).start(removeTopCards)

  },[removeTopCards, swipe.x])
  


  useEffect(() => {
    if (!userList.length) {
      setUserList(user)
    }
  }, [userList.length])

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {
        userList.map(({ name, image, location, distance, age }, index) => {
          const isFirst = index == 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <Cards
              key={index}
              name={name}
              distance={distance}
              location={location}
              age={age}
              image={image}
              isFirst={isFirst}
              swipe={swipe}
              titleSign={titleSign}
              {...dragHandlers}
            />
          )
        }).reverse()
      }
      <Footer handleChoices={handleChoices} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',

  }

});

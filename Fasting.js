import React from 'react';
import {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Alert,
    TextInput,
    useColorScheme,
    Button,
    View,
  } from 'react-native';
  import { NativeBaseProvider, Text, Heading, Container, Center } from "native-base";
  import CountDown from 'react-native-countdown-component';
  import { useCountdown } from 'react-native-countdown-circle-timer'
  import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


function Fasting({navigation}) {
      
    return (
<NativeBaseProvider>
<Center>
    <CountdownCircleTimer
    isPlaying
    duration={140}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => <Text>{remainingTime}</Text>}
  </CountdownCircleTimer>
  <Button title="Home"
        onPress={() => navigation.navigate('Home')}/>
</Center>
        </NativeBaseProvider>
    )
}

export default Fasting;
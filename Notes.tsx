import React from 'react';
import type {PropsWithChildren} from 'react';
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

function Notes(): JSX.Element {
    const [numTextInputs,setNumTextInputs] = React.useState(0);
    return(
        <NativeBaseProvider>
  <Center flex = {1} bg ="secondary.50">
   
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        
            <Heading color="secondary.500">Welcome to the Maru App!</Heading>
           <Button
        title="Click to add notes"
        onPress={() => setNumTextInputs(val => val+1)}/>
        {[...Array(numTextInputs).keys()].map(key=> {
          return<TextInput key={key} style={{
            height: 50,
            borderColor: 'gray',
            borderWidth: 1}} placeholder='New note!'/>
        })}
        { numTextInputs!=0 && <Button
        title="Delete last note"
        onPress={() => setNumTextInputs(val => val-1)}/>}
        
        
      </ScrollView>
    
  </Center>
    </NativeBaseProvider>
    );
}

export default Notes;
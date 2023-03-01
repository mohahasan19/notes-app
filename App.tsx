import React from 'react';
import type {PropsWithChildren} from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeBaseProvider, Text, Heading, Container, Center } from "native-base";

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  

  const [numTextInputs,setNumTextInputs] = React.useState(0);

  return (
  <NativeBaseProvider>
  <Center>
   <Container bg="secondary.50">
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
        <Button
        title="Delete last note"
        onPress={() => setNumTextInputs(val => val-1)}/>
        
      </ScrollView>
    
    </Container>
  </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: "pink"
  },
});

export default App;

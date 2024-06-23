/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Provider} from 'jotai';
import {FlashList} from '@shopify/flash-list';
import Count from './src/store/Count';
import {createCountAtom} from './src/store/count.store';

const data = Array(20)
  .fill(null)
  .map((_, id) => ({
    id,
    backgroundColor: 'pink',
    countAtom: createCountAtom(),
  }));
const Item = ({item}: {item: (typeof data)[number]}) => {
  const [backgroundColor, setBackgroundColor] = useState(item.backgroundColor);

  return (
    <View
      style={{
        backgroundColor: `${backgroundColor}`,
        alignItems: 'center',
        margin: 10,
        padding: 30,
        justifyContent: 'center',
      }}>
      <TextInput
        placeholder="Background Color"
        style={styles.input}
        value={backgroundColor}
        onChangeText={setBackgroundColor}
      />
      <Count countAtom={item.countAtom} />
    </View>
  );
};
const App = () => {
  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <FlashList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Item item={item} />}
          estimatedItemSize={100}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
  },

  action: {
    flexDirection: 'row',
    gap: 10,
  },
});
export default App;

import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Atom, useAtom} from 'jotai';

interface CountProps {
  countAtom: Atom<number>;
}

const Count: React.FC<CountProps> = ({countAtom}) => {
  const [count, setCount]: [number, any] = useAtom(countAtom);

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.action}>
        <Pressable onPress={() => setCount((num: number) => num - 1)}>
          <Text style={styles.text}>-</Text>
        </Pressable>
        <Pressable onPress={() => setCount((num: number) => num + 1)}>
          <Text style={styles.text}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  action: {
    flexDirection: 'row',
    gap: 10,
  },
});
export default Count;

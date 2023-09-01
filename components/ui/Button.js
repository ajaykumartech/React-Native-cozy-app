import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/styles';

function Button({ children, onPress, color,tintColor }) {
  return (
    <Pressable
      style={(({ pressed }) => [ styles.button, pressed && styles.pressed,{backgroundColor:color}]) }
      onPress={onPress}
    >
      <View> 
        <Text style={[styles.buttonText,{color:tintColor}]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: Colors.gray,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom:12
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
});

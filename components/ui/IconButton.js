import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, size, onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} /><Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
    flexDirection:'row',
    marginVertical:2,
    marginHorizontal:6,
    marginTop:1,
  },
  pressed: {
    opacity: 0.7,
  },
  text:{
    paddingLeft:6,
    justifyContent:'center',
    color:'black',
    fontSize:16,
    marginHorizontal:6
  }
});

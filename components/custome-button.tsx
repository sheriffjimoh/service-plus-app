import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text,isActive }: any) => {
  const [isPressed, setIsPressed] = useState(isActive ? isActive : false);

  console.log({ isPressed })

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPressed ? styles.buttonPressed : null,
        isActive ? styles.activeButton : null,
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >    
     <Text style={[styles.text, isActive && styles.activeText]}>{text}</Text>
 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: 'black',
  },
  activeButton: {
    backgroundColor: 'black',
  },
  text: {
    color: 'black',
  },
  activeText: {
    color: 'white',
  },
});

export default CustomButton;

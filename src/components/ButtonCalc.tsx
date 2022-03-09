import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../themes/appThemes';

interface Props {
    text: string,
    color: string,
    onPress: (numText: string) => void,
}


const ButtonCalc = ({ text, color, onPress }: Props) => {
    return (

        <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(text)}>
            <View style={[styles.button,
                color === 'Boca' ? styles.goldButton :
                color === 'orange' ? styles.orangeButton :
                color === 'grey' ? styles.greyButton : styles.button, text === '0' ? styles.buttonCero : null]}>
                <Text style={[styles.buttonText, color==='Boca' ? styles.buttonBokeText : styles.buttonText]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default ButtonCalc;
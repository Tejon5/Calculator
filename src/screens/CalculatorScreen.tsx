import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import ButtonCalc from "../components/ButtonCalc";
import { styles } from "../themes/appThemes";
import { useCalculator } from "../hooks/useCalculator";


const CalculatorScreen = () => {

    const {        btnAdd, btnBonification, btnBoquita, btnDelete, btnDivide, btnDullar, btnIva, btnSubstract, btnMultiply,
        number, firstNumber, setNumber, setFirstNumber, clean,onPress, negativePositive, calculate} = useCalculator()

    return (
        <View style={styles.calculadoraContainer}>

            <Text style={styles.littleResult}>{firstNumber}</Text>
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>


            {/*Contenedor de botones */}
            <View style={styles.rows}>
                <ButtonCalc text='u$d'onPress={btnDullar} color='grey' />
                <ButtonCalc text='IVA'onPress={btnIva} color='grey' />
                <ButtonCalc text='Bon'onPress={btnBonification} color='grey' />
                <ButtonCalc text='Boca'onPress={btnBoquita} color='Boca' />
                <ButtonCalc text='C' onPress={clean} color='grey' />
                <ButtonCalc text='+/-' onPress={negativePositive} color='grey' />
                <ButtonCalc text='del' onPress={btnDelete} color='grey' />
                <ButtonCalc text='/' onPress={btnDivide} color='orange' />
                <ButtonCalc text='7' onPress={onPress} color='black' />
                <ButtonCalc text='8' onPress={onPress} color='black' />
                <ButtonCalc text='9' onPress={onPress} color='black' />
                <ButtonCalc text='X' onPress={btnMultiply} color='orange' />
                <ButtonCalc text='4' onPress={onPress} color='black' />
                <ButtonCalc text='5' onPress={onPress} color='black' />
                <ButtonCalc text='6' onPress={onPress} color='black' />
                <ButtonCalc text='-' onPress={btnSubstract} color='orange' />
                <ButtonCalc text='1' onPress={onPress} color='black' />
                <ButtonCalc text='2' onPress={onPress} color='black' />
                <ButtonCalc text='3' onPress={onPress} color='black' />
                <ButtonCalc text='+' onPress={btnAdd} color='orange' />
                <ButtonCalc text='0' onPress={onPress} color='black' />
                <ButtonCalc text='.' onPress={onPress} color='black' />
                <ButtonCalc text='=' onPress={calculate} color='orange' />
            </View>
        </View>
    )
}



export default CalculatorScreen;
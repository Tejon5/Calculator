import React, { useState, useRef } from "react";

enum Operations {
    add, substract, divide, multiply
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');

    const lastOperation = useRef<Operations>();

    const clean = () => {
        setNumber('0');
        setFirstNumber('0');
    }


    const onPress = (numText: string) => {
        //verificar si existe un punto decimal, si es asi no vuelve a agregarlo
        if (numText.includes('.') && firstNumber === '.') return;

        if (number.includes('0') || number.includes('-0')) {
            // Si es punto decimal lo agrega
            if (numText === '.') {
                setNumber(number + numText)


                //Evaluar si es otro cero, y hay un punto
            } else if (numText === '0' && number.includes('.')) {
                setNumber(number + numText)
            }

            //Evaluar si es diferente de cero y no tiene un punto
            if (numText !== '0' && !number.includes('.')) {
                setNumber(numText)
            }

            //Evitar el caso de repetir ceros
            else if (numText === '0' && !number.includes('.')) {
                setNumber(number)
            }

        } else {
            setNumber(number + numText)
        }

    }

    const negativePositive = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const btnDelete = () => {
        if (number.length > 1) {
            setNumber(number.slice(0, -1))
        } else {
            setNumber('0')
        }
    }

    const btnDivide = () => {
        changeNumber();
        lastOperation.current = Operations.divide
    }

    const btnMultiply = () => {
        changeNumber();
        lastOperation.current = Operations.multiply
    }

    const btnAdd = () => {
        changeNumber();
        lastOperation.current = Operations.add
    }

    const btnSubstract = () => {
        changeNumber();
        lastOperation.current = Operations.substract
    }


    const changeNumber = () => {
        if (number.endsWith('.')) {
            setFirstNumber(number.slice(0, -1))
        } else {
            setFirstNumber(number)
        }
        setNumber('0');
    }

    const calculate = () => {
        const num1 = Number(firstNumber);
        const num = Number(number);

        switch (lastOperation.current) {
            case Operations.add:
                setNumber(`${num1 + num}`);
                break;
            case Operations.substract:
                setNumber(`${num1 - num}`);
                break;
            case Operations.divide:
                setNumber(`${num1 / num}`);
                break;
            case Operations.multiply:
                setNumber(`${num1 * num}`);
                break;
        }
        setFirstNumber('0');
    }

    const btnBoquita = () => {
        setNumber('Boquita es el mas grande, Dale Boke')
    }

    const btnDullar = () => {
        if (!number) {
            setNumber('0')
        }
        const num = Number(number)
        setNumber(`${num / 212}`)
    }

    const btnIva = () => {
        if (!number) {
            setNumber('0')
        }
        const num = Number(number);
        setNumber(`${num * 21 / 100}`)
    }

    const btnBonification = () => {
        if (!number) {
            setNumber('0')
        }
        const num = Number(number);
        setNumber(`${num - (num * 10 / 100)}`)
    }


    return {
        btnAdd, btnBonification, btnBoquita, btnDelete, btnDivide, btnDullar, btnIva, btnSubstract, btnMultiply,
        number, firstNumber, setNumber, setFirstNumber, clean, onPress, negativePositive, calculate
    }
}

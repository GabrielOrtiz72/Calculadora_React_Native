import CalculatorButton from '@/components/CalculatorButton';
import Display from '@/components/Display';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [displayValue, setDisplayValue] = useState('0')
  const [operation, setOperation] = useState('')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [values, setValues] = useState([0, 0])
  const [position, setPosition] = useState(0)

  function funcClearDisplay() {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation('')
  }

  function addOperation(o: string) {
    if (position === 0) {
      setOperation(o)
      setPosition(1)
      setClearDisplay(true)
    } else {
      const vals = [...values]
      try {
        vals[0] = eval(`${vals[0]} ${operation} ${vals[1]}`)
      } catch (e) {
        alert(e)
      }
      setDisplayValue(vals[0].toString())
      setOperation('')
      setPosition(0)
      setClearDisplay(true)
      setValues([...vals])
    }
  }

  function addDigit(n: string) {
    if (n === ',' && displayValue.includes(',')) {
      return
    }
    const current = clearDisplay ? '' : displayValue
    const newValue = current + n
    setDisplayValue(newValue)
    setClearDisplay(false)

    const calcValue = parseFloat(displayValue)
    const vals = [...values]
    vals[position] = calcValue
    setValues([...vals])
  }

  return (
    <View style={styles.container}>
      <Display text={displayValue} />
      <View style={styles.buttonsContainer}>
        <CalculatorButton text='C' other={true} onClick={() => funcClearDisplay()} />
        <CalculatorButton text='+/-' other={true} onClick={(label) => { console.log('Clicou no botão ' + label) }} />
        <CalculatorButton text='%' other={true} onClick={(label) => { console.log('Clicou no botão ' + label) }} />
        <CalculatorButton text='/' operation={true} onClick={(label) => addOperation(label)} />
        <CalculatorButton text='7' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='8' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='9' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='x' operation={true} onClick={(label) => { addOperation(label) }} />
        <CalculatorButton text='4' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='5' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='6' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='-' operation={true} onClick={(label) => { addOperation(label) }} />
        <CalculatorButton text='1' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='2' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='3' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='+' operation={true} onClick={(label) => { addOperation(label) }} />
        <CalculatorButton text='0' double={true} onClick={(label) => addDigit(label)} />
        <CalculatorButton text=',' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='=' operation={true} onClick={(label) => { addOperation(label) }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

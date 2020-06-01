import React, { useState }  from 'react'
import Result from './Result'
import KetPad from './Keypad'

import '../css/calculator.css'

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [currentResult, setCurrentResult] = useState(0);
  const [inputStack, setInputStack] = useState([]);
  const [darkTheme, setTheme] = useState(false)
  const [mode, setMode] = useState('Regular')

  const onkeyPress = (e) => {
    let key = e.target.value
    if(key=="Clear") { reset(); return; }
    if(key == "="){ calculateResult(); return; }
    if(currentResult != 0){
      setResult(`${result}`+key) 
    }else{
      setResult(+key)
      setCurrentResult(1)
    }
  }

  const onCalculate = (e) => {
    let key = e.target.value
    if(mode === 'Regular') { regularModeCalc(key); return}
    if(mode === 'Scientific') { ScientificModeCalc(key); return;}
  }


  const regularModeCalc = (key) => {
    let res = result
    if (inputStack.length != 0){
      let resStack = [...inputStack, result]
      res = eval(resStack.join('')) // result caclulation
      setResult(res)
    }
    let arr = [res,key]
    setInputStack(arr)
    setCurrentResult(0)
  }

  const ScientificModeCalc = key => {
    switch(key) {
      case "sign":
        setResult( result * -1);
        break;
      case "square":
        setResult( result * result);
        break;
      case "sqrt":
        setResult( Math.sqrt(result));
        break;
      case "cbrt":
        setResult( Math.cbrt(result));
        break;
    }
  }

  const calculateResult = () => {
    let res = eval(inputStack.join('')+result)
    setResult(res || result)
    setInputStack([])
    setCurrentResult(0);
  }

  const reset = () => {
    setInputStack([]);
    setCurrentResult(0);
    setResult(0)
  }

  const onThemeChange = (theme) => {
    if(theme=='light') setTheme(false) 
    if(theme == 'dark') setTheme(true)
  }

  const onModeChange = () => {
    if(mode == 'Scientific'){
      setMode('Regular')
    }else{
      setMode('Scientific')
    }
    reset() 
  }
  
  return(
    <div className={ darkTheme ? "dark-theme": ""}>
      <h1>The Calculator</h1>
      <div className="calculator">
        <div className="side-btn">
          <div>
            <button onClick={() => onThemeChange('light')}>Light Theme</button>
            <button onClick={() => onThemeChange('dark')}>Dark Theme</button>
          </div>
          <div>
            <button  onClick={() => onModeChange()}>{mode === 'Regular' ? 'Scientific' : 'Regular'}</button>
          </div>
        </div>
        <div className="main">
          <Result result={result}/>
          <KetPad click={onkeyPress} calc={onCalculate} mode={mode}/>
        </div>
      </div>
    </div>
  )
}

export default Calculator
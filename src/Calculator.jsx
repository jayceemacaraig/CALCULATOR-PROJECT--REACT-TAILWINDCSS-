import React, {useState} from 'react'
import NumBox from './section/NumBox';
import Button from  './components/Button';
import Operator from  './components/Operator';




  
const Calculator = () => {  
  
  const [input, setInput] = useState('');
  const [prev, setPrev] = useState('');
  const [operator, setOperator] = useState('');



  const equalHandler = () => {
    if (input !== "0") {
      setInput(calculate())
      setPrev('')
      setOperator('');
    }
  }

  const buttonHandler = (value) => {
    if (value === 'C') {
      setInput(input.length === 1 ? "0" : input.slice(0, -1))
    } 
    else if (value === 'CE') {
      setInput("0");
      setPrev('');
  
      setOperator('');
    } 
    else if (value === '%') {
      setInput((parseFloat(input) / 100).toString());
    }
    else {setInput(input === "0"  ? value : input + value)}
  };


  const operatorHandler = (value) => {
    if(input !== "0") {
      if (!prev) {setPrev(input)}

  
      setInput("0"); 
      setOperator(value);
    }
   
  };

  const calculate = () => {
    let result;

    switch (operator) {
      case "X":
        result = parseFloat(prev) * parseFloat(input);
        break;
      case "/":
        if (input === "0") {
          result = "Cannot divide with 0" 
          break}
        else {
          result = parseFloat(prev) / parseFloat(input);
          result.toFixed(2);
          break;
        }
      case "+":
        result = parseFloat(prev) + parseFloat(input);
        break;
      case "-":
        result = parseFloat(prev) - parseFloat(input);
        break;
    }
    
    if (result !== undefined) {return  result.toString() }
  }


  return (
    <main className='flex flex-col items-center w-80 h-105 bg-gray-900 rounded-4xl ring-10 ring-gray-900 py-2 px-5 '>
      <NumBox value={input || "0"} operator={operator || ""}/>
    <div className='flex flex-col gap-3'>
      <div className='flex gap-1'>
        <Button value={'%'} onClick={buttonHandler} />
        <Button value={'CE'} onClick={buttonHandler} />
        <Button value={'C'} onClick={buttonHandler} />
        <Operator value={'/'} onClick={operatorHandler}/>
      </div>
      <div className='flex gap-1'>
        <Button value={'7'} onClick={buttonHandler} />
        <Button value={'8'} onClick={buttonHandler} />
        <Button value={'9'} onClick={buttonHandler} />
        <Operator value={'X'} onClick={operatorHandler}/>
      </div>
      <div className='flex gap-1'>
        <Button value={'4'} onClick={buttonHandler} />
        <Button value={'5'} onClick={buttonHandler} />
        <Button value={'6'} onClick={buttonHandler} />
        <Operator value={'-'} onClick={operatorHandler}/>
      </div>
      <div className='flex gap-1'>
        <Button value={'1'} onClick={buttonHandler} />
        <Button value={'2'} onClick={buttonHandler} />
        <Button value={'3'} onClick={buttonHandler} />
        <Operator value={'+'} onClick={operatorHandler}/>
      </div>
      <div className='flex gap-1'>
          <Button value={'0'} onClick={buttonHandler} />
          <Button value={'.'} onClick={buttonHandler} />
        <button className='btn bg-blue-700 hover:bg-blue-500 w-1/2 text-4xl' onClick={equalHandler}>=</button>
      </div>
    </div>
</main>
  )
}

export default Calculator;

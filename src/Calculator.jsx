import React, {useState} from 'react'
import NumBox from './section/NumBox';
import Button from  './components/Button';
import Operator from  './components/Operator';




  
const Calculator = () => {  
  
  const [input, setInput] = useState('');
  const [prev, setPrev] = useState('');
  const [operator, setOperator] = useState('');
  const [history, setHistory] = useState('');


  const buttonHandler = (value) => {
    if (value === 'C') {
      setInput(input.length === 1 ? "0" : input.slice(0, -1))
    } 
    else if (value === 'CE') {
      setInput("0");
      setHistory('');
      setOperator('');
    } 
    else if (value === '%') {
      setInput((parseFloat(input) / 100).toString());
    }
    else {setInput(input === "0"  ? value : input + value)}
  };


  const operatorHandler = (value) => {
    let currentInput = input
    if (!prev) {
      setHistory(`${input} ${value}`)
      setPrev(currentInput)
    } else {
     setHistory(`${prev} ${value}`)
   }

   setInput('0');
   setOperator(value);

   console.log(prev)
   console.log(operator)
   console.log(input)
  };

  const calculate = () => {
    let result = eval(history);
    setInput(result);
    setHistory('');
  }


  return (
    <main className='flex flex-col items-center w-80 h-3/5 bg-gray-900 rounded-4xl ring-10 ring-gray-900 py-2 px-5 '>
      <NumBox value={input || "0"} history={history || ""}/>
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
        <button className='btn bg-blue-700 hover:bg-blue-500 w-1/2 text-4xl' onClick={calculate}>=</button>
      </div>
    </div>
</main>
  )
}

export default Calculator;

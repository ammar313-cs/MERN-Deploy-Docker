import React, { useState } from 'react';

const SumCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);
  const calculateSum = () => {
    const N1 = parseInt(num1);
    const N2 = parseInt(num2);   
    const calculatedSum = N1 + N2;
    setSum(calculatedSum);    
  };
  return (
    <div>
      <h2>React Sum Calculator</h2>
      <input type="text" placeholder="Enter number 1" value={num1} onChange={(e) => setNum1(e.target.value)}/>
      <input type="text" placeholder="Enter number 2" value={num2} onChange={(e) => setNum2(e.target.value)}/>
      <button onClick={calculateSum}>Calculate Sum</button>
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
};

export default SumCalculator;
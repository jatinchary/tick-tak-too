import React, { useState } from 'react';
import Square from './Square';

function BoardContainer() {
  const [data, setData] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);

  const handleIndex = (index) => {
    const copyState = [...data];
    if (copyState[index] === null) {
      copyState[index] = turn ? 'X' : 'O';
      setData(copyState);
      setTurn(!turn);
    }
  };
  const handlereset = () => {
    setData(Array(9).fill(null));
  };

  function calculateWinner(squares) {
    // Define winning combinations
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner ('x' or 'o')
      }
    }
  
    return null; // Return null if there is no winner yet
  }
 
  const winner = calculateWinner(data);

if (winner) {
  console.log(`Player ${winner} wins!`);
}


  return (
    <div className='Board_Container'>
      <div className='board_rows'>
        <Square onClick={() => handleIndex(0)} value={data[0]} />
        <Square onClick={() => handleIndex(1)} value={data[1]} />
        <Square onClick={() => handleIndex(2)} value={data[2]} />
      </div>
      <div className='board_rows'>
        <Square onClick={() => handleIndex(3)} value={data[3]} />
        <Square onClick={() => handleIndex(4)} value={data[4]} />
        <Square onClick={() => handleIndex(5)} value={data[5]} />
      </div>
      <div className='board_rows'>
        <Square onClick={() => handleIndex(6)} value={data[6]} />
        <Square onClick={() => handleIndex(7)} value={data[7]} />
        <Square onClick={() => handleIndex(8)} value={data[8]} />
      </div>
      <h5 className='winstatement'>the winner is {winner}</h5>
      
        <button className='button' onClick={handlereset}>reset</button>
      
    </div>
  );
}

export default BoardContainer;

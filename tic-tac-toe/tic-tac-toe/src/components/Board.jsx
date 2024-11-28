import { useState } from "react";
import Square from "./Square";

export default function Board() {
  //se declaran constantes para los turnos con valor inicial true indicando que le toca al jugador "X"
  const [xIsNext, setXIsNext] = useState(true);
  //se declaran constantes  para useState para los cuadrados del tablero, se crea un arreglo de 9 elementos con valor null
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    //se llama funcion calculateWinner y si hay un ganador el programa termina
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //se crea una copia del tablero para poder cambiar el estado de los cuadrados ya que en react no se puede cambiar directamente
    const nextSquares = squares.slice();
    //se determina que turno sigue, y dependiendo de eso se pone el caracter X o Y
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    //renderiza el elemento X o Y
    setSquares(nextSquares);
    //se cambia el turno
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

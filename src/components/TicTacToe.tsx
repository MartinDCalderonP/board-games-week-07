import React, { useState, useEffect } from 'react';
import styles from '../styles/TicTacToe.module.scss';
// import useTimeMachine from '../hooks/useTimeMachine';
import Button from './Button';

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const patterns = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export default function TicTacToe() {
	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
	const [player, setPlayer] = useState('X');
	const [winner, setWinner] = useState('');
	// const [record, reset] = useTimeMachine(board);

	useEffect(() => {
		const winnerPattern = patterns.find((pattern) => {
			return pattern.every((square) => board[square] === player);
		});

		if (winnerPattern) {
			setWinner(player);
			alert(`${player} wins!`);
		}

		return () => {
			setPlayer(player === 'X' ? 'O' : 'X');
		};
	}, [board, player]);

	useEffect(() => {
		if (board.every((square) => square !== '')) {
			setWinner('-');
			alert('Draw!');
		}
	}, [board]);

	const handleSquareClick = (index: number) => {
		if (board[index] === '') {
			const newBoard = [...board];
			newBoard[index] = player;
			setBoard(newBoard);
		}
	};

	const handleResetButtonClick = () => {
		// reset();
		setBoard(['', '', '', '', '', '', '', '', '']);
		setWinner('');
		setPlayer('X');
	};

	return (
		<div className={styles.ticTacToe}>
			<div className={styles.grid}>
				{squares.map((_, index) => (
					<div
						key={`square${index}`}
						className={styles.square}
						onClick={() => handleSquareClick(index)}
					>
						{board[index]}
					</div>
				))}
			</div>

			<div className={styles.controls}>
				<Button>Next</Button>
				<Button>Resume</Button>
				<Button>Previous</Button>
				<p>Next to Move</p>
				<div className={styles.nextToMove}>{!winner ? player : winner}</div>
				<Button onClick={handleResetButtonClick}>Reset</Button>
			</div>
		</div>
	);
}

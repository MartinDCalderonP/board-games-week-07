import React, { useState, useEffect } from 'react';
import styles from '../styles/TicTacToe.module.scss';
import useTimeMachine from '../hooks/useTimeMachine';
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
	const [, , reset, record] = useTimeMachine(board);
	const [step, setStep] = useState(0);
	const [moves, setMoves] = useState<string[][]>([]);

	useEffect(() => {
		const winnerPattern = patterns.find((pattern) => {
			return pattern.every((square) => board[square] === player);
		});

		if (winnerPattern && !winner) {
			setWinner(player);
			setMoves(record.slice(0));
			alert(`${player} wins!`);
		} else {
			if (winner === '' && board.every((square) => square !== '')) {
				setWinner('-');
				alert('Draw!');
			}
		}

		return () => {
			setPlayer(player === 'X' ? 'O' : 'X');
		};
	}, [winner, board, player, record]);

	const handleSquareClick = (index: number) => {
		if (!winner && board[index] === '') {
			const newBoard = [...board];
			newBoard[index] = player;
			setBoard(newBoard);
		}
	};

	const handleResetButtonClick = () => {
		reset();
		setBoard(['', '', '', '', '', '', '', '', '']);
		setWinner('');
		setPlayer('X');
	};

	const handleNextButtonClick = () => {
		if (step > 0) {
			setBoard(moves[step - 1]);
			setStep(step - 1);
		}
	};

	const handleReplayButtonClick = () => {
		setBoard(moves[moves.length - 1]);

		const reversedMoves = moves.slice().reverse();

		for (let i = 0; i < reversedMoves.length; i++) {
			setTimeout(() => {
				setBoard(reversedMoves[i]);
			}, i * 500);
		}
	};

	const handlePreviousButtonClick = () => {
		if (step < moves.length - 1) {
			setBoard(moves[step + 1]);
			setStep(step + 1);
		}
	};

	return (
		<div className={styles.ticTacToe}>
			<div className={styles.grid}>
				{squares.map((_, index) => (
					<div
						key={`square${index}`}
						className={styles.square + (winner ? ` ${styles.disabled}` : '')}
						onClick={() => handleSquareClick(index)}
					>
						{board[index]}
					</div>
				))}
			</div>

			<div className={styles.controls}>
				<Button
					onClick={handleNextButtonClick}
					disabled={!winner || step === 0 ? true : false}
				>
					Next
				</Button>
				<Button
					onClick={handleReplayButtonClick}
					disabled={!winner ? true : false}
				>
					Replay
				</Button>
				<Button
					onClick={handlePreviousButtonClick}
					disabled={!winner || step === moves.length - 1 ? true : false}
				>
					Previous
				</Button>
				<p>Next to Move</p>
				<div className={styles.nextToMove}>{!winner ? player : winner}</div>
				<Button onClick={handleResetButtonClick}>Reset</Button>
			</div>
		</div>
	);
}

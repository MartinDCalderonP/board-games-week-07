import React, { useState } from 'react';
import styles from '../styles/TimeMachine.module.scss';
import useTimeMachine from '../hooks/useTimeMachine';
import Button from './Button';

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function TimeMachine() {
	const [currentSquare, setCurrentSquare] = useState(0);
	const [previous, getPreviousValue, record] = useTimeMachine(currentSquare);

	const handleSquareClick = (index: number) => {
		setCurrentSquare(index + 1);
		console.log(record);
	};

	return (
		<div className={styles.timeMachine}>
			<div className={styles.grid}>
				{squares.map((_, index) => (
					<div
						key={`square${index}`}
						className={styles.square}
						onClick={() => handleSquareClick(index)}
					/>
				))}
			</div>

			<div className={styles.controls}>
				<Button>Next</Button>
				<Button>Resume</Button>
				<Button>Previous</Button>
			</div>
		</div>
	);
}

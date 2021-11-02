import React, { useState } from 'react';
import styles from '../styles/TimeMachine.module.scss';
import useTimeMachine from '../hooks/useTimeMachine';
import Button from './Button';

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function TimeMachine() {
	const [counter, setCounter] = useState<number>(0);
	const [currentSquare, setCurrentSquare] = useState(0);
	const [traversing, setTraversing] = useState(false);
	const [traversingSquare, setTraversingSquare] = useState<number>(0);
	const [, , , record] = useTimeMachine(currentSquare);

	const handleSquareClick = (index: number) => {
		if (!traversing && index + 1 !== currentSquare) {
			setCurrentSquare(index + 1);
		}
	};

	const handleNextButtonClick = () => {
		if (counter > 0) {
			setCounter((current) => current - 1);
		}

		setTraversingSquare(record[counter - 2]);
	};

	const handleResumeButtonClick = () => {
		setTraversing(false);
		setCounter(0);
	};

	const handlePreviousButtonClick = () => {
		setTraversing(true);

		setTraversingSquare(record[counter]);

		if (counter < record.length - 1) {
			setCounter((current) => current + 1);
		}
	};

	return (
		<div className={styles.timeMachine}>
			<div className={styles.grid}>
				{squares.map((_, index) => (
					<div
						key={`square${index + 1}`}
						className={
							styles.square +
							(!traversing
								? index + 1 === currentSquare
									? ` ${styles.disabled}`
									: ''
								: index + 1 !== traversingSquare
								? ` ${styles.disabled}`
								: '')
						}
						onClick={() => handleSquareClick(index)}
					/>
				))}
			</div>

			<div className={styles.controls}>
				<Button
					onClick={handleNextButtonClick}
					disabled={record[counter - 2] === undefined ? true : false}
				>
					Next
				</Button>

				<Button
					onClick={handleResumeButtonClick}
					disabled={!traversing ? true : false}
				>
					Resume
				</Button>

				<Button
					onClick={handlePreviousButtonClick}
					disabled={
						counter > 0 && (counter === record.length - 1 ? true : false)
					}
				>
					Previous
				</Button>
			</div>
		</div>
	);
}

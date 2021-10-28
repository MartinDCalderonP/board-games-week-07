import React from 'react';
import styles from '../styles/TicTacToe.module.scss';
import Button from './Button';

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function TicTacToe() {
	return (
		<div className={styles.ticTacToe}>
			<div className={styles.grid}>
				{squares.map(() => (
					<div className={styles.square} />
				))}
			</div>

			<div className={styles.controls}>
				<Button>Next</Button>
				<Button>Resume</Button>
				<Button>Previous</Button>
				<p>Next to Move</p>
				<div className={styles.nextToMove}>X-O</div>
				<Button>Reset</Button>
			</div>
		</div>
	);
}

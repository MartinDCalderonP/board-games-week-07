import React, { useState } from 'react';
import styles from './styles/App.module.scss';
import TimeMachine from './components/TimeMachine';
import TicTacToe from './components/TicTacToe';
import Button from './components/Button';

function App() {
	const [game, setGame] = useState('ticTacToe');

	const handleChangeGameButtonClick = () => {
		setGame(game === 'ticTacToe' ? 'timeMachine' : 'ticTacToe');
	};

	return (
		<div className={styles.app}>
			<Button
				className={styles.changeGameButton}
				onClick={handleChangeGameButtonClick}
			>
				Change Game
			</Button>

			{game === 'timeMachine' ? <TimeMachine /> : <TicTacToe />}
		</div>
	);
}

export default App;

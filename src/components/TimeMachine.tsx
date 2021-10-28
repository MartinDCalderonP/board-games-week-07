import React, { useState } from 'react';
import styles from '../styles/TimeMachine.module.scss';
import Grid from './Grid';
import Controls from './Controls';

export default function TimeMachine() {
	return (
		<div className={styles.timeMachine}>
			<Grid />
			<Controls />
		</div>
	);
}

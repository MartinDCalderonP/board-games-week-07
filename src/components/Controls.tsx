import React from 'react';
import styles from '../styles/Controls.module.scss';
import Button from './Button';

export default function Controls() {
	return (
		<div className={styles.controls}>
			<Button>Next</Button>
			<Button>Resume</Button>
			<Button>Previous</Button>
		</div>
	);
}

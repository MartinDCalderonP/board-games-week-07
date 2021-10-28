import React from 'react';
import styles from '../styles/Button.module.scss';
import { IButton } from '../common/types';

export default function Button({ onClick, children, disabled }: IButton) {
	return (
		<button
			className={styles.button + (disabled ? ` ${styles.disabled}` : '')}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

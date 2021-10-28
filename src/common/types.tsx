import { MouseEventHandler, ReactNode } from 'react';

export interface IButton {
	onClick?: MouseEventHandler;
	children: ReactNode;
	disabled?: boolean;
}

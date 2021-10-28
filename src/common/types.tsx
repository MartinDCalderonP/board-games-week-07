import { MouseEventHandler, ReactNode } from 'react';

export interface IButton {
	className?: string;
	onClick?: MouseEventHandler;
	children: ReactNode;
	disabled?: boolean;
}

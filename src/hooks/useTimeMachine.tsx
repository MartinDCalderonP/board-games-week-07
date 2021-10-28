import { useEffect, useRef } from 'react';

export default function useTimeMachine<T>(
	value: T
): [T, (position: number) => T, T[]] {
	const ref: any = useRef<T>();
	const history = useRef<T[]>([]);
	const getPreviousValue = (position: number) => history.current[position];

	useEffect(() => {
		ref.current = value;
		history.current.unshift(value);
	}, [value]);

	return [ref.current, getPreviousValue, history.current];
}

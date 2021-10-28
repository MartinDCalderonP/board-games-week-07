import { useEffect, useRef } from 'react';

export default function useTimeMachine<T>(
	value: T
): [T, (position: number) => T, T[]] {
	const ref: any = useRef<T>();
	const record = useRef<T[]>([]);
	const getValueOnPosition = (position: number) => record.current[position];

	useEffect(() => {
		ref.current = value;
		record.current.unshift(value);
	}, [value]);

	return [ref.current, getValueOnPosition, record.current];
}

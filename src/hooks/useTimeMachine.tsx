import { useEffect, useRef } from 'react';

export default function useTimeMachine<T>(
	value: T
): [T | undefined, (position: number) => T | undefined, () => void, number] {
	const ref = useRef<T>();
	const record = useRef<T[]>([]);

	const getPreviousValue = (position: number) => record.current[position];

	const reset = () => {
		record.current = [];
	};

	useEffect(() => {
		ref.current = value;
		record.current.unshift(value);
	}, [value]);

	return [ref.current, getPreviousValue, reset, record.current.length];
}

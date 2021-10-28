import { useEffect, useRef } from 'react';

export default function useTimeMachine<T>(value: T): [T, T[]] {
	const ref: any = useRef<T>();
	const record = useRef<T[]>([]);

	useEffect(() => {
		ref.current = value;
		record.current.unshift(value);
	}, [value]);

	return [ref.current, record.current];
}

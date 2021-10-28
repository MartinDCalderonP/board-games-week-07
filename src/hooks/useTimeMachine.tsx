import { useEffect, useRef } from 'react';

export default function useTimeMachine<T>(value: T): T[] {
	const record = useRef<T[]>([]);

	useEffect(() => {
		record.current.unshift(value);
	}, [value]);

	return record.current;
}

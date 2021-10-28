import { useEffect, useRef } from 'react';

export default function useTimeMachine<T>(value: T): [T[], () => void] {
	const record = useRef<T[]>([]);

	const reset = () => {
		record.current = [];
	};

	useEffect(() => {
		record.current.unshift(value);
	}, [value]);

	return [record.current, reset];
}

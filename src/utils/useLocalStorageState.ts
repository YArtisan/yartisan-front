import { useState } from 'react'

export const useLocalStorageState = <T>(nameInStorage: string, initialValue: T): [T, (value: T) => void] => {
	const storedValue = localStorage.getItem(nameInStorage)
	const initial = storedValue !== null ? JSON.parse(storedValue) : initialValue

	const [state, setState] = useState<T>(initial)

	const setStateAndStorage = (value: T): void => {
		setState(value)
		localStorage.setItem(nameInStorage, JSON.stringify(value))
	}

	return [state, setStateAndStorage]
}

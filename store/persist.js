import {get} from 'lodash'

import AsyncStorage from '@react-native-community/async-storage';

export function getPersistedState(path) {
	try {
		const serializedState = AsyncStorage.getItem(`Case.${path}`);
		return serializedState === null ? undefined : JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
}

export function persist(state, path) {
	try {
		const value = get(state, path);
		console.log(state,"state")
		const serializedState = JSON.stringify(value);
		AsyncStorage.setItem(`Case.${path}`, serializedState);
	} catch {
		// ignore write errors
	}
}

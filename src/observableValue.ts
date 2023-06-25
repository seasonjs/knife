/*---------------------------------------------------------------------------------------------
 *  Copyright (c) seasonjs. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


import { Event } from './event';
//@ts-ignore
import type { IObservable } from './observable';

/**
 * @deprecated Use {@link IObservable} instead.
 */
export interface IObservableValue<T> {
	onDidChange: Event<T>;
	readonly value: T;
}


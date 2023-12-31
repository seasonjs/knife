/*---------------------------------------------------------------------------------------------
 *  Copyright (c) seasonjs. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


export interface PerformanceMark {
	readonly name: string;
	readonly startTime: number;
}

export function mark(name: string): void;

/**
 * Returns all marks, sorted by `startTime`.
 */
export function getMarks(): PerformanceMark[];

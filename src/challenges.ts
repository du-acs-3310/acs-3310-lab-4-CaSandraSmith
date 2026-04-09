// Lab 4 — Date Utilities
// Implement each function according to the description.

// 1. formatShortDate
// Input: ISO date string
// Output: string in YYYY-MM-DD format or null if invalid
export function formatShortDate(dateString: string): string | null {
  throw new Error('Not implemented')
}

// 2. isBefore
// Input: two date strings
// Output: true if first date is earlier than second, otherwise false
// Return false if either date is invalid
export function isBefore(a: string, b: string): boolean {
  throw new Error('Not implemented')
}

// 3. daysBetween
// Input: two date strings
// Output: number of full days between dates or null if invalid
// Return the number of FULL days between dates (round down)
export function daysBetween(a: string, b: string): number | null {
  throw new Error('Not implemented')
}

// 4. sortPostsByCreatedAt
// Input: array of posts with createdAt property
// Output: new array sorted newest first
// Do not mutate the original array

// Minimal post shape needed for this challenge
type Post = {
  createdAt: string
}

export function sortPostsByCreatedAt(posts: Post[]): Post[] {
  throw new Error('Not implemented')
}

// 5. relativeDayLabel
// Input: target date string and current date string
// Output: 'today', 'yesterday', or '<n> days ago'
// Return null if invalid
export function relativeDayLabel(target: string, today: string): string | null {
  throw new Error('Not implemented')
}

// 6. isValidDateString
// Input: string
// Output: true if valid date, false otherwise
export function isValidDateString(dateString: string): boolean {
  throw new Error('Not implemented')
}

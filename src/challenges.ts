// Lab 4 — Date Utilities
// Implement each function according to the description.

// 1. formatShortDate
// Input: ISO date string
// Output: string in YYYY-MM-DD format or null if invalid
export function formatShortDate(dateString: string): string | null {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return null

  const isoDate = date.toISOString()
  const [shortDate, time] = isoDate.split("T")

  return shortDate
}

// 2. isBefore
// Input: two date strings
// Output: true if first date is earlier than second, otherwise false
// Return false if either date is invalid
export function isBefore(a: string, b: string): boolean {
  const dateA = new Date(a)
  const dateB = new Date(b)

  if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) return false

  return dateA < dateB
}

// 3. daysBetween
// Input: two date strings
// Output: number of full days between dates or null if invalid
// Return the number of FULL days between dates (round down)
export function daysBetween(a: string, b: string): number | null {
    const dateA = new Date(a).getTime()
    const dateB = new Date(b).getTime()
    if (isNaN(dateA) || isNaN(dateB)) return null

    const timeBetween = Math.max(dateA, dateB) - Math.min(dateA, dateB)

    return Math.floor(timeBetween / 86400000)
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
  const copyPosts = [...posts]

  return copyPosts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

// 5. relativeDayLabel
// Input: target date string and current date string
// Output: 'today', 'yesterday', or '<n> days ago'
// Return null if invalid
export function relativeDayLabel(target: string, today: string): string | null {
  const dateA = new Date(target).getTime()
  const dateB = new Date(today).getTime()

  if (isNaN(dateA) || isNaN(dateB)) return null

  const difference = dateB - dateA
  if (difference > 172800000) {
    return `${Math.floor(difference / 86400000)} days ago`
  } else if (difference >= 86400000 ) {
    return "yesterday"
  }
  else return "today"
}

// 6. isValidDateString
// Input: string
// Output: true if valid date, false otherwise
export function isValidDateString(dateString: string): boolean {
  return !isNaN(new Date(dateString).getTime())
}

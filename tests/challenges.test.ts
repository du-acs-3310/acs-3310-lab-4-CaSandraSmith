

import { describe, it, expect, test } from 'vitest'
import {
  formatShortDate,
  isBefore,
  daysBetween,
  sortPostsByCreatedAt,
  relativeDayLabel,
  isValidDateString,
} from '../src/challenges'

type Post = {
  id: string
  title: string
  createdAt: string
}

describe('formatShortDate', () => {
  it('returns YYYY-MM-DD for a valid ISO date string', () => {
    expect(formatShortDate('2026-04-02T19:52:00Z')).toBe('2026-04-02')
  })

  it('returns YYYY-MM-DD for a date-only string', () => {
    expect(formatShortDate('2026-04-02')).toBe('2026-04-02')
  })

  it('returns null for an invalid date string', () => {
    expect(formatShortDate('not-a-date')).toBeNull()
  })
})

describe('isBefore', () => {
  it('returns true when the first date is earlier', () => {
    expect(isBefore('2025-01-01', '2025-12-25')).toBe(true)
  })

  it('returns false when the first date is later', () => {
    expect(isBefore('2025-12-25', '2025-01-01')).toBe(false)
  })

  it('returns false when the dates are the same', () => {
    expect(isBefore('2025-01-01', '2025-01-01')).toBe(false)
  })

  it('returns false if either input is invalid', () => {
    expect(isBefore('bad-date', '2025-01-01')).toBe(false)
    expect(isBefore('2025-01-01', 'bad-date')).toBe(false)
  })
})

describe('daysBetween', () => {
  it('returns the number of full days between two valid dates', () => {
    expect(daysBetween('2025-01-01', '2025-01-10')).toBe(9)
  })

  it('returns 0 when the two dates are the same', () => {
    expect(daysBetween('2025-01-01', '2025-01-01')).toBe(0)
  })

  it('rounds down to full days', () => {
    expect(daysBetween('2025-01-01T12:00:00Z', '2025-01-02T11:00:00Z')).toBe(0)
  })

  it('returns null if either input is invalid', () => {
    expect(daysBetween('bad-date', '2025-01-10')).toBeNull()
    expect(daysBetween('2025-01-01', 'bad-date')).toBeNull()
  })
})

describe('sortPostsByCreatedAt', () => {
  it('returns a new array sorted newest first', () => {
    const posts: Post[] = [
      { id: '1', title: 'Old', createdAt: '2025-01-01T00:00:00Z' },
      { id: '2', title: 'Newest', createdAt: '2025-03-01T00:00:00Z' },
      { id: '3', title: 'Middle', createdAt: '2025-02-01T00:00:00Z' },
    ]

    const sorted = sortPostsByCreatedAt(posts)

    expect(sorted.map(post => post.id)).toEqual(['2', '3', '1'])
  })

  it('does not mutate the original array', () => {
    const posts: Post[] = [
      { id: '1', title: 'Old', createdAt: '2025-01-01T00:00:00Z' },
      { id: '2', title: 'Newest', createdAt: '2025-03-01T00:00:00Z' },
    ]

    const original = [...posts]
    sortPostsByCreatedAt(posts)

    expect(posts).toEqual(original)
  })

  it('returns an empty array when given an empty array', () => {
    expect(sortPostsByCreatedAt([])).toEqual([])
  })
})

describe('relativeDayLabel', () => {
  it('returns today when the dates are the same', () => {
    expect(relativeDayLabel('2026-04-09', '2026-04-09')).toBe('today')
  })

  it('returns yesterday when the target date is one day earlier', () => {
    expect(relativeDayLabel('2026-04-08', '2026-04-09')).toBe('yesterday')
  })

  it('returns N days ago for older dates', () => {
    expect(relativeDayLabel('2026-04-06', '2026-04-09')).toBe('3 days ago')
  })

  it('returns null if either input is invalid', () => {
    expect(relativeDayLabel('bad-date', '2026-04-09')).toBeNull()
    expect(relativeDayLabel('2026-04-09', 'bad-date')).toBeNull()
  })
})

describe('isValidDateString', () => {
  it('returns true for a valid date string', () => {
    expect(isValidDateString('2026-04-02')).toBe(true)
  })

  it('returns true for a valid ISO date-time string', () => {
    expect(isValidDateString('2026-04-02T19:52:00Z')).toBe(true)
  })

  it('returns false for an invalid date string', () => {
    expect(isValidDateString('not-a-date')).toBe(false)
  })

  it('returns false for an impossible date', () => {
    expect(isValidDateString('2026-13-40')).toBe(false)
  })
})
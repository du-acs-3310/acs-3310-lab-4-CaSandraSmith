# ACS 3310 — Lab 4: Date Utilities

## Overview

In this lab, you will solve a set of problems using JavaScript's built-in `Date` object.

The goal is not just to “make dates work.” The goal is to write **small, reusable utility functions** with clear behavior.

This lab connects directly to Lesson 4:

- creating dates
- formatting dates
- comparing dates
- sorting dates
- date arithmetic
- defining clear behavior for tricky inputs

---

## Learning Goals

By the end of this lab you should be able to:

- create and parse dates in JavaScript
- compare dates correctly
- calculate time differences
- sort objects by date
- format dates for display
- design utility functions with clear input/output behavior

---

## Setup

Clone your assignment repo, then run:

```bash
npm install
npm test
```

If setup fails, stop and ask for help.

---

## Files

You will work mainly in:

```text
src/challenges.ts
```

Your tests are in:

```text
tests/challenges.test.ts
```

Read the function comments carefully before you start coding.

---

## Your Task

Implement the date utility functions in `src/challenges.ts`.

Each function should match its documentation and pass the tests.

Focus on:

- clear return values
- correct date behavior
- readable code
- edge cases

---

## Challenges

### 1. `formatShortDate`

Write a function that takes a date string and returns a short display date.

Example:

```ts
formatShortDate('2026-04-02T19:52:00Z')
// => '2026-04-02'
```

Requirements:
- input is a date string
- return a string in `YYYY-MM-DD` format
- if the input is invalid, return `null`

Concepts:
- creating dates
- formatting dates
- invalid dates

---

### 2. `isBefore`

Write a function that takes two date strings and returns whether the first date is earlier than the second.

Example:

```ts
isBefore('2025-01-01', '2025-12-25')
// => true
```

Requirements:
- return `true` if the first date is earlier
- return `false` otherwise
- if either input is invalid, return `false`

Concepts:
- comparing dates
- invalid dates

---

### 3. `daysBetween`

Write a function that returns the number of full days between two dates.

Example:

```ts
daysBetween('2025-01-01', '2025-01-10')
// => 9
```

Requirements:
- return a number
- return the number of **full days (round down)** between the two dates
- use date subtraction
- if either input is invalid, return `null`

Concepts:
- date arithmetic
- milliseconds to days
- rounding decisions

---

### 4. `sortPostsByCreatedAt`

Write a function that sorts an array of posts by `createdAt`.

Example post shape:

```ts
{
  id: '1',
  title: 'Hello',
  createdAt: '2026-04-02T19:52:00Z'
}
```
// You may assume each post has at least a valid createdAt string

Requirements:
- input is an array of posts
- return a **new array**
- sort **newest first**
- do not mutate the original array

Concepts:
- sorting dates
- sorting objects
- pure functions

---

### 5. `relativeDayLabel`

Write a function that returns a simple label for a date relative to another date.

Examples:

```ts
relativeDayLabel('2026-04-09', '2026-04-09')
// => 'today'

relativeDayLabel('2026-04-08', '2026-04-09')
// => 'yesterday'

relativeDayLabel('2026-04-06', '2026-04-09')
// => '3 days ago'
```

Requirements:
- input is two date strings: the target date and a reference "today" date
- assume the target date is **not in the future**
- return:
  - `'today'`
  - `'yesterday'`
  - `'<n> days ago'`
- if either input is invalid, return `null`

Concepts:
- date arithmetic
- relative time labels
- clear conditional logic

---

### 6. `isValidDateString`

Write a function that returns whether a string can be parsed into a valid date.

Example:

```ts
isValidDateString('2026-04-02')
// => true

isValidDateString('not-a-date')
// => false
```

Requirements:
- return `true` or `false`
- do not throw errors
- a valid date must be parseable by `new Date(...)` and not result in `Invalid Date`

Concepts:
- invalid dates
- defensive programming

---

## Suggested Workflow

For each function:

1. Read the function comment
2. Read the matching tests
3. Write the implementation
4. Run tests
5. Fix edge cases
6. Run tests again

```bash
npm test
```

---

## Hints

- `new Date(...)` can create a date from a string
- invalid dates exist
- subtracting two `Date` objects gives a number in milliseconds
- `Date.now()` returns a timestamp number
- sorting dates usually means converting them to numbers
- `toISOString()` can help with formatting
- `new Date('bad')` creates an invalid date object — check with `isNaN(date.getTime())`

---

## Common Pitfalls

- forgetting that invalid dates exist
- assuming all date strings are valid
- forgetting to check for `Invalid Date`
- mutating the original array when sorting
- mixing up local time and UTC behavior
- returning the wrong type (`Date` instead of `string`, for example)
- forgetting to handle edge cases

---

## Definition of Done

You are finished when:

- all functions are implemented
- all tests pass
- your code is clear and readable
- your solution matches the documented behavior
- your work is pushed to GitHub

---

## Submission

Submit by pushing your work to GitHub.

```bash
git add .
git commit -m "complete lab 4"
git push
```

---

## Final Reminder

Dates are tricky because they combine:

- values
- formatting
- comparisons
- assumptions

Your job is to make those assumptions clear in code.
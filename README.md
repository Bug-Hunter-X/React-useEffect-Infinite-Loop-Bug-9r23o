# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by an incorrectly used `useEffect` hook.  The `useEffect` hook, while powerful, can easily lead to unintended side effects if not used carefully.  This example showcases the issue and provides a solution.

## Bug Description

The `bug.js` file contains a component that uses `useEffect` to increment a counter.  However, the effect modifies the state (`count`) it depends on, creating an infinite render loop.  The console will show a rapidly increasing counter and potentially freeze your browser.

## Solution

The `bugSolution.js` file provides the corrected code.  By correctly managing the dependency array (`[count]`), the `useEffect` hook now only runs when the `count` value changes.  The infinite loop is avoided, and the component behaves as expected.
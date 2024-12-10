# Expo Linking.getInitialURL() Inconsistent Null Return

This repository demonstrates a bug encountered with Expo's `Linking.getInitialURL()` API.  The method inconsistently returns `null`, even when the app is launched via a deep link. This makes it challenging to implement reliable deep link handling within an Expo application.

## Problem Description

The `Linking.getInitialURL()` function, intended to retrieve the initial URL used to launch the application, sometimes returns `null` unexpectedly. This occurs even when a deep link is actively used to launch the app. The behavior is intermittent and difficult to reproduce consistently.

## Steps to Reproduce

1. Clone this repository.
2. Run the app using `expo start`.
3. Launch the application via a deep link (e.g., `myapp://mypath`).
4. Observe that `Linking.getInitialURL()` may or may not return the expected deep link URL; it may return `null` instead.

## Potential Causes and Solution

The root cause of this intermittent behavior remains unclear, however, the solution presented below provides a more reliable approach to handling deep links.

## Solution

A workaround involves checking `Linking.getInitialURL()` multiple times, delaying each attempt briefly, to give time for the URL to resolve.  See `bugSolution.js` for an implementation of this approach.
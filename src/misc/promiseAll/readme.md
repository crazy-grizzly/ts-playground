My own attempt to implement the native `Promise.all` method

From what I can think of there are three approaches:
- Using `reduce` but it doesn't bring _"parallel"_ behaviour
- Using `EventEmitter`, but it's NodeJS-only solution
- Using self-executed anonymous functions/old `.then().catch()` approach
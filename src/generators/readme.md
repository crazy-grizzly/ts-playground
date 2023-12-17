JavaScript generators are a powerful feature introduced in ES6 (ECMAScript 2015) that provide a way to work with sequences of values over time, allowing you to define an iterative algorithm by writing a single function whose execution is not continuous. Here are some key aspects of JavaScript generators:

1. **Generator Functions**: A generator is defined by a function followed by an asterisk `function* () {}` or using the concise form in an object method `*methodName() {}`. This syntax marks it as a generator.

2. **`yield` Keyword**: Inside the generator function, you use the `yield` keyword to pause the function’s execution and return a value. The function execution can later be resumed from the same point.

3. **Iteration Protocol**: Generators are iterable, meaning they can be used in a `for...of` loop. Each call to the generator's `next()` method returns an object with two properties: `value`, which is the yielded value, and `done`, which is a boolean indicating whether the generator has finished producing values.

4. **Lazy Evaluation**: Generators compute their yielded values on demand, which allows them to represent sequences that are expensive to compute, or even infinite sequences.

5. **Use Cases**: They are particularly useful for managing asynchronous operations in a synchronous manner, especially before the widespread adoption of async/await syntax. Other use cases include handling large or infinite datasets, implementing custom iterators, and managing complex control flows in applications.

6. **Example**:
    ```javascript
    function* numberGenerator() {
        let number = 1;
        while (true) {
            yield number;
            number++;
        }
    }

    const gen = numberGenerator();
    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    ```

Generators offer a unique way to work with data streams and sequences, making code that deals with such structures more readable and maintainable. They are a fundamental part of modern JavaScript and are widely used in various applications, particularly those involving asynchronous programming patterns.
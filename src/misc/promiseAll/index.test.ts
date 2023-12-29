import { promiseAll } from '.';

describe('promiseAll', () => {
  it('should work properly without errors', async () => {

    const result = promiseAll<number>(
      [
        Promise.resolve(5),
        new Promise((resolve) => {
          setTimeout(
            () => {
              resolve(1);
            },
            1000,
          );
        }),
        Promise.resolve(3),
      ],
    );

    await expect(result).resolves.toEqual([5, 1, 3]);
  });

  it('should work properly with errors', async () => {
    const result = promiseAll<number>(
      [
        Promise.resolve(5),
        new Promise((resolve, reject) => {
          setTimeout(
            () => {
              reject(new Error('Test error'));
            },
            1000,
          );
        }),
        Promise.resolve(3),
      ],
    );

    await expect(result).rejects.toThrow('Test error');
  });
});

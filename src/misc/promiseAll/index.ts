export const promiseAll = <T>(promises: Promise<T>[]): Promise<T[]> => new Promise<T[]>((resolve, reject) => {
	const results: T[] = [];
	let leftToResolve = promises.length;

	for (let i = 0; i < promises.length; i++) {
		(
			async () => {
				try {
					const result = await promises[i];

					results[i] = result;
					leftToResolve--;

					if (leftToResolve === 0) {
						resolve(results);
					}

				} catch (error) {
					reject(error);
				}
			}
		)();
	}
});
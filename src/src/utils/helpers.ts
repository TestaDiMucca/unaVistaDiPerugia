type Resolvable<R> = R | PromiseLike<R>;

export const mapSeries = async <T, R>(
  items: readonly T[],
  callback: (item: T, index: number) => Resolvable<R>
) => {
  const results: R[] = [];
  let idx = 0;

  for (const item of items) {
    results.push(await callback(item, idx));
    idx++;
  }

  return results;
};

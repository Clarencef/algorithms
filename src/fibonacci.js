function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
};

function fibMemo(index, cache = []) {
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      console.log(cache);
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
};

export {
  fibonacci,
  fibMemo
};

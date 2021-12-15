function insertion_sort(arr) {
  for (index = 1; index < arr.length; index++) {
    i = index - 1;
    currentEl = arr[index];
    while (i >= 0) {
      if (currentEl < arr[i]) {
        arr[i + 1] = arr[i];
        arr[i] = currentEl;
        i--;
      } else {
        break;
      }
    }
  }
  return arr;
}
console.log(insertion_sort([3, 0, 2, 5, -1, 4, 1]));

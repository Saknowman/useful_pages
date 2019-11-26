function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function random_sort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[r];
        arr[r] = tmp;
    }
}
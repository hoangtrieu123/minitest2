let array
let a = 0

function baiTap1() {
    let n = +prompt("Nhập vào số phần tử của mảng: ")
    array = new Array(n)
    for (let i = 0; i < array.length; i++) {
        array[i] = prompt("Nhập vào phần tử thứ " + (i + 1))
    }
    for (let i = 0; i < n; i++) {
        if (array[i] % 2 === 0)
            a++
    }
    document.write(a)
}
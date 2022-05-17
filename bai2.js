let array1
function baiTap2() {
    let n = +prompt("Nhập vào số phần tử của mảng: ")
    array1 = new Array(n)
    for (let i = 0; i < array1.length; i++) {
        array1[i] = prompt("Nhập vào phần tử thứ " + (i + 1))
    }
}
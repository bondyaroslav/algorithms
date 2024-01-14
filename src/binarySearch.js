const array = []
for (let i = 1; i <= 1000; i++) {
    array.push(i)
}

let count = null

const binarySearch = (findValue) => {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1
    while (found === false && start <= end) {
        count = count + 1
        middle = Math.floor((start + end) / 2)
        if (array[middle] === findValue) {
            found = true
            position = middle
            return position
        }
        if (findValue < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

console.log(binarySearch(50))
console.log("count = " + count)
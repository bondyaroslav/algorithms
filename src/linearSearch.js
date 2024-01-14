const array = [2, 34, 3, 21, 3, 4, 675, 45, 33, 34, 10]

let count = null
const linearSearch = (searchParameter) => {
    for (let i = 0; i < array.length; i++) {
        count = count + 1
        if (array[i] === searchParameter) {
            return array[i]
        }
    }
}

console.log(linearSearch(45))
console.log("count = " + count)
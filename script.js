let arr1 =
    [
    [1,2,3],
    [1,2,3],
    [1,2,3]
    ]


function rotateMatrix(arr) {

    let row
    let currentLength
    for (let i = 0; i < arr.length; i++) {

        row = []

        for (let j = 0; j < arr[i].length; j++) {
            row.push(arr[j][i])
        }
        arr[i].push(...row)
        currentLength = (arr[i].length/2)
    }

    for (let i = 0; i < arr.length; i++) {
        while (arr[i].length > currentLength) {
            arr[i].shift()
        }
    }

    return arr

}


console.log(rotateMatrix(arr1))




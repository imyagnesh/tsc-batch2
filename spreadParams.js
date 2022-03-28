
const add = (...data) => {
    console.log(data);
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        result += element;
    }
    return result;
    // return a + b + c + d;
}

console.log(add(1,2));
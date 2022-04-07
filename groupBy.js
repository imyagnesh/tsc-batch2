const users = [
    {
        name: "yagnesh",
        age: 33,
        gender: "male"
    },
    {
        name: "virat",
        age: 30,
        gender: "male"
    },
    {
        name: "taimur",
        age: 08,
        gender: "male"
    },
    {
        name: "rohit",
        age: 32,
        gender: "male"
    },
    {
        name: "dipeeka",
        age: 26,
        gender: "female"
    },
    {
        name: "alia",
        age: 18,
        gender: "female"
    },
    {
        name: "amitabh",
        age: 64,
        gender: "female"
    },
    {
        name: "priyanka",
        age: 38,
        gender: "female"
    }
]

{
 "00-09": [],   
 "10-19": [],
 "20-29": [],
 "30-39": [],
 "60-69": []
}


// {}['c']

const groupByGender = users.reduce((p ,c) => {
    const key = c.gender;
    if(p[key] === undefined) {
        p[key] = []
    }
    p[key].push(c);
    return p;
}, {});

console.log(groupByGender.female);
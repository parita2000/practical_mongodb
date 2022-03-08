
//1. Script to create 1000 users with random profiles NAME, AGE, XP, LEVEL
const getRandomCharacters = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = [];
for (let index = 0; index < 1000; index++) {
    arr.push({
        Name: getRandomCharacters(5),
        age: getRandomValue(1, 100),
        XP: getRandomValue(0, 800),
        Level: getRandomValue(1, 9)
    })

}
// db.collection.insertMany(arrData);
// console.log("Data", arr);

const array = arr.map((item) => {
    item.score = item.XP / item.Level
    return item
})
console.log(array)

//2. Write aggregation query to print top 9 players sorted by there SCORE and self user as 10th player with his rank .

db.users.aggregate(
    [
        { $sort: { score: -1 } },
        { $limit: 9 }
    ]
)
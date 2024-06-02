const students = ["Omer", "Jane", "Biden", "Jill"];

const findJ = students.find((student) => {
    return student[0].includes("J");
})
console.log(findJ);

const someJ = students.some((student) => {
    return student[0].includes("J");
})
console.log(someJ);

const everyJ = students.every((student) => {
    return student[0].includes("J");
})
console.log(everyJ);
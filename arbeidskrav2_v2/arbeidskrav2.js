//Arbeidskrav 2 .js fil

const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]

//Beregne antall studenter
document.getElementById("studentCount").innerHTML = students.length

//Beregne totalsummen av karakterene
let totalGrade = 0;
    for (const student of students){
            totalGrade = totalGrade + Number(student.grade);

    }
//Beregne gjennomsnitt av karakter delt på antall studenter
let averageGrade = totalGrade / students.length;

//Rounded grade
let roundedGrade = Math.ceil(averageGrade);
    
/*Konvertering av tallkarakter til bokstavkarakter
        if(roundedGrade === 6)
            document.getElementById(grades[0].letter).innerHTML = "A";
        if(roundedGrade === 5)
            document.getElementById(grades[1].letter).innerHTML = "B";
        if(roundedGrade === 4)
            document.getElementById(grades[2].letter).innerHTML = "C";
        if(roundedGrade === 3)
            document.getElementById(grades[3].letter).innerHTML = "D";
        if(roundedGrade === 2)
            document.getElementById(grades[4].letter).innerHTML = "E";
        if(roundedGrade === 1)
            document.getElementById(grades[5].letter).innerHTML = "F";

 Kommentert ut da det ikke fungerte - lagret for dokumentasjon*/


//Forsøk 2 konvertering til bokstavkarakterer
//Print avgGrade
let bokstavkarakter
if(roundedGrade === 6) {
    bokstavkarakter = "A"
}else if (roundedGrade === 5) {
    bokstavkarakter = "B"
}else if (roundedGrade === 4) {
    bokstavkarakter = "C"
}else if (roundedGrade === 3) {
    bokstavkarakter = "D"
}else if (roundedGrade === 2) {
    bokstavkarakter = "E"
}else if (roundedGrade === 1) {
    bokstavkarakter = "F"
}
document.getElementById("averageGrade").innerHTML = bokstavkarakter

//Telle antallet av hver karakter
let gjennomsnittskarakter = ""
const gradeAStudents = students.filter(a => a.grade === "6")
const gradeBStudents = students.filter(b => b.grade === "5")
const gradeCStudents = students.filter(c => c.grade === "4")
const gradeDStudents = students.filter(d => d.grade === "3")
const gradeEStudents = students.filter(e => e.grade === "2")
const gradeFStudents = students.filter(f => f.grade === "1")
    
//Print to grades
document.getElementById("gradeA").innerHTML = gradeAStudents.length
document.getElementById("gradeB").innerHTML = gradeBStudents.length
document.getElementById("gradeC").innerHTML = gradeCStudents.length
document.getElementById("gradeD").innerHTML = gradeDStudents.length
document.getElementById("gradeE").innerHTML = gradeEStudents.length
document.getElementById("gradeF").innerHTML = gradeFStudents.length


//Gjennomsnittsalder
let gjennomsnittsAlder =""
const avgAge = students.map(a => a.age)
const utregnetAlder = avgAge / students.length
document.getElementById("averageAge").innerHTML = utregnetAlder
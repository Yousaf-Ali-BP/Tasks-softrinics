const inputName = "   Rahul Sharma   ";
const sentence = "Learning Python is highly rewarding and fun!";
const textFile = "assignment_report.pdf";
const greeting = "Hello Developers!";
const rawTags = "HTML,CSS,JavaScript,React";

name = inputName.trim()
console.log(name)
console.log(`Sentence includes the word Python : `, sentence.includes("Python"))
console.log("File name starts with the prefix assignment_ : ", textFile.startsWith("assignment_"))
console.log("File name ends with the extension .pdf : ", textFile.endsWith(".pdf"))
console.log("Developers on greeting starts on index number :", greeting.indexOf("Developers"))
const replacedSentence = sentence.replace("Python", "Javascript")
console.log(replacedSentence)
const rawTagArray = rawTags.split(",")
console.log(rawTagArray)
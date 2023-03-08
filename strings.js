var y ="extravaganza";
console.log(y[8]);
console.log(y[9]);
console.log(y[10]);
console.log(y[11]);
//const food = "The quick fox jumped over the lazy dog"
const t ="eat";
const food=`the quick fox ${t} over the lazy dog`;
console.log(food)

//Count how many times the following string appears in the string variable:
//1. "the"
//2."brown"
const story= "The quick brown fox jumps over the lazy dog"
let count=(story.match(/the/g)||[]).length;
console.log(count);
let count2=(story.match(/brown/g)||[]).length;
console.log(count2);

//Using JavaScript, find the following words from the following strings:
//1. "are"
//2. "sitting"
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell"
const library=string1.search("are");
console.log(library);
const string="The child was sitting on the table before it fell"
const child=string2.search("sitting");
console.log(child);

// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "UndERneath"
// 3. Title case "A wonderful world"
const huge="wonderful"
const huger=huge.toUpperCase()
console.log(huger)
const less="amazing"
const lesser=less.toLowerCase()
console.assert(lesser)
const tiny="BEneath"
const tiner=tiny.toLowerCase()
console.log(tiner)
const title="A wonderful world"
const title2=title.toLocaleUpperCase()
console.log(title2)



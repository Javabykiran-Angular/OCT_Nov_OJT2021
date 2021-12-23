//Json Object => java script Object Notation 
//it store value is in key & value format
var jsonObj = {
    fname: "Sumit",
    id: 9,
    "lname": "Raokhande"
};
// It has 2 way to parse a data
// 1 using dot operator
// 2 using square operator
//1 using dot operator
// console.log(`
//     First Name :: ${jsonObj.fname}
//     Last Name  :: ${jsonObj.lname}
//     ID         :: ${jsonObj.id}
// `)
// 2 using square operator
console.log("\n------------Using Square Operator-----------\n    First Name :: " + jsonObj["fname"] + "\n    Last Name  :: " + jsonObj["lname"] + "\n    ID         :: " + jsonObj["id"] + "\n");

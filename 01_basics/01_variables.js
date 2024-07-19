const accountId=144553
let accountEmail="sumant@google.com"
var accountPassword = "1234"
accountCity = "Fbd"
let accountState

//accountId=2 //not allowed

accountEmail="gc@gc.com"
accountPassword="232323"
accountCity="delhi"

console.log(accountId);

// Prefer not to use var
// because of issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
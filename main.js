//Online status
/*Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.*/
const onlineStatus = ['mockIng99', 'J0eyPunch', 'glassedFer'];
let p = onlineStatus.length - 2
console.log(`${onlineStatus[0]}, ${onlineStatus[1]} and ${p} more online`)

//const onlineStatus2 = ['mockIng99', 'J0eyPunch', 'glassedFer', 'mockIng123', 'J0eyPunchwf1123', 'glassedFer12344' ];
const onlineStatus2 = [];
let p2 = onlineStatus2.length - 2
if (onlineStatus2.length == 0){
    console.log("No one is online")
}else{
    console.log(`${onlineStatus2[0]}, ${onlineStatus2[1]} and ${p2} more online`)
}

function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let lowerStr= s1.toLowerCase(s1);
	let lowerSubs= s2.toLowerCase(s2);
  let firstIdx= lowerStr.indexOf(lowerSubs);
	return firstIdx;
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

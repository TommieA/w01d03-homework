

// 	1.

//	for (let i = 1; i <= 20; i++) {
//		console.log(i);
//	}

// 	2.

//	for (let i = 1; i <= 200; i++) {
//		if (i % 2 === 0) {
//			console.log(i);
//		};
//	};

/*	3.
	let response = ["... human, why are you taking pictures of me?",
			   	  "... Why does the red dot always get away?",
				  "... the catniip made me do it..."]
	for (let i = 0; i <= 20; i++) {
		console.log("Love me, Pet me! HSSSSSS!"	);
		if (i % 2 == 0) {console.log(response[Math.floor(Math.random() * 3)])};	
	};



for(let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz')
	} else {
	if ( i % 3 === 0) {
		console.log('Fizz')
	} else { if (i % 5 === 0) {
		console.log('Buzz')
	} else {
	console.log(i)	
	};
	};
	};
}; 

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad[0] = "Gameboy"
daniel[1] = daniel[1]++;
ryan[2] = "Gotham City"
reuben.pop()
reuben.push('Chicago')
jim.pop(); jim.push("Denver", "Chicago", "New York")
jim.splice(2,1)
console.log(jim)


const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for(i = 0; i < ninjaTurtles.length; i++) {
	ninjaTurtles[i] = ninjaTurtles[i].toUpperCase()		
};

console.log(ninjaTurtles);

*/

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//	let kristynsShoe = kristynsCloset.shift();
//	thomsCloset[2].push(kristynsShoe);

//	let kristynWearing = (`Krystyns wearing her ${kristynsCloset[2]}, ${kristynsCloset[3]} and ${kristynsCloset[4]}.`); 
//	let thomsWearing = (`Thoms wearing his ${thomsCloset[0] [1]}, ${thomsCloset[1] [0]} and ${thomsCloset[2] [2]}`)	
//	console.log(kristynWearing);
//	console.log(thomsWearing);

//	for(let i = 0; i <= kristynsCloset.length; i++)  {
//			console.log(`WHIRR: Now washing ${kristynsCloset[i]}.`)
//		}

console.log(`Thom has ${thomsCloset[0].length} shirts, ${thomsCloset[1].length} pants, and ${thomsCloset[2].length} accessories`)





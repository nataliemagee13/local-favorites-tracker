// Store today's date.
let today = new Date().toLocaleDateString();

// Set the highest possible rating.
const maxRating = 5;

// Create one favorite place.
const myFavorite = {
	name: "Sunrise Coffee",
	category: "coffee",
	rating: 5,
	notes: "A cozy place with great coffee.",
	dateAdded: today
};

console.log(today);
console.log(myFavorite);

console.log(myFavorite.name);
console.log(myFavorite.category);
console.log(myFavorite.rating);
console.log(myFavorite.notes);
console.log(myFavorite.dateAdded);

console.log(typeof myFavorite.name);
console.log(typeof myFavorite.category);
console.log(typeof myFavorite.rating);
console.log(typeof myFavorite.notes);
console.log(typeof myFavorite.dateAdded);

console.log(myFavorite.name + " - " + myFavorite.rating + "/" + maxRating + " stars");

console.log(myFavorite.name + " - " + myFavorite.rating + "/5");
console.log("⭐".repeat(myFavorite.rating) + " " + myFavorite.name);

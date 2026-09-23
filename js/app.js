// Store today's date.
let today = new Date().toLocaleDateString();

// Set the highest possible rating.
const maxRating = 5;

// Create one favorite place.
const myFavorite = {
	name: "Sunrise Coffee",
	category: "coffee",
	rating: 5,
	favoriteItem: "Iced latte",
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

// my second favorite is a food spot
const secondFavorite = {
	name: "Maple Street Diner",
	category: "food",
	rating: 4,
	favoriteItem: "Pancakes",
	notes: "Good breakfast and big portions.",
	dateAdded: today
};

console.log(secondFavorite);
console.log(typeof secondFavorite.name);
console.log(typeof secondFavorite.category);
console.log(typeof secondFavorite.rating);
console.log(typeof secondFavorite.favoriteItem);
console.log(typeof secondFavorite.notes);
console.log(typeof secondFavorite.dateAdded);

// let can change when I need a new rating
let currentRating = myFavorite.rating;
console.log(currentRating);
currentRating = 4;
console.log(currentRating);

// maxRating = 4; this would cause an error because maxRating is a const

console.log("⭐".repeat(myFavorite.rating) + " " + myFavorite.name + " (" + myFavorite.category + ") - try the " + myFavorite.favoriteItem);
console.log("⭐".repeat(secondFavorite.rating) + " " + secondFavorite.name + " (" + secondFavorite.category + ") - try the " + secondFavorite.favoriteItem);

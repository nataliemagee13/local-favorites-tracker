// ---------- tracker setup ----------
let favorites = []; // all my saved spots live here

const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');
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
// ---------- LAB 13 ----------

// functions: write it once, use it whenever
function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}

greetFavorite('Starbucks', 5);
greetFavorite(myFavorite.name, myFavorite.rating); // using my object from lab 12

// DOM: grabbing the place name input from my form
const nameInput = document.getElementById('name');
console.log(nameInput.value); // empty on page load since nothing's typed yet

// event listener: runs when someone hits Add Favorite
const practiceForm = document.getElementById('add-favorite-form');

function handleSubmit(event) {
    event.preventDefault(); // stops the page from reloading
    console.log('You typed: ' + nameInput.value);
}
// ---------- LAB 13.5 ----------

// runs when someone adds a new spot
function addFavorite(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;

    // stops it if the name is just spaces or no category is picked
    if (!name || !category) {
        alert('Please fill in name and category!');
        return;
    }

    const newFavorite = {
        name: name,
        category: category,
        rating: parseInt(document.getElementById('rating').value), // makes "5" into 5
        favoriteItem: document.getElementById('favorite-item').value.trim(),
        notes: document.getElementById('notes').value.trim(),
        dateAdded: new Date().toLocaleDateString()
    };

    favorites.push(newFavorite);
    form.reset(); // clears the form for the next one
    displayFavorites();
}

form.addEventListener('submit', addFavorite);

// redraws the whole list so the page matches the array
function displayFavorites() {
    favoritesList.innerHTML = ''; // start fresh so nothing doubles up

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message">No spots saved yet! Add your first favorite place above so you never lose track of it.</p>';
        return;
    }

    favorites.forEach(function(favorite) {
        const stars = '⭐'.repeat(favorite.rating);
        favoritesList.innerHTML += `
            <div class="favorite-card">
                <h3>${favorite.name}</h3>
                <span class="favorite-category">${favorite.category}</span>
                <div class="favorite-rating">${stars} (${favorite.rating}/5)</div>
                <p class="favorite-notes">${favorite.notes}</p>
                <p class="favorite-item">Go-to: ${favorite.favoriteItem}</p>
                <p class="favorite-date">Added: ${favorite.dateAdded}</p>
            </div>`;
    });
}

// show the list (or empty message) as soon as the page loads
displayFavorites();
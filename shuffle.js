const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// theres one way of shuffling using this method
cards.sort(() => Math.random() - 0.5);
// this will shuffle the cards array in place but its not a good way to shuffle because its not memory efficient and
// it can be biased because of the way sort works, so we will use another method called fisher yates shuffle

shuffle(cards);

console.log(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1)); // here we use floor to round off
    }
}
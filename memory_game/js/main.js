console.log("Up and running!");
//Define 'cards' Array
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var matchesMade = 0;
var noMatch = 0;

var checkForMatch = function() {
if (cardsInPlay.length == 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
	//console.log("You found a match!");
	alert("You found a match!");
	matchesMade++;
	document.getElementById('wins').innerHTML= matchesMade;
		} else {
		//console.log("Sorry, try again");
		alert("Sorry, try again");
		noMatch++;
		document.getElementById('losses').innerHTML= noMatch;
		}
	}
};
//flipCard
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
	cardsInPlay.push(cards[cardId].rank);
	
	checkForMatch();
	
	this.setAttribute('src', cards[cardId].rank);
	this.setAttribute('src' , cards[cardId].cardImage);
		if (cardsInPlay.length === 1) {
		checkForMatch();
		}
};


//Create the game board
function createBoard () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		console.log(cardElement);
		document.getElementById('game-board').appendChild(cardElement);
		}	
}; 
createBoard();
resetBoard = function(){
	console.log('user reset the board');
	for (var i=0; i<cards.length; i++){
		document.getElementsByTagName('img')[i].setAttribute('src', "images/back.png");
		cardsInPlay=[];
	}
};
var resetButtonActivate = function(){
		var resetButton = document.getElementById('resetbutton');
		resetButton.addEventListener('click', resetBoard);
		console.log('reset button is active');
	}

resetButtonActivate();
walk(document.body); 

var highlightedWord;
var foodwords;
initializeData();

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	/*if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}*/

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bFacebook\b/g, "Google");
  v = v.replace(/\bfacebook\b/g, "google");

	textNode.nodeValue = v;
}

document.addEventListener('mouseup', function() {
	highlightedWord = window.getSelection().toString()
	console.log(highlightedWord)
	if(isInDict(highlightedWord)) {
		// do something
	}
})

// check if the word is in fooddict
function isInDict(word) {
	for(i in foodwords.foods) {
		if(word == mydata.foods[i]) {
			return true;
		}
	}
	return false;
}

function initializeData() {
	foodwords = JSON.parse({"foods": ["alphabet",
	"apple",
	"apricot",
	"asparagus",
	"bacon",
	"bagel",
	"banana",
	"barley",
	"beans",
	"beef",
	"beer",
	"beet",
	"biscuits",
	"blackberry",
	"blueberry",
	"bows",
	"brandy",
	"bread",
	"broccoli",
	"cabbage",
	"cake",
	"candy",
	"cappelletti",
	"carrot",
	"catsup",
	"cauliflower",
	"celery",
	"cereal",
	"cheese",
	"cherry",
	"chicken",
	"chips",
	"chop",
	"cocktail",
	"cocoa",
	"coffee",
	"coke",
	"cookie",
	"cookies",
	"corn",
	"crackers",
	"cranberry",
	"cream",
	"croissant",
	"cucumber",
	"currant",
	"dog",
	"donut",
	"doughnuts",
	"drink",
	"egg",
	"eggplant",
	"fedelini",
	"fig",
	"fish",
	"fruit",
	"grape",
	"grapefruit",
	"grapes",
	"ham",
	"hamburger",
	"heart",
	"juice",
	"kale",
	"ketchup",
	"kidney",
	"kiwi",
	"kumquat",
	"lasagna",
	"leg",
	"lemon",
	"lemonade",
	"lettuce",
	"lime",
	"liquor",
	"macaroni",
	"mayonnaise",
	"melon",
	"milk",
	"milkshake",
	"millet",
	"mode",
	"muffin",
	"muffins",
	"mustard",
	"mutton",
	"nectarine",
	"noodles",
	"oats",
	"okra",
	"olive",
	"onion",
	"orange",
	"pancakes",
	"pasta",
	"peach",
	"peanuts",
	"pear",
	"peas",
	"pepper",
	"persimmon",
	"pickle",
	"pie",
	"pineapple",
	"plum",
	"pomegranate",
	"pork",
	"potato",
	"prune",
	"pudding",
	"pumpkins",
	"punch",
	"radish",
	"raspberry",
	"ravioli",
	"relish",
	"rice",
	"roast",
	"roll",
	"rolls",
	"rye",
	"salad",
	"salt",
	"sandwich",
	"sauce",
	"sausage",
	"shells",
	"shrimp",
	"soda",
	"spaghetti",
	"spinach",
	"sprouts",
	"stars",
	"steak",
	"sticks",
	"strawberry",
	"tangerine",
	"tea",
	"toast",
	"tomatoes",
	"tongue",
	"tortellini",
	"turkey",
	"turnips",
	"turrets",
	"veal",
	"venison",
	"vermicelli",
	"waffles",
	"water",
	"watermelon",
	"wheat",
	"wheels",
	"whiskey",
	"wine"]}
	); 
}
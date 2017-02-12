walk(document.body); 

var highlightedWord;
var mydata = JSON.parse(fooddict); 

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
	for(i in mydata.foods) {
		if(word == mydata.foods[i]) {
			return true;
		}
	}
	return false;
}
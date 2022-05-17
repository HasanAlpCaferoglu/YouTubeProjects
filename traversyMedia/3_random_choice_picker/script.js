const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// for automatically focus on the text area;
textarea.focus();

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value) // takes whatever we type in textarea

    // checking if user hit the enter button
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value=''; // clears the input value
        }, 10)
        randomSelect(); // randomSelect function will be called when enter is hit. To wait a couple of ms setTimeout is used.
    }

});

function createTags(input) {
    //console.log(input);
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    /****tags is an array whose elements represents choices which are typed in between commas****/

    /****We don't want spaces and empty strings to be taken into account so filter(tag => tag.trim() !== '') is added. This allow us not to take empty strings. In other words, filter function will return if a string is not empty. For example, if I type double comma without any string in it, thanks to this function I will not take it as a choice ****/

    /****The filter() method creates a new array with all elements that pass the test implemented by the provided function. ****/



    /****The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).****/

    /****The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).****/
    
    /****map(tag => tag.trim()) takes the all elements of the tags array and return a new array whose elements are removed from whitespaces****/

   // console.log(tags);

   tagsEl.innerHTML = ''; // clearing inside of tags element.

   tags.forEach(tag => {
       const tagEl = document.createElement('span'); //creating a span element
       tagEl.classList.add('tag') // adding class to the genereted element 
       tagEl.innerText = tag; // setting the inside of the genereted element
       tagsEl.appendChild(tagEl); // genereted elements will be added as a child of tags element

       /****The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.A DOMTokenList representing the contents of the element's class attribute. If the class attribute is not set or empty, it returns an empty DOMTokenList, i.e. a DOMTokenList with the length property equal to 0.Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.****/
   });
};

function randomSelect() {
    const times =30; // times variable is used for indicating the number of times highlight the random choices bofore selection.

    //highlighting elements and removing highlights of choices will be performed repeatedly so setInterval will be used.
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100)


    // part below stops the highlighting and unhighlighting repetion and then select final random choice
    setTimeout(() => {
        clearInterval(interval); //clears the setinterval

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag)
        }, 100)
    }, times*100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag'); // takes all tags, i.e., takes all elements wich has tag class 
    return tags[Math.floor(Math.random()*tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
1.getElementById only defines Id
getElementsByClassName defines class
querySelector select the first valid css element
querySelectorAll select multiple valid css element

2.To create and insert a new element into the DOM,you have to use document.createElement() and using parentElement.appendChild().

3.Event bobbling is a process where child element bubbles up in the DOM tree

4.Event delegation is a system where I can attach one eventListener but works for all child element

5.preventDefault() stops the browser's default action for an event
  stopPropagation() stops the event     
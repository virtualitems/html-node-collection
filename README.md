# HTML Node Collection

The HTMLNodeCollection is a JavaScript utility that allows you to create a cache of HTML elements selected by a given CSS selector.

It provides various methods to manipulate and work with the cached HTML elements, including:
- ƒ every
- ƒ first
- ƒ forEach
- ƒ get
- ƒ isEmpty
- ƒ last
- ƒ map
- ƒ querySelector
- ƒ querySelectorAll
- ƒ remove
- ƒ some

Remember that the beauty is that the nodes may not be part of the same node tree.

<br>

## Installation

To use the HTMLNodeCollection, follow these steps:

1. Download the JavaScript code file containing the `HTMLNodeCollection` and `collectHTML` functions.
2. Include the JavaScript file in your HTML document using the `<script>` tag:

```html
<script src="path/to/htmlnodecollection.js"></script>
```

Make sure to replace `"path/to/htmlnodecollection.js"` with the actual path to the downloaded JavaScript file.

<br>

## Usage

Once the HTMLNodeCollection is installed, you can create an instance of the collection by calling the `collectHTML` function and passing a CSS selector as an argument. The function will return an instance of the `HTMLNodeCollection` containing the selected HTML elements.

<br>

Here's an example usage:

```javascript
// Select all <div> elements with the class "container"
const containers = collectHTML('div.container');

// or you can:
// containers = new HTMLNodeCollection('div.container');

// Access properties and methods of the HTMLNodeCollection instance
console.log(containers.length); // Output: Number of selected elements
console.log(containers.first()); // Output: First selected element
console.log(containers.last()); // Output: Last selected element

// Iterate over the collection using a for...of loop
for (const element of containers) {
  console.log(element); // Output: Each selected element
}

// Use other available methods like forEach, map, filter, etc.
containers.forEach(function(element) {
  // Do something with each element
});

const ids = containers.map(function(element) {
  return element.id;
});

console.log(ids); // Output: Array of element IDs

// Perform more specific selections using querySelector and querySelectorAll
// It will return a new HTMLNodeCollection instance
const sidebar = containers.querySelector('.sidebar');
const buttons = containers.querySelectorAll('button');

// Check if the collection is empty
console.log(containers.isEmpty()); // Output: Boolean indicating if the collection is empty
```

<br>

## License

This code is released under the MIT License. See the [LICENSE](LICENSE) file for more details.

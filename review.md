## Tools

### jQuery (2006)

In [jQuery](https://api.jquery.com/)'s words:

> jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

#### Document traversal and manipulation

| vanilla JavaScript | jQuery |
|---|---|
| `document.querySelector('#map')` | `$('#map')` |
| `document.querySelectorAll('button')` | `$('button')` |
| `myList.innerHTML = ''` | `$(myList).clear()` |
| `const myListItem = document.createElement('li')`<br>`myListItem.innerHTML = 'Hello!'`<br>`myList.appendChild(myListItem)` | `$(myListItem).append('<li>Hello!</li>')` |

#### Event handling

| vanilla JavaScript | jQuery |
|---|---|
| `myButton.addEventListener('click', handleClick)` | `$(myButton).on('click', 'handleClick')` |

#### Ajax/XHR/making requests

| vanilla JavaScript | jQuery |
|---|---|
| `fetch(url)`<br>`  .then(resp => resp.json())`<br>`  .then(data => {...})` | `$.getJSON(url, data => {...})`

### Underscore (2009)/Lodash (2012)

[Underscore](https://underscorejs.org/):
> Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. It’s the answer to the question: “If I sit down in front of a blank HTML page, and want to start being productive immediately, what do I need?” … and the tie to go along with jQuery's tux and Backbone's suspenders.

[Lodash](https://lodash.com/docs/):
> A modern JavaScript utility library delivering modularity, performance & extras.


## Front-end Frameworks

### Angular (2010)/React (2013)/Vue (2013)

[Angular](https://angular.io/):
> Angular is a development platform, built on TypeScript. As a platform, Angular includes:
> * A component-based framework for building scalable web applications
> * A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
> * A suite of developer tools to help you develop, build, test, and update your code

[React](https://reactjs.org/):
> A JavaScript library for building user interfaces
[🙄]

[Vue](https://vuejs.org/):
> Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.

## Other Popular Tools

### Svelte

[Svelte](https://svelte.dev/):
> Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.

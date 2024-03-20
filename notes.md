# Notes

## Git
- Pull
- Push
- Checkout
- Merge

## EC2
- Public IP Address: 204.236.233.134
- SSH command: ssh -i 260-key-pair.pem ubuntu@204.236.233.134

## Caddy
- Works with Let's Encrypt to provide web certificate that verifies server's identity and ownership
- Caddyfile works to route requests to appropriate web services or documents

## Console 
- cat: Output file
- less: Interactive file output
- wc: Count words
- ps: View processes
- kill: Kill a process
- sudo: Execute as admin
- ssh: Remote shell
- scp: Securely copy files to a remote computer
- history: Show history of commands
- ping: Test connection
- tracert: Trace network
- dig: DNS information
- man: Look in the manual
- ls: List files
- curl: Command line client URL browser
- grep: Regular expression search
- find: Find files
- top: View running processes
- df: View disk statistics

## VIM
keystroke	meaning
- :h	help
- i	enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
- u	undo
- CTRL-r	redo
- gg	go to beginning of file
- G	go to end of file
- /	search for text that you type after /
- n	next search match
- N	previous search match
- v	visually select text
- y	yank or copy selected text to clipboard
- p	paste clipboard
- CTRL-wv	Split window vertically
- CTRL-ww	Toggle windows
- CTRL-wq	Close current window
- :e	Open a file. Type ahead available. If you open a directory you can navigate it in the window
- :w	write file (save)
- :q	quit. Use :q! to exit without saving

## HTML Intro
### Structure
```
- <a href="">inner text</a>
- <!-- -->
- &	&amp;
- <	&lt;
- >	&gt;
- "	&quot;
- '	&apos;
```

Block vs. inline elements

### Input
#### Example of Form Element and Submission
```
<form action="submission.html" method="post">
  <label for="ta">TextArea: </label>
  <textarea id="ta" name="ta-id">
Some text
  </textarea>
  <button type="submit">Submit</button>
</form>
```
#### Input Element
<table>
<thead>
<tr>
<th>Type</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>Single line textual value</td>
</tr>
<tr>
<td>password</td>
<td>Obscured password</td>
</tr>
<tr>
<td>email</td>
<td>Email address</td>
</tr>
<tr>
<td>tel</td>
<td>Telephone number</td>
</tr>
<tr>
<td>url</td>
<td>URL address</td>
</tr>
<tr>
<td>number</td>
<td>Numerical value</td>
</tr>
<tr>
<td>checkbox</td>
<td>Inclusive selection</td>
</tr>
<tr>
<td>radio</td>
<td>Exclusive selection</td>
</tr>
<tr>
<td>range</td>
<td>Range limited number</td>
</tr>
<tr>
<td>date</td>
<td>Year, month, day</td>
</tr>
<tr>
<td>datetime-local</td>
<td>Date and time</td>
</tr>
<tr>
<td>month</td>
<td>Year, month</td>
</tr>
<tr>
<td>week</td>
<td>Week of year</td>
</tr>
<tr>
<td>color</td>
<td>Color</td>
</tr>
<tr>
<td>file</td>
<td>Local file</td>
</tr>
<tr>
<td>submit</td>
<td>button to trigger form submission</td>
</tr>
</tbody>
</table>

Example: ```<input type="checkbox" name="varCheckbox" value="checkbox1" checked />```

### Media
The media tags that reference external media all take a URL as an attribute. The path represented by the URL can either be a relative path or full path. A full path includes the protocol, domain name, and path to the file.

Video, img, and audio media types

## Startup HTML

Deploying files
```./deployFiles.sh -k ../260-key-pair.pem -h strategpt.click -s simon```

## CSS

"Functionally, CSS is primarily concerned with defining rulesets, or simply rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value"

Three ways to associate CSS with a page
- style attribute within element
- style tags within ```<head></head>``` tags
- link in ```<head></head>``` tags:
```<link rel="stylesheet" href="styles.css" />```

Formatting by content, padding, border, margin

### Combinators

"Next we want to change the color of the second level headings (h2), but we only want to do that within the sections for each department. To make that happen we can provide a descendant combinator that is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So our selector would be all h2 elements that are descendants of section elements."

section h2 {
  color: #004400;
}

<table>
<thead>
<tr>
<th>Combinator</th>
<th>Meaning</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Descendant</td>
<td>A list of descendants</td>
<td><code>body section</code></td>
<td>Any section that is a descendant of a body</td>
</tr>
<tr>
<td>Child</td>
<td>A list of direct children</td>
<td><code>section &gt; p</code></td>
<td>Any p that is a direct child of a section</td>
</tr>
<tr>
<td>General sibling</td>
<td>A list of siblings</td>
<td><code>p ~ div</code></td>
<td>Any p that has a div sibling</td>
</tr>
<tr>
<td>Adjacent sibling</td>
<td>A list of adjacent sibling</td>
<td><code>p + div</code></td>
<td>Any p that has an adjacent div sibling</td>
</tr>
</tbody>
</table>

Class selectors:
.class {}

ID selectors: 
```#id {}```

Attribute selectors:
p[attribute = 'something'] {}

Pseudo selectors:
section:hover {}

### CSS Fonts

Importing fonts: 
From local files
```@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}```

From font provider (such as Google)
```@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}```

### Animation

```
selector {
  animation-name: demo;
  animation-duration: 1s;
}

@keyframes demo {
  from {
    font-size: 0px;
  }

  95% {
    font-size: 22px;
  }

  to {
    font-size: 20px;
  }
}
```

### Viewport Meta Tag
```<meta name="viewport" content="width=device-width,initial-scale=1" />```
Tells mobile browsers not to scale the website as we will provide the formatting ourselves

### Float
Moves element to the right or left of parent container and allows inline elements to wrap around it

### Media Selectors
```@media (orientation: portrait) {
  aside {
    display: none;
  }
}```
Make changes to specific classes/attributes with switches b/t viewport orientation

### Grid Display
HTML
```<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```
CSS
```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}```
"fr": fractional unit. derived from parent container

### Flex display
Basic HTML
```<body>
  <header>
    <h1>CSS flex &amp; media query</h1>
  </header>
  <main>
    <section>
      <h2>Controls</h2>
    </section>
    <section>
      <h2>Content</h2>
    </section>
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</body>
```

CSS
```
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}

header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}

section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}

@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```

## Bootstrap
To use bootstrap in your code, include it in your ```<head>``` section as follows:
```<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
```

This needs to be included at the end of your ```<body>``` to use JavaScript functionality imported from Bootstrap **OR** you can import a javascript package in your console. See both below
```<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
```

```npm install bootstrap@5.2.3```

The way we generally apply bootstrap styling is by using their built-in classes

Here is a good example: https://codepen.io/leesjensen/pen/JjZavjW

## JavaScript

### Console
console.log()

console.time('demo time')
// code that takes a while
console.timeEnd('demo time')
console.count()

### Including JS
```<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```

### JS Features

Supports do while, while, for, for in (indices/keys), for of (values), break, and continue

#### Strings
```'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```

<table>
<thead>
<tr>
<th>Function</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>length</td>
<td>The number of characters in the string</td>
</tr>
<tr>
<td>indexOf()</td>
<td>The starting index of a given substring</td>
</tr>
<tr>
<td>split()</td>
<td>Split the string into an array on the given delimiter string</td>
</tr>
<tr>
<td>startsWith()</td>
<td>True if the string has a given prefix</td>
</tr>
<tr>
<td>endsWith()</td>
<td>True if the string has a given suffix</td>
</tr>
<tr>
<td>toLowerCase()</td>
<td>Converts all characters to lowercase</td>
</tr>
</tbody>
</table>

### Functions

Functions are first-class objects in JS. Ex:

```function hello(who) {
  return 'hello ' + who;
}
```

They may have side effects. Functions without a return value often exist for that purpose.

Here is an example of a function with a default parameter:

```function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}
```

```// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
```

### Arrow Notation

```() => <return_value>;```
OR
```() => {
  ...code block...
  return <var>;
}
```

Arrow notation is related to closures. More on this later

### Arrays

<table>
<thead>
<tr>
<th>Function</th>
<th>Meaning</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>push</td>
<td>Add an item to the end of the array</td>
<td><code>a.push(4)</code></td>
</tr>
<tr>
<td>pop</td>
<td>Remove an item from the end of the array</td>
<td><code>x = a.pop()</code></td>
</tr>
<tr>
<td>slice</td>
<td>Return a sub-array</td>
<td><code>a.slice(1,-1)</code></td>
</tr>
<tr>
<td>sort</td>
<td>Run a function to sort an array in place</td>
<td><code>a.sort((a,b) =&gt; b-a)</code></td>
</tr>
<tr>
<td>values</td>
<td>Creates an iterator for use with a <code>for of</code> loop</td>
<td><code>for (i of a.values()) {...}</code></td>
</tr>
<tr>
<td>find</td>
<td>Find the first item satisfied by a test function</td>
<td><code>a.find(i =&gt; i &lt; 2)</code></td>
</tr>
<tr>
<td>forEach</td>
<td>Run a function on each array item</td>
<td><code>a.forEach(console.log)</code></td>
</tr>
<tr>
<td>reduce</td>
<td>Run a function to reduce each array item to a single item</td>
<td><code>a.reduce((a, c) =&gt; a + c)</code></td>
</tr>
<tr>
<td>map</td>
<td>Run a function to map an array to a new array</td>
<td><code>a.map(i =&gt; i+i)</code></td>
</tr>
<tr>
<td>filter</td>
<td>Run a function to remove items</td>
<td><code>a.filter(i =&gt; i%2)</code></td>
</tr>
<tr>
<td>every</td>
<td>Run a function to test if all items match</td>
<td><code>a.every(i =&gt; i &lt; 3)</code></td>
</tr>
<tr>
<td>some</td>
<td>Run a function to test if any items match</td>
<td><code>a.some(i =&gt; 1 &lt; 1)</code></td>
</tr>
</tbody>
</table>

### JSON

json -> JSON.parse(json) -> javascript -> JSON.stringify(jsObject) -> json -> ...

### JS Objects

Constructor and method call example (outside of a class)
```function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

With class
```class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

### RegEx

Declaration examples:
```const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```

Useful RegEx functions:
```str.match(<regex>)
str.replace(<regex>, <strToAdd>)
<regex>.test(<str>)
```

### Rest Parameters

```function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// returns true
```

When placed before parameters in a function call, it is referred to as **spread**
```
fxnThatTakesTwoInts(...[1, 2])
```

## Try Catch Finally

```try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

### Destructuring
```
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4, 5]
```

```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals

const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```

### Local Storage

```
<table>
<thead>
<tr>
<th>Function</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>setItem(name, value)</td>
<td>Sets a named item's value into local storage</td>
</tr>
<tr>
<td>getItem(name)</td>
<td>Gets a named item's value from local storage</td>
</tr>
<tr>
<td>removeItem(name)</td>
<td>Removes a named item from local storage</td>
</tr>
<tr>
<td>clear()</td>
<td>Clears all items in local storage</td>
</tr>
</tbody>
</table>
```

## Promises
Code Example

```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

### Then, Catch, Finally
Code Example 

```
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

Timeout() takes as parameters a function to execute and a wait (in ms) before it does so

### Await, Async

```
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```

## Internet

### TCP/IP
<table>
<thead>
<tr>
<th>Layer</th>
<th>Example</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>Application</td>
<td>HTTPS</td>
<td>Functionality like web browsing</td>
</tr>
<tr>
<td>Transport</td>
<td>TCP</td>
<td>Moving connection information packets</td>
</tr>
<tr>
<td>Internet</td>
<td>IP</td>
<td>Establishing connections</td>
</tr>
<tr>
<td>Link</td>
<td>Fiber, hardware</td>
<td>Physical connections</td>
</tr>
</tbody>
</table>

### URLs

<table>
<thead>
<tr>
<th>Part</th>
<th>Example</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Scheme</td>
<td>https</td>
<td>The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.</td>
</tr>
<tr>
<td>Domain name</td>
<td>byu.edu</td>
<td>The domain name that owns the resource represented by the URL.</td>
</tr>
<tr>
<td>Port</td>
<td>3000</td>
<td>The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.</td>
</tr>
<tr>
<td>Path</td>
<td>/school/byu/user/8014</td>
<td>The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.</td>
</tr>
<tr>
<td>Parameters</td>
<td>filter=names&amp;highlight=intro,summary</td>
<td>The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.</td>
</tr>
<tr>
<td>Anchor</td>
<td>summary</td>
<td>The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.</td>
</tr>
</tbody>
</table>

### HTTP Request Header Info

<table>
<thead>
<tr>
<th>Header</th>
<th>Example</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>Authorization</td>
<td>Bearer bGciOiJIUzI1NiIsI</td>
<td>A token that authorized the user making the request.</td>
</tr>
<tr>
<td>Accept</td>
<td>image/*</td>
<td>The format the client accepts. This may include wildcards.</td>
</tr>
<tr>
<td>Content-Type</td>
<td>text/html; charset=utf-8</td>
<td>The format of the content being sent. These are described using standard <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">MIME</a> types.</td>
</tr>
<tr>
<td>Cookie</td>
<td>SessionID=39s8cgj34; csrftoken=9dck2</td>
<td>Key value pairs that are generated by the server and stored on the client.</td>
</tr>
<tr>
<td>Host</td>
<td>info.cern.ch</td>
<td>The domain name of the server. This is required in all requests.</td>
</tr>
<tr>
<td>Origin</td>
<td>cs260.click</td>
<td>Identifies the origin that caused the request. A host may only allow requests from specific origins.</td>
</tr>
<tr>
<td>Access-Control-Allow-Origin</td>
<td>https://cs260.click</td>
<td>Server response of what origins can make a request. This may include a wildcard.</td>
</tr>
<tr>
<td>Content-Length</td>
<td>368</td>
<td>The number of bytes contained in the response.</td>
</tr>
<tr>
<td>Cache-Control</td>
<td>public, max-age=604800</td>
<td>Tells the client how it can cache the response.</td>
</tr>
<tr>
<td>User-Agent</td>
<td>Mozilla/5.0 (Macintosh)</td>
<td>The client application making the request.</td>
</tr>
</tbody>
</table>

### Cookies

HTTP requests are stateless, but cookies (generated by server and stored by client) can help to provide context to requests. Ex. response from server:

```
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```

And subsequent request by client:

```
HTTP/2 200
Cookie: myAppCookie=tasty
```

Useful for keeping track of sessions or settings like language preferences

### Fetch

Post example:

```
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

### Node.js

Using JS for backend as well
```
node -e "<js statement>"
```

```
node <js file>
```

#### Package installation
1. npm init (-y) 
    - within program directory
2. npm install 
3. 'require' statement in js code
    - ```
    const package = require('pkg-name');
    ```

*Also necessary to include node-modules in your .gitignore

Note that you can also start up Node and execute the index.js code directly in VS Code. To do this open index.js in VS Code and press the 'F5' key. This should ask you what program you want to run. Select node.js. This starts up Node.js with the index.js file, but also attaches a debugger so that you can set breakpoints in the code and step through each line of code.

### Node Express

```
npm install express
```

```
const express = require('express');
const app = express();

app.listen(8080);
```

```
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```

#### Middleware
Code example 
```
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
```

Remember that the order that you add your middleware to the Express app object controls the order that the middleware functions are called. Any middleware that does not call the next function after doing its processing, stops the middleware chain from continuing.

#### Authtokens in Cookies

httpOnly tells the browser to not allow JavaScript running on the browser to read the cookie.
secure requires HTTPS to be used when sending the cookie back to the server.
sameSite will only return the cookie to the domain that generated it.
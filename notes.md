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
    />```

This needs to be included at the end of your ```<body>``` to use JavaScript functionality imported from Bootstrap **OR** you can import a javascript package in your console. See both below
```<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>```

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
</body>```

### JS Features

Supports do while, while, for, for in (indices/keys), for of (values), break, and continue

#### Strings
```'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text```

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
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
# Get Attributes

Get all attributes from a DOM element.

## Install

````shell
npm install get-attrs
````

## Usage
Doing this:
````javascript
const getAttrs = require('get-attrs')

const el = document.querySelector('svg')
const attrs = getAttrs(el)

console.log(attrs)
````
with this:
````html
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="312" viewBox="0 0 256 312"
     id="myId" data-float="1.234" onload="startAnimation('fast')" unquoted=d/\nger!></svg>
  ...
</svg>
````
makes this:
````javascript
{
  xmlns: "http://www.w3.org/2000/svg",
  width: 256,
  height: 312,
  viewBox: "0 0 256 312",
  id: "myId",
  data-float: 1.234,
  onload: "startAnimation("fast")",
  unquoted: "d/\nger!"
}
````

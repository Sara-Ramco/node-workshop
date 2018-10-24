---
title: Node.js
separator: \n---\n
verticalSeparator: \n...\n
theme: solarized
revealOptions:
    transition: 'slide'
---

# Node.js

---

## What?
...
> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
> <sup>[https://nodejs.org/en/](https://nodejs.org/en/)</sup>
...
Node.js enables executing Javascript in environments other than the browser, eg. server

Note: Similar to other interpreted languages eg. Python

---

## Why?
...
Javascript is simple and C-like

Easy to pickup, familiar to anyone who has learnt a C family language
...
Javascript is flexible and can fit multiple paradigms eg. functional, object-oriented programming (OOP)
...
Largest amount of packages
> ![module-counts.png](./img/module-counts.png)
> <sup>[http://www.modulecounts.com/](http://www.modulecounts.com/)</sup>
Note: Speed of development
...
Highly scalable* event model with I/O requests delegated to system level

<sup>\*Terms and conditions apply *(topic for another day)*</sup>

---

## How?
...
//TODO: Comparison of frameworks
---

## Useful resources
- [Node.js Documentation for latest version](https://nodejs.org/dist/latest/docs/api/index.html)
- [Mozilla Developer Network Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Check Node.js support for Javascript language features](https://node.green/)
- [Manage multiple Node.js versions](https://www.npmjs.com/package/n)

---

## Koa

//TODO: Intro to Koa

---

## Hands-on
...
Clone or copy the files from here
//TODO: Skeleton repo
...
Install Node.js version >= 7.6.0
...
<pre><code data-trim data-noescape>
npm init
npm install koa koa-route koa-bodyparser
</code></pre>
...
#### `package.json`
[NPM metadata for your project](https://docs.npmjs.com/files/package.json)
...

1. <p class="fragment">Add a route for POST /api/user/:id and save request body to a global array in memory</p>
2. <p class="fragment">Add a route for GET /api/user/:id and return the saved request body</p>
3. <p class="fragment">Add a X-Response-Time header with the time taken from request received to response sent</p>
4. <p class="fragment">Return HTTP 400 if X-Api-Key in request header !== 'secretKey', 500 for any other errors</p>

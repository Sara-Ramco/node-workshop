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
Javascript is flexible to fit multiple paradigms eg. functional, OOP
...
Largest amount of packages
> ![module-counts.png](./img/module-counts.png)
> <sup>[http://www.modulecounts.com/](http://www.modulecounts.com/)</sup>
Note: Speed of development
...
Highly scalable event model with I/O requests delegated to system level

---

## How?

...

//TODO: Comparison of frameworks

---

## Useful resources
- [Node.js Documentation for latest version](https://nodejs.org/dist/latest/docs/api/index.html)
- [Mozilla Developer Network Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Check Node.js support for Javascript language features](https://node.green/)

---

//TODO: Intro to Koa

---

## Hands-on

//TODO: Skeleton repo

Install Node.js >= v8

...

```
npm init
npm install koa koa-route koa-bodyparser
```

...

1. Add a route for POST /api/user/:id and save request body to a global array in memory
2. Add a route for GET /api/user/:id and return the saved request body
3. Add a X-Response-Time header with the time taken from request received to response sent
4. Return HTTP 400 if request body is not JSON, 500 for any other errors

---
title: "20 Useful JavaScript Snippets while Developing a Project"
date: "2021-01-02"
excerpt: "JavaScript Snippets available all in one place to drop into your code."
featureImage: "twenty-useful-js-snippets.jpg"
---

JavaScript has become an essential language for building websites whether you are using popular React, Angular, or Vue. In every project, there comes a situation where we write code to perform common tasks or perform debugging in development. Although tons of frameworks and libraries make these things easy for us for faster development, it is sometimes better to write them on our own and try to understand how things work underhood.

So, I grouped some useful snippets in this article and ready to share them with you.

For more JS snippets: [30 seconds of code](https://www.30secondsofcode.org/js/p/1), [CSS-Tricks](https://css-tricks.com/snippets/javascript/).

> The strength of JavaScript is that you can do anything. The weakness is that you will. - Reg Braithwaite

## 1. arrayToHTMLList

Converts the given array elements into <li> tags and appends them to the list of the given id.

```javascript
const arrayToHTMLList = (arr, listID) =>
  (document.querySelector(`#${listID}`).innerHTML += arr
    .map((item) => `<li>${item}</li>`)
    .join(""));

arrayToHTMLList(["item 1", "item 2"], "myListID"); //<li>item1</li> <li>item 2</li>
```

## 2. bindAll

This snippet binds methods of an object to the object itself, overwriting the existing method.

```javascript
const bindAll = (obj, ...fns) =>
  fns.forEach(
    (fn) => (
      (f = obj[fn]),
      (obj[fn] = function () {
        return f.apply(obj);
      })
    )
  );

var view = {
  label: "docs",
  click: function () {
    console.log("clicked " + this.label);
  },
};
bindAll(view, "click");
document.body.addEventListener("click", view.click);
// Log 'clicked docs' when clicked.
```

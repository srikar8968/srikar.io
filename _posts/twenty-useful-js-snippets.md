---
title: "20 Useful JavaScript Snippets while Developing a Project"
date: "2021-01-02"
excerpt: "JavaScript Snippets available all in one place to drop into your code."
# featureImage: "twenty-useful-js-snippets.jpg"
---

JavaScript has become an essential language for building websites whether you are using popular React, Angular, or Vue. In every project, there comes a situation where we write code to perform common tasks or perform debugging in development. Although tons of frameworks and libraries make these things easy for us for faster development, it is sometimes better to write them on our own and try to understand how things work underhood.

So, I grouped some useful snippets in this article and ready to share them with you.

For more JS snippets: [30 seconds of code](https://www.30secondsofcode.org/js/p/1), [CSS-Tricks](https://css-tricks.com/snippets/javascript/).

> The strength of JavaScript is that you can do anything. The weakness is that you will. - Reg Braithwaite

## Table of Contents

## arrayToHTMLList

Converts the given array elements into `li` tags and appends them to the list of the given id.

```javascript
const arrayToHTMLList = (arr, listID) =>
  (document.querySelector(`#${listID}`).innerHTML += arr
    .map((item) => `<li>${item}</li>`)
    .join(""));

arrayToHTMLList(["item 1", "item 2"], "myListID"); //<li>item1</li> <li>item 2</li>
```

## bindAll

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

## countBy

This snippet groups the elements of an array based on the given function and returns the count of elements in each group.

```javascript
const countBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(["one", "two", "three"], "length"); // {3: 2, 5: 1}
countBy([{ count: 5 }, { count: 10 }, { count: 5 }], (x) => x.count); // {5: 2, 10: 1}
```

## compactObject

This snippet deeply removes all falsy values from an object or array.

```javascript
const compactObject = (val) => {
  const data = Array.isArray(val) ? val.filter(Boolean) : val;
  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      if (Boolean(value))
        acc[key] = typeof value === "object" ? compactObject(value) : value;
      return acc;
    },
    Array.isArray(val) ? [] : {}
  );
};

const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: "",
  g: "a",
  h: [null, false, "", true, 1, "a"],
  i: { j: 0, k: false, l: "a" },
};
compactObject(obj);
// { c: true, e: 1, g: 'a', h: [ true, 1, 'a' ], i: { l: 'a' } }
```

## countSubstrings

This snippet counts the occurrences of a substring in a given string.

```javascript
const countSubstrings = (str, searchValue) => {
  let count = 0,
    i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
};

countSubstrings("tiktok tok tok tik tok tik", "tik"); // 3
countSubstrings("tutut tut tut", "tut"); // 4
```

## displayDate

This snippet gets the current date in `day` `month` `date` `year` format.

```javascript
const displayDate = () => {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = (now.getDate() < 10 ? "0" : "") + now.getDate();
  const year = (now.getYear() < 1000 ? 1900 : 0) + now.getYear();
  return (
    days[now.getDay()] +
    ", " +
    months[now.getMonth()] +
    " " +
    date +
    ", " +
    year
  );
};

displayDate(); // Friday, January 08, 2021
```

## equals

This snippet performs a deep comparison between two values to determine if they are equivalent.

```javascript
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
};

equals(
  { a: [2, { e: 3 }], b: [4], c: "foo" },
  { a: [2, { e: 3 }], b: [4], c: "foo" }
); // true
equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true
```

## groupBy

This snippet groups the elements of an array based on the given function.

```javascript
const groupBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});

groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(["one", "two", "three"], "length"); // {3: ['one', 'two'], 5: ['three']}
```

## isValidJSON

This snippet checks if the provided string is a valid `JSON`.

```javascript
const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```

## isDateValid

This snippet checks if a valid `date` object can be created from the given values.

```javascript
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00"); // true
isDateValid("1995-12-17T03:24:00"); // true
isDateValid("1995-12-17 T03:24:00"); // false
isDateValid("Duck"); // false
isDateValid(1995, 11, 17); // true
isDateValid(1995, 11, 17, "Duck"); // false
isDateValid({}); // false
```

## minN

Returns the `n` minimum elements from the provided array.

```javascript
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1, 2]
```

## maxN

This snippet returns the `n` maximum elements from the provided array.

```javascript
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3, 2]
```

## memoization

This snippet uses Memoization technique to speed up your code significantly. It uses a cache to store results, so that subsequent calls of time-consuming functions do not perform the same work another time.

```javascript
const memoize = (fn) =>
  new Proxy(fn, {
    cache: new Map(),
    apply(target, thisArg, argsList) {
      let cacheKey = argsList.toString();
      if (!this.cache.has(cacheKey))
        this.cache.set(cacheKey, target.apply(thisArg, argsList));
      return this.cache.get(cacheKey);
    },
  });

const fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoizedFibonacci = memoize(fibonacci);

for (let i = 0; i < 100; i++) fibonacci(30); // ~5000ms
for (let i = 0; i < 100; i++) memoizedFibonacci(30); // ~50ms
```

## onClickOutside

This snippet runs the callback whenever the user clicks outside of the specified element.

```javascript
const onClickOutside = (element, callback) => {
  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};

onClickOutside("#my-element", () => console.log("Hello"));
// Will log 'Hello' whenever the user clicks outside of #my-element
```

## observeMutations

This snippet creates a `new MutationObserver` and runs the provided callback for each mutation on the specified element.

```javascript
const observeMutations = (element, callback, options) => {
  const observer = new MutationObserver((mutations) =>
    mutations.forEach((m) => callback(m))
  );
  observer.observe(
    element,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
      },
      options
    )
  );
  return observer;
};

const obs = observeMutations(document, console.log);
// Logs all mutations that happen on the page
obs.disconnect();
// Disconnects the observer and stops logging mutations on the page
```

## quickSort

This snippet sorts an array of numbers, using the quicksort algorithm.

```javascript
const quickSort = (arr) => {
  const a = [...arr];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};

quickSort([1, 6, 1, 5, 3, 2, 1, 4]); // [1, 1, 1, 2, 3, 4, 5, 6]
```

## reducedFilter

This snippet filters an array of objects based on a condition while also filtering out unspecified keys.

```javascript
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map((el) =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

const data = [
  {
    id: 1,
    name: "john",
    age: 24,
  },
  {
    id: 2,
    name: "mike",
    age: 50,
  },
];
reducedFilter(data, ["id", "name"], (item) => item.age > 24);
// [{ id: 2, name: 'mike'}]
```

## serializeForm

This snippet encodes a set of `form` elements as a query string.

```javascript
const serializeForm = (form) =>
  Array.from(new FormData(form), (field) =>
    field.map(encodeURIComponent).join("=")
  ).join("&");

serializeForm(document.querySelector("#form"));
// email=test%40email.com&name=Test%20Name
```

## size

This snippet gets the size of an `array`, `object` or `string`.

```javascript
const size = (val) =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;

size([1, 2, 3, 4, 5]); // 5
size("size"); // 4
size({ one: 1, two: 2, three: 3 }); // 3
```

## UUIDGeneratorBrowser

This snippet generates a `UUID` in a browser.

```javascript
const UUIDGeneratorBrowser = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'
```

These snippets were taken from [30 seconds of code](https://www.30secondsofcode.org/js/p/1) where you can browse more of them.

That's it! Hopefully, this helps you learn something to drop it into your project.

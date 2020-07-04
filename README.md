# Front Matter Search

Demo: [https://danielvoweb.github.io/front-matter-search/](https://danielvoweb.github.io/front-matter-search/)

## What is Front Matter Search?

Front Matter Search is a technique demo to create a simple search based on author-defined key terms using eleventy.js front matter data to create a simple search based on article tags and titles.

## Why build Front Matter Search?

When building a few static sites using eleventy.js, I needed a search function; however, when using static sites, there is not a "data" source to help facilitate a search. Front Matter Search attempts to explore a technique in rendering common terms into an autocomplete at time of build - leveraging eleventy.js front matter data.

## The Approach

Elventy.js allows for front matter creation for each article. Part of this front matter is tag, title, and URL data. Tags can be used to group articles in collections and by parsing tag and post data in collections, I was able to pull searchable "terms" into DOM. In DOM, these results are hidden; with simple event binding tied to a search input, when the search input value matches an available term, the result is displayed.

Simply adding a new markdwon file with front matter data populates search results when eleventy.js is run to rebuild the site.

Example:

```
---
layout: item.njk
title: Apple
url: /glossary/a/apple/
tags:
    - round
    - red
    - seeds
    - fruit
---
```

## The Good

Since the majority of the search is based on matching a value to a list of terms, ES6's .findIndex() and .includes() make quick work matching a result that exists on page. Simply showing and hiding results makes the interactions fairly responsive.

## The Bad

Since all results are loaded into DOM, there's potential to see a lot of bloat, especially as results grow. Future iterations could draw on creating an external JSON data file.

## Dependencies

-   @11ty/eleventy
    -   Used to generate static site
-   html-minifier
    -   Used to minify HTML output and reduce DOM size

## Get Started

Install dependencies:

```js
npm i
```

To run locally on port 8088:

```js
npm start
```

Push changes to /docs folder in repo; run before pushing changes:

```js
npm deploy
```

# Web App From Scratch @cmda-minor-web 18-19 ⚙️

This is my repo for the Web App From Scratch course.

![Web App from Scratch Screenshot](https://i.imgur.com/GmbGwAx.png)

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and Technologies](#packages-and-technologies)
* [API](#api-)
* [How It Works](#how-it-works-)
  * [Actor Diagram](#fetching-api-data)
  * [Interaction Diagram](#rendering-data)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things I want to do in this course:

### Week 1
[Project link](https://baspieren.github.io/web-app-from-scratch-18-19/week1/)

- [X] Request data from the API with an asynchronous call.
- [X] Parse the data to JSON and save it in a temporary object.
- [X] Render data from the API on the overview page.
- [X] Use a `Promise` to request data from the API.
- [X] Use `fetch()` to request data from the API.

### Week 2
[Project link](https://baspieren.github.io/web-app-from-scratch-18-19/week2/)

- [X] Make an actor diagram.
- [X] Make an interaction diagram.
- [X] Use routing for the detail pages.
- [X] Use a templating engine.

### Week 3
[Project link](https://baspieren.github.io/web-app-from-scratch-18-19/week3/)

- [ ] .
- [ ] .
- [ ] .
- [ ] .
- [ ] .

## Description 📝
During this course I created a web app from scratch, so without any frameworks or libraries, using HTML, CSS and Javascript. The data I use comes from the [Star Wars API](#api-). For now it only displays data from the API which is requested using `fetch()`.

## Installing 🔍
To install this application enter the following into your terminal:
```
git clone https://github.com/BasPieren/web-app-from-scratch-18-19.git

cd web-app-from-scratch-18-19
```

### Packages and Technologies
This project makes use of the following packages and technologies:

  * [Transparency](https://github.com/leonidas/transparency)
  * [Routie](https://github.com/jgallen23/routie)

## How It Works 🛠️
Here I explain some of the core concepts of this project using an actor and interaction diagram.

### Actor Diagram

![Actor Diagram](https://i.imgur.com/KOyR22a.jpg)
> An Actor diagram is focused on (code)objects that can be seen as the actors of your code.

### Interaction Diagram

![Interaction Diagram](https://i.imgur.com/kNqeEAt.jpg)
> An interaction diagram focuses on functions and shows how user interaction flows through your application.

## API 🐒
I made use of the following API for this project:

* [SWAPI](https://swapi.co)

The Star Wars API allows you to get data on different Star Wars subjects like the movies, characters and planets. You can use a couple of different endpoints to access this data:
```js
{
    "films": "https://swapi.co/api/films/",
    "people": "https://swapi.co/api/people/",
    "planets": "https://swapi.co/api/planets/",
    "species": "https://swapi.co/api/species/",
    "starships": "https://swapi.co/api/starships/",
    "vehicles": "https://swapi.co/api/vehicles/"
}
```

## Sources 📚

  * [Fetching data from the server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
  * [Sorting an array of JavaScript objects](https://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects)
  * [Get request (promise)](https://codepen.io/joostf/pen/OQxpxx)

### Honourable Mentions

  * [Help from Jesse Dijkman](https://github.com/jesseDijkman1)
  * [Help from Jeroen van Berkum](https://github.com/jeroentvb)
  * [Help from Martijn Reeuwijk](https://github.com/martijnReeuwijk)

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)

<!-- # Web App From Scratch @cmda-minor-web 18-19

In dit vak gaan we een web app maken zonder frameworks of onnodige libraries, dus zoveel mogelijk met native HTML, CSS & JavaScript. Het eindproduct is een modulair opgezet prototype voor een single page web app. Data wordt opgehaald uit een externe API, waar nodig gemanipuleerd en vervolgens getoond in de Web App. Je leert hoe je structuur aanbrengt in je code en hoe je hiermee 'from scratch' een (prototype voor een) web app maakt. Met deze kennis begrijp je daarnaast beter hoe bestaande api’s, libraries en frameworks werken.

## Leerdoelen
- _Je kan structuur aanbrengen in je code door patterns toe te passen. Je kan de keuze voor de gekozen patterns beargumenteren_
- _Je kan data ophalen, manipuleren en dynamisch omzetten naar html elementen mbv templating._
- _Je begrijpt hoe je middels asynchrone code met een externe API kan werken._
- _Je begrijpt hoe je states in je applicaties kan managen en stelt de gebruiker op de hoogte van states waar nodig._

[Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vTjZGWGPC_RMvTMry8YW5XOM79GEIdgS7I5JlOe6OeeOUdmv7ok1s9jQhzojNE4AsyzgL-jJCbRj1LN/pubhtml?gid=0&single=true)

## Lesprogramma

### Week 1 - Hello API 🐒

Doel: Data ophalen uit een API en renderen in een overzichtspagina.

[Opdrachten](https://drive.google.com/open?id=1OVhWQNaCgSluYviTKKWcApkyPd23xow1PiExb8GYANM)

[Slides](https://drive.google.com/open?id=1Rjl9xqXoKniQSRJPdkU1O5YwWC33SJK8KiV0a-H_xZU)

### Week 2 - Design and Refactor 🛠

Doel: Breakdown maken van de web app. Routes en states toevoegen. Detailpagina renderen.

[Opdrachten](https://drive.google.com/open?id=1GMDTdW3LycAYpZSFI6gk_lrKrx8-zLWrNh69aaVEH5Y)

[Slides](https://drive.google.com/open?id=1IqQeu1m0dQiSC_KCvrn8eencAgtYe7X6qT-gm0n9Bmc)

### Week 3 - Wrapping up 🎁

Doel: Data manipuleren. Code splitsen in modules. Reflecteren op eindresultaat.

[Opdrachten](https://drive.google.com/open?id=13pKQu72pshaEzKw9q5JHLa-aop85nMP6nDCdqioWjoQ)

[Slides](https://drive.google.com/open?id=1BSzGYNLMgtHD4HRnK7f0DgyTv4Pg3xsQwD_eYNo7v0Y) -->


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

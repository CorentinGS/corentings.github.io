---
name: Memnix
tools: [Coding, Opensource, Flashcards]
image: 
description: Memnix is a project that aims to create tools to facilitate learning for students by working in an organized way.
---

# Memnix

Memnix is a project that aims to create tools to facilitate learning for students by working in an organized way.
It is based on the spaced repetition learning system using flash cards.

> *A flashcard or flash card (also known as an index card) is a card bearing information on both sides, which is intended to be used as an aid in memorization. Each flashcard bears a question on one side and an answer on the other. Flashcards are often used to memorize vocabulary, historical dates, formulas or any subject matter that can be learned via a question-and-answer format. Flashcards can be virtual (part of a flashcard software), or physical.* (wikipedia)

## Roadmap

Memnix aims to provide users with a tool that allows them to create decks and cards on various topics, to practice on them, to share them with their friends or to play on "public" decks !

I'm working with Jira & Confluence from Atlassian to handle Memnix's roadmap.

*The full roadmap is still in progress...*

Here is a short list of my next main goals:

* CDN
* Card creator
  * Create cards
  * Generate cards from a json
* User Management
  * Profile
  * Friends

## Technologies

### Core

The core of Memnix is written in Golang for now but I'm planning to change it to a microservice driven architecture.
I'll use Python3 for the algorithm and Deep Learning behind Memnix while Rust should handle most of the computing such as cards generation.
I'm working on using Apache Kafka as a message broker.

### Android

The first demo of the android client written in Flutter using Dart is available [https://github.com/memnix/memnix-flutter](here on github).

I'm planning to rewrite it fully in Kotlin in the future but I want to focus first on the webapp. Otherwise, the old flutter version is still working and you can compile it by youserlf from sources or send me an email to get access to the beta on the Google Play.

### IOS

Well, if you buy me an Iphone and a MacBook, I'll develop it !

### Web App

The web app is in demo on [https://memnix.yumenetwork.net/](this website). You can create an account and start playing on public decks.
It's written in VueJS using Nuxt and Vuetify. You can find the sources on [https://github.com/memnix/memnix-spa](Github).

### API

The API behinds Memnix is written in Golang using the amazing [https://memnix.yumenetwork.net/](Fiber framework) and [https://gorm.io](Gorm). You can find the sources on [https://github.com/memnix/memnix-rest](Github).
I'm using Swagger to generate the documentation, which you can find [https://api-memnix.yumenetwork.net/swagger/index.html#/](here).

### Docker

Everything is deployed on my VPS using Docker and traefik !

### Database

I'm using PostgreSQL and MongoDB.

## The algorithm

You can find a lot of *Spaced Repetition Learning Algorithm* on the internet. I've been experimeting with a lot of them and decided to use SM-2 as a base and will improve it using Deep Learning.

My main source is [https://emtiyaz.github.io/papers/learning_from_bayes.pdf](this amazing paper: *Learning-Algorithms from Bayesian Principles*). I'm also using posts from the [https://www.reddit.com/r/Anki](subbredit /r/Anki).

Most of the algorithm is based on *The forgetting curve* developed by H. Ebbinghaus and the work done by Piotr Wozniak such as the [https://supermemo.guru/wiki/Exponential_nature_of_forgetting#Forgetting_curve_approximations](*Exponential nature of forgetting*).
{% include elements/figure.html image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/ForgettingCurve.svg/320px-ForgettingCurve.svg.png?1644344707790" caption="The Forgetting Curve" %}

This is just an overview of how I designed Memnix, I'll soon write a more detailed post about the algorithm I'm developing.

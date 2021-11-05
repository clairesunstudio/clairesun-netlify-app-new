---
templateKey: project
title: Child Care Program Search
description: A Geolocation search for the Massachusetts Child Care Programs
image: /img/childcare.jpg
date: 2019-04-30T04:26:43.334Z
tags:
  - Data Viz
  - Design
  - Dev
---
## Overview

In order to help parents make informed choices about child care services and to encourage child care providers to improve the quality of their services, we were commissioned by the Department of Early Education and Care (EEC) to quickly design and develop a web application that would allow the public to search and filter the licensed providers in Massachusetts based on their geographic locations. 

![](/img/childcare.jpg)

## My role

I was the lead designer and front-end engineer in this project. Alongside with a team of 7 other developers, architects, and data engineers, we were able to go from requirements to a working prototype in 2 weeks.

>  It was unprecedented to see procurement, design, front-end and backend successfully executed in such short timeline. 

As a hybrid designer and developer, I was a key contributor in all aspects of the project - from translating business requirements to tackling technical solutions. This crossover also enabled me to create design and lead the front-end efforts in an efficient way that would balance business priorities, technical feasibility, and user needs, within limited time. I was also able to leverage our in-house react component library ([Mayflower-React](https://mayflower-react.digital.mass.gov/)) and existing patterns in my design, which enabled us to prototype rapidly.

## Background and requirements

> The app will draw data from EEC’s Lead data storage to provide information, where available, on child care provider inspection and monitoring reports, licensing status, contact information, address, provider type, and quality. Further, the tool will enable aggregated details on reported instances of child abuse, injury, or death by provider category and status to be displayed. This tool will enable users to search for child care providers by address, zip code, and place name and to further filter results, as specified by EEC, by such things as provider type or license status.

The business goals are based off of the seven federal requirements laid out in the [reauthorization of the CCDBG Act](https://www.acf.hhs.gov/occ/ccdf-reauthorization). EEC must deliver a product that meets these requirements in an aggressive timeline - from zero to going live in a little over a month. Our team will deliver the front-end of the Parent Child Care Portal. The EEC team will be responsible for providing the federally required data about child care providers as API endpoints that powers the search app.

## Process

The timeline to meet the federal requirements was aggressive — we held a 10-day hackathon, during which we built a fully functioning prototype using Gatsby — a React based static site generator — with Mayflower React component library.  The app uses Google Maps Javascript API and Geocoding API for the interactive map display and the address search, and the custom API we designed to power child care search and provider details pages using S3 — Postgres — Lambda — API gateway architecture, which allowed us to implement features like search by radius, filter by provider type, and render static pages with detail information about each program.
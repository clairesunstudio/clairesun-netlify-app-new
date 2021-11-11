---
templateKey: project
title: Search.mass.gov
description: The search application powering Mass.gov
image: /img/search.jpg
url: https://search.mass.gov
date: 2019-06-02T22:42:51.326Z
tags:
  - API
  - UI Design
  - UX Design
  - User Testing
---
## Overview

Working against an aggressive deadline as the search engine used by Mass.gov was phasing out, the Mass.gov team formed a nimble project team to build an intuitive and performant search solution that not only avoided the potential service disruptions but with advanced search functionalities and improved user experience. 

![](/img/search-home.png)



## Background

In the midst of the Mass.gov redesign process, Google announced the sunset of its site search product (Google Site Search)  — a custom search embedding solution that Mass.gov had long been relying on for allowing the public to search its own content along with hundreds of other state websites. In about three-month time, we must come up with a technical solution to ensure that over 300k daily searches on Mass.gov were not disrupted. In addition, we wanted to leverage this opportunity to revamp the search experience for all Mass.gov users.

## My Roles

In this project, I wore the hats of a solution architect, a UX designer and a React developer. From the initial research and design, prototype to development, vendor team management, to conducting user testing and synthesizing feedback for iterations to the final release, I played an integral part in the entire product cycle. 

Integrated and synthesized the verbatim user feedback with web analytics on the existing Mass.gov search, I mocked up the features and improvements based on my research sand iterated the designs based on moderated user testing. I drafted the design and technical scope for the most viable product (MVP), and co-wrote the metadata standard for site content for the rich result, faceted and advanced search features. 

<lightbox col='2'>
    <rehype-image src="search-rich-results.jpg" caption="design mockups for rich results"></rehype-image>
    <rehype-image src="search-news.png" caption="design mockup for news tab with search filters"></rehype-image>
</lightbox>

I was an early advocate for building a decoupled React single page app (SPA) outside of Drupal, which allowed full flexibility to pair the frontend with any search API solution. 

![Search infrastructure diagram](/img/search-infrastructure-diagram.png)

In the early prototyping phase, I spearheaded a React front-end component library using Storybook. It sped up the development for the search app and later turned into [Mayflower React](https://mayflower.digital.mass.gov/react) , which was proved to be fruitful for many more projects.
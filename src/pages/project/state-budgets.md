---
templateKey: project
title: Revamping the State Budget Sites
description: Modernize the UX, DX and tech stacks for the Governor's budget sites
image: /img/budget.jpg
url: https://www.mass.gov/lists/budget-archives
date: 2019-06-02T22:42:51.326Z
tags:
  - User Research
  - UX Design
  - UI Design
  - DX Design
  - Service Design
---
## Overview

As part of the state budgeting process, throughout each fiscal year, a small team of budget analysts and web masters within the Executive Office for Administration and Finance are tasked to edit and publish a data-driven microsite for each of the three budget types — the governor's budget proposal, the budget summary and a five-year capital budget plan. 

The goals of this project were two folds:

1. Make the three budget sites look and feel consistently with Mass.gov and the rest of the state web ecosystem. Improve the budget site end user experience, make the budget responsive across devices,  accessible to keyboard and screen reader users, and easily browsable and useful to both the budget power users and the general public.
2. Improve how the budget team process data and generate the site, address pain points in their process. Create a workflow that the team can own — train them on the new tech stacks and prepare them for publishing future budgets on their own.   

<lightbox col='3'>
    <rehype-image src="budget-2018.png" caption="Before: screenshot of the FY2018 Governor's budget recommendation homepage"></rehype-image>
    <rehype-image src="budget-2020.png" caption="After: screenshot of the FY2020 Governor's budget recommendation homepage"></rehype-image>
</lightbox>

## Background

Each publishing process involves a lot of cross-department coordinations, back-and-forth and live changes. To add onto the already stressful process, the web team was stuck with legacy tech stacks that required dealing with very outdated and slow operation systems, for example, a 32-bit computer was used to run the 16-bit FoxPro program. Static web pages were generated from the database exports with Visual Basics, but the HTML and CSS failed to support responsiveness and accessibility, and are very difficult to update or maintain. However, due to the complexity of the budgeting process, and the rigorous approval timelines, previous attempts to modernizing the tech stacks or replacing them with a SaaS tool ended nowhere.

## My Roles

##### User research

On top of the most noticeable usability improvements like making pages responsive, content searchable, and data tables filterable and sortable, I used CrazyEgg to track and measure how users browse the budget sites and conducted TreeJack test to benchmark and inform IA and navigational improvements. 

<lightbox col='3'>
    <rehype-image src="budget-research-treejack.png" text="text"></rehype-image>
    <rehype-image src="budget-research-treejack2.png" text="text"></rehype-image>
</lightbox>

##### Developer experience (DX) journey mapping

A good developer experience and toolset enables the building of a better end-user experience. Meeting with technical stakeholders, listening to and understanding their needs and desires, was a necessary step that often overlooked. Journey mapping is a great exercise to build understanding and empathy around the process, and align and involve stakeholders so that they can help create solutions and feel invested throughout the project. I gathered the key stakeholders who are also the technical team in a room at the start of the project and help them visualize the existing process by writing down each step, including the tools they use, the people/organization they interact with, their expectations and their pain points, etc. 

![](/img/budget-service-mapping.png)

##### Project management

Making changes to an established process is never easy. It involves everyone being onboard and vested in the new process. We know from the beginning that the overhaul is not just for the front-end design and end-user experience, but also for the improvement to the tooling and developer experience that are involved in the generation of the websites going forward. The key to the project success was building trust with the stakeholders, setting up regular updates and communications from the get-go, being empathetic to their priorities and ensure the new process doesn't disrupt the existing one. 

##### Technical solutioning

Learning from the prior failed ventures, we focused on finding a solution that was closely aligned with the existing process so that we could improve and migrate the operations progressively. 
Replacing the legacy programs with [JAMstack](https://jamstack.org/what-is-jamstack/) - a new standard architecture using git workflow and modern build tools to server-side render APIs into static pages substantially sped up the build process, made the sites more performant and allowed the design improvements to made both for the developer experience and the end user experience.[](https://www.draw.io/#G1EKZrZn_B-zaDnxOrGLRsz-_PK-vI76wV)[](https://www.draw.io/#G1EKZrZn_B-zaDnxOrGLRsz-_PK-vI76wV)

##### Design and Development

I created wireframes and high-fidelity design mockups, drafted design and technical scopes for front-end components and page templates, as well as designing back-end data schema and data pipeline, building out data plugins, and developing and deploying the sites.

![]()
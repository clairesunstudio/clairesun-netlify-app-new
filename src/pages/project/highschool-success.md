---
templateKey: project
title: The 'ABC' of High School Success
description: An interactive data story on high school success indicators
image: /img/dese.jpg
url: https://mass.gov/successabcs
date: 2018-06-01T22:42:51.326Z
tags:
  - Data Viz
  - Storytelling
  - UI Design
  - Interaction Design
---
## Overview

This data story provides information for parents, community members, and educators from the Massachusetts Department of Elementary and Secondary Education (DESE) on how attendance, behavior, and course performance in Massachusetts high schools affects post-secondary outcomes. DESE has data programs to collect and analyze student and school data, but not all of them are easily consumable by the public.  By exploring data on attendance, behavior, and course performance — the ABCs — this data story provides insights into a student's chances to graduate on time, go to college, or even stay in college. Parents and educators can use this information to set students up for success or help them get back on track if they're behind.

## My Roles

I worked closely with the Department of Education and Secondary Education on developing this interactive data story to highlight the impact of the ABCs by following a group of students from the time they entered 9th grade, to when each left or completed high school. With the cohort datasets provided by the department, I was able to create storyboard, design the data visualization and interactive content, create prototypes. The site was built using React with accessibility in mind.

## Prototype, Test and Iterate

#### Correlation between failed courses and graduation rate
<div class="grid">
    <rehype-image src="dese-iterations-failed-courses.png" caption=""></rehype-image>
</div>

Radar Charts or polar chart are a way of comparing multiple quantitative variables, useful for seeing which variables are scoring high or low within a dataset, making them ideal for displaying multi-factor. 
However, the graduation data were collected by subjects and didn't have the granularity of the number of failed courses, so we couldn't join the pass/fail data with graduation data. 
We combined the subject data into two categories — all subjects vs. core subjects to eliminate compounding factors that could lead to biased conclusions

#### 11th Grade Data Visualization Explorations

<div class="grid">
    <rehype-image src="dese-iterations-11th-grade.png" caption=""></rehype-image>
</div>

![](/img/dese-11th-grade-final.gif)







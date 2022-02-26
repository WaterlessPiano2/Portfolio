---
title: Agile Import, My first founder journey
date: 2022/2/26
description: What happend behind the scenes with Agile Import development.
tag: web development
author: You
---
# Agile Import - My first founder journey

Here I will be explaning what I was doing working on my company last year and, why has this been paused for now.

During Covid lockdowns, I realised how most of the UK's imports came from Europe. Brexit would make this process more complex with added customs rules, formalities and costs. I saw a business opportunity here to use technology to streamline this process by creating a modern website for making customs declarations. I have worked on this project alone for just over a year. Here are my learnings:

## Business
I spent 3 to 4 hours each week learning about customs. I used many free online resources and read the endless HMRC (Her Majestys Revenue and Customs) documentation on customs declarations. I completed formal training for the customs professionals to learn the basics. My confidence peaked, and I was on the peak of "Mount Stupid", where I thought I knew everything. 

![dunning-kruger effect](https://onlinepethealth.com/wp-content/uploads/2019/12/Dunning-Kruger.jpg)

When I started implementing the customs form and thinking about what each of the 100+ form fields means and how they affect other form fields, I realised how much I didn't know. I tried to push through to come out of the "Valley of Despair", but the learning curve was way steeper and uninteresting than I thought.

Before I paused my attempts to create this, I participated in a business accelerator. Over six weeks, I learned about making business plans, customer interviews, and other valuable topics for new founders like me. 

## Technical
While learning about customs, I made three attempts to create the software over one year. Whenever I got to a place where the code got too complex or requirements for the new customs declaration service backend made by HMRC was updated, I scrapped the project. 

### Attempt 1
[Builder book SaaS boilerplate](https://builderbook.org/book) is what I chose because it had every feature I needed. I cloned the repo and managed to deploy it on **Heroku**. I managed to do a fair bit of modifications to user service and integrate the user profile to the HMRCs authentication system. When creating the form, I realised I had to change the data routing in this massive boilerplate. I didn't know much about many of the libraries used in this boilerplate. So I decided it would be easier to create a lean app from scratch.

### Attempt 2
I paired up with a friend to create a new repo with simple **React, Node, Express, PostgreSQL**. We created a login and user management system for this together. Then I got hold of an enormous XML on how the customs data was expected, so I made a system to convert any XML in the same type as the one I found and turn it into a form. Near the completion, I realised mapping data exactly to the UI made the whole thing more complex to understand. In the process, I learned a lot bout **Formik and Yup**. Doing more research, I found a more useful data source for all the form fields in Google Sheets provided by the HMRC. 

### Break - Making the marketing site
I realised I needed some help from a customer or a co-founder who has worked in the customs industry to give me requirements and decipher the customs jargon. So I created the [agileimport.co.uk](https://agileimport.co.uk) using **Next JS and Tailwind CSS**. I also started networking and being active on LinkedIn.

### Final Attempt 
Again I realised we built too much from the get-go, and it was slowing me down to maintain all the user management systems and writing the core customs form. I found a So I created a fresh repo and wrote a program that would get the form data from a Google Sheets and manipulate this data to convert it into components that used formik to create a form, and validation using yup. Then I also used the same data to attempt to create a database but realised there were a lot of nested objects and arrays that had to be catered for, which made the whole thing very confusing. Midway through, the data in the Google Sheets got deprecated, and I had to change the unfinished code to work with the new data as my code want as adaptable as it needed to be. After this data was updated a few more times, I grew tired and took longer breaks between my coding days. Every time I got back to my code, It took me ages to remember how this complex thing worked. So I eventually stopped working on this. 

## Conclusion
I learned many lessons in this journey.
1. don't go all in and put all your time and effort into one thing. Eventually, you will grow tired of it and burn out. 
2. Set yourself smaller goals before any task; the longer they are, the fewer achievements you will feel from your work. With smaller goals, every time I push a feature that works, it gets me motivated to continue working.
3. It isn't easy to write data-oriented code, especially if the data is complex. It could have been easier to understand what the data means and craft my own Form UI, Display UI and DB accordingly. 
4. Now I can make a small customs declaration, if I ever have to.
5. I learned a lot of useful technologies that landed me my current job. 
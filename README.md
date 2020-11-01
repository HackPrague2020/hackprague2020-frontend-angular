Check out the demo at https://hackprague2020.github.io/hackprague2020-frontend-angular/hackprague2020-frontend-angular/index.html

## Introduction
We hear it all the time: "Saving money is not enough". If you want to build wealth, you need to invest your capital back into the market. 
But how does one go about doing it? If it is so important, why is it so hard? Could we maybe make it easier for ordinary person to invest? 

We definitely believe so and we think that the key to this task is **Financial Education**. 
Hence, we decided to tackle the **Financial Education 2.0 Challenge** at HackPrague 2020 and in the paragraphs that follow, we will go over our journey.
    
    
## Problems with Current State of Affairs
After looking at the topic with the lens of our own personal experience, we concluded that it is not easy for ordinary people (not financial experts) to get started with stock investing.
Moreover, we identified 2 key problems with the way things are right now.


### Problem 1) -> Information Overload
When it comes to picking stocks, there are just so many options to choose. It is the [**Tyranny of Choice**](https://www.scientificamerican.com/article/the-tyranny-of-choice) in its most purest form. 
Moreover, for each available stock, there is so much available data to sift through to make an informed decision. 

How does one get the time to do all this research?




### Problem 2) -> Obsession with Technical Analysis
Today, people are so obsessed with look at charts of price movements and basing their predictions on that. Not only is it shown scientifically that this does not work, but it also has another detrimental effect.
People tend to forget what the ticker symbols like AAPL and TSLA actually mean. 


How can one make good investing decisions when stocks are viewed as lottery tickets instead of investments into tangible companies that build and sell products and services?   


We decided to tackle these 2 problems simultaneously with a single web based solution which we introduce below. 

## Our Solution
The result of the 2 problems described above is that there are basically only 2 extreme ways a layperson can go about stock investing. 
Either a person chooses the total "Hands of the Wheel" solution and invests into a mutual or index fund where everything is taken care of for a fee. 
Or, a person opts for the opposite extreme, to de  
Wouldn't it be nice if there was a golden middle path?


Our solution, [**Lemonade Stocks**](https://github.com/HackPrague2020/hackprague2020-frontend-angular), is an attempt to be such a golden middle path. Concretely, it is a tool for people who want to make emotionless, data driven decisions about investing without dedicating major portions of their precious time into it.

The idea is that, every company is the same in the sense that it uses money (expenses) to build products and provide services which it sells to customers to generate revenue.
If you accept this view, then every company can be, to reasonable degree of accuracy, modeled as a Lemonade Stand company. 
With this, we have an intuitive common ground at which different stocks cant be compared and solid decisions about buying / selling can be made.

## Demo
Take a look at how it works at 

## Live Page:
Try it out yourself at https://hackprague2020.github.io/hackprague2020-frontend-angular/hackprague2020-frontend-angular/index.html and let us know what you think 

## What was done by us?
Our original contributions to the project are 3-fold.

Firstly, we searched around the internet to find a financial data API which would reliably serve us not only stock prices, but financial and cash flow statements as well, since these are the main sources of information for our Lemonade-style analysis. 
After a while, we found the perfect provider, [**Financial Modeling Prep**](https://financialmodelingprep.com/developer/docs/). We happily onboarded with them (API access cost 20$) and implement a TypeScript API connector to their service. 

Secondly, using a couple of free SVG icons, we put together an animated SVG templates to be filled with information fetched from the API described above. 
For a given a company, say Apple, and a preriod in the past, say 3rd Quarter of 2019, the diagram represents a snapshot of how the company looked like at that time viewed as a Lemonade Stand. 
The data that fills the template are   
![](https://i.imgur.com/fW0Jil2.png)


Thirdly and finally, we tied the previous 2 pieces together in a web interface. We chose [**Angular**](https://angular.io/) as our framework and [**Material**](https://material.angular.io/) as our design template. 
   

## 3rd Party Dependencies
1. Angular Material UI Components (https://v9.material.angular.io/)
1. Free SVG Image repository (https://freesvg.org/)
1. API for real time financial data (https://financialmodelingprep.com/developer/docs/)


## Architecture Overview
![](https://i.imgur.com/CuKlmOX.png)



### Thank you very much for considering our submission to your hackathon :) !!!






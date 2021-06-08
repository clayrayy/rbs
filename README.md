# rbs
Behavioral data tracking app

This is an app I made that can be used to track maladaptive behaviors 
in conjunction with Applied Behavior Analysis therapy. 

I made this app using ReactJS with styled-components using a compound component architecture. 
Animations and page transitions are created using Framer Motion.

The app is primarily aimed at parents of children with autism to keep data 
that might be helpful for service providers to provide more focused therapies.

Some of the app features include:

  * Authentication and databasing using Google Firebase Auth and Firestore noSQL database
  * Adding child or clients to keep data for
  * Keeping session data with various collection methods: Duration, Whole and Partial Intervals, and Rate/Frequency
  * Datasheets containing all data taken in sessions are accessible on the clients page

I plan to add some more functionality to the app. Plans include: 

  * Connecting accounts so records data can be viewed by service providers when permission is given by parent
  * Cumulative datasheets that can show all data and averages from a specified date range
  * Robust guides on how to use app interface and how to best utilize the included data collection methods
  * Increased accessibility best practices

This is the first app I've made and it has been a huge learning process. Throughout the process of 
creating this app, I've identified a number of things I would have done differently to increase 
usability, code readability, performance, and simplification, were I starting it again from scratch.


A few things I would do differently:

  * better seperation of concerns with layout and logic
  * Using better DRY principles to reduce repetition
  * Improve app architecture to better organize my filesystem and codebase based on component type
  * Reduce prop drilling using Context API
  
I created this app over several months with the help of my lovely wife, who is in the ABA field. 
As I stated earlier, this the creation of this app has been a massive learning experience and overall a lot of fun.
  

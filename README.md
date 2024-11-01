# Final Project - Advanced Front End
## Financial Planning System / Budget Tracker

1) An elevator pitch of your project (something you can say in less than 1 minute)
    * This project is a financial planning system. No systems I've seen has completely fit my needs, so I want to build one that does. 
    * I want to be able to create categories and sub-categories based on transaction types 
        * (e.g. necessities as a large category, transportation costs as a sub category). 
    * Then want input my current balance and income + tag them.      
    * Same with expenses- I want to tag an expense with one or more categories and one or more subcategories. 
        * (e.g. buying a soda will count as "food", but not "necessity").
2) The names of the contributors (if you are working with a partner)
    * Garion Cox
3) A rough list of features (this needs to be large enough to satisfy the "scope" requirements)
    * Pages:
        1) Dashboard - for viewing quick stats
        2) Settings - for turning on and off features, maybe even changing theme
        3) User Profile - to change credentials, profile picture, email, etc.
        4) Recurring Transactions - set up Bills or income to be auto populated after a date
        5) Reports - a more in depth stats page
        6) Transaction history + management page - to see, add, delete, update transactions
        7) Income tracker
        8) Budget setup page - create tags and subtags here
        9) Alert page - set up email alerts (?)
        10) Cash flow analysis page - show trends
4) A list of new things you will need to do to accomplish your project
    * Local storage - for storing transactions + budgets
    * Client side state stores - for storing a cache of data from an API
    * Toasts
    * Error Handling - for if the API is down or an unhandled error occurs
    * Network Calls - to a server API. Fetching user data, posting new tasks, etc.
    * Typescript
    * CI / CD pipeline - automatic testing + linting + deploy to k8s
    * Authentication and Authorization - must authorize before viewing user's data
    * Reusable form input components - text input, select input, date component
    * Reusable layout components - modal wrapper, generic card for data, table
## Full-Stack multi pages project

### tasks:

##### Task1:
    - create backend project and create these routes
        -  / will render home page
        -  /videos render videos page
        -  /about render about page
        -  /contact render contact page
    you should convert all template pages to ejs files

##### Task2:
    - create partials folder and inside you need to add those files:
        - navigation.ejs which contains navigation bar element
        - footer.ejs which contains footer element
  
    - include those partials in other views (index, about, contact, videos)

##### Task3:
    - create a new route called /register
    - create a new view called register.ejs
        - the view is a copy of contact.ejs but you need only to show the following inputs
            - name
            - email
            - password
            - re-password
    - after click register button, the user should get welcome Email
    - don't forget to add the register link to the navigation bar
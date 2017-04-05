Welcome!
Welcome to Principis Capitol interview project.
Since during in person interview I have outlined solution using Angular 1.6 and ASP.MVC, I have decided to create project using .Net Core and Angular 2 Single Page Application. <br />Enjoy!

Project description and features

    This is a .Net Core Angular 2 Single Page Application project.
    Project have been created using yeoman scaffolding tool to get project and later modified to specifications.    

Project overview

    One left side you can find link to Word reverser page where user cam enter any string. After submit user will see result in form of the same string but in reverse order.        


Project features

    Project have been created using Visual Studio 2017.
    PrincipisCapital.Platform.Web project contains front-end and back-end code.
    PrincipisCapital.Platfrom.Test contains small one test to demonstrate .Net unit test.
    Project also contains two small unit test to test front-end. This is done using Karma and Jasmine.



Execution steps

    To start PrincipisCapital.Platform.Web you can either open solution in Visual Studio 2017 and hit F5 or open command line navigate to folder where PrincipisCapital.Platform.Web is and type dotnet run and hit enter.
    To execute test from  PrincipisCapital.Platform.Tets please got to Test in VS menu and click to run all tests.
    
        To execute Karma test please open command line, navigate to folder where PrincipisCapital.Platform.Web is and type karma start ClientApp\test\karma.conf.js and hit enter.<br />
        NOTE: You might need to install couple tools for this to run successfully. Please see below for details. 
        


Installing Karma and Jasmine

    npm install jasmine-core
    npm install karma karma-jasmine karma-chrome-launcher --save-dev
    npm install -g karma-cli
    Now you should be ready to run tests: karma start ClientApp\test\karma.conf.js


If there are still issues please try fist install all npm packages by running npm install in CMD from root of PrincipisCapital.Platform.Web project.
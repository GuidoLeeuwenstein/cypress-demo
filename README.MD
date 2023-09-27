# Cypress demo
## Guido Leeuwenstein

### about
I have created this project to showcase some of my development skills as well as my understanding of cypress and typescript.  
I build this test suite based on a public website demo which can be freely accessed. https://demo.applitools.com
I hope this gives a little indication of the way i usually develop cypress tests suites

### how to run
* Make sure nodejs is installed locally
* download the project source code
* Install the npm dependencies by executing the command `npm install`
* Run the project by executing the command `npm run cy:open`
* There will be one spec file that runs through three scenarios

### Project structure
The way the project is set up is using a principle called Page objects.
This is done to ensure that the actual tests do not contain any direct functions to interact with the webPage dom.
Instead, every mayor test component (Think a table which displays data) has a corresponding page object.
This page object then has all code needed to interact with the component.
In the end, the tests call on the methods defined in the page objects
Working this way has two mayor advantages.
1. When multiple tests have to do the same actions on the web page we don't write any duplicate code, we just call the dedicated page object.
2. In case of changes to the web page we only have to update one file while the tests themselves should not have to be edited.

### File structure
* `E2E` This folder contains all tests
* `fixtures` This folder contains data sets for comparison or mock data to use in tests
* `pageObjects` This folder contains all page objects that interact with the website DOM
* `support` This folder contains generic methods added to the Cypress.Chaineble object these are very useful if there are repeated actions that are not bound to single pages

### Project dependencies
* nodejs
* cypress
* date-fns 
* typescript

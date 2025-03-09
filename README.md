# ApiAutomationTsPlaywright

1. API testing

base url + resource + query param/path param
1. Install playwright
npm init playwright@latest

2. GET request, POST, PUT (then GET call- to verify data is updated or not), DELETE (Then GET call), PATCH
3. Header param - accept
4. Pass Request Body - Request Payload Using JSON file 
5. Fetch and Validate API Response headers in Playwright
6. Basic Authentication Token for API Testing with Playwright | API Key Auth  
7. npm i dotenv => install for environment file
8. Execute Test in Multiple Environments with Playwright 
  1. cmd => set TEST_ENV=uat, npx playwright test
  2. powercell => $env: TEST_ENV="uat", npx playwright test || $env: TEST_ENV="uat"; npx playwright test
  3. bash => TEST_ENV="uat" npx playwright test

9. npm i cross-env  
inside package.josn
-------------------
"scripts": {
    "test:dev": "cross-env TEST_ENV=dev npx playwright test"
    //  npm run test:dev
  },

10. In Built Reporters | List, Line, Dot, HTML,Blob, Json, Junit, Github Reporters 
    1. npx playwright test tests/Reporters/ --reporter=list
    2.
    3.
    4.
    5. 
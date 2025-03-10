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
    2. npx playwright test tests/Reporters/ --reporter=line
    3. npx playwright test tests/Reporters/ --reporter=dot
    4. npx playwright test tests/Reporters/ --reporter=html (npx playwright show-report)
    5. npx playwright test tests/Reporters/ --reporter=blob
    6. npx playwright test tests/Reporters/ --reporter=json || (set PLAYWRIGHT_JSON_OUTPUT_NAME=report.json, npx playwright test tests/Reporters/)
    7. npx playwright test tests/Reporters/ --reporter=junit || (set PLAYWRIGHT_JUNIT_OUTPUT_NAME=reportjunit.xml, npx playwright test tests/Reporters/)
    (TO see the report in proper format, open XML file inside "https://lotterfriends.github.io/online-junit-parser/")
    8. GITHUB used format inside playwright.config (reporter: process.env.CI ? 'github': 'line',)
    9. multiple report (reporter: [['line'], ['blob'], ['dot']],)

11. Allure report
   1. npm i allure-playwright
   2. npx playwright test tests/Reporters/ --reporter=allure-playwright
   3. allure generate allure-results || (npx allure generate allure-results => using "awesome")
   4. npx allure generate allure-results -o Allure_Report_Folder
   5. npx allure open allure-results

###### NOTES: 
https://docs.google.com/document/d/e/2PACX-1vQWL3T7iUD8DeMPM4OV2x6ZaW8aQgYw2Z7gIQTVmNYa-QhFeo5rT29BTJ5427-QqoBHKokVtLUbU1oy/pub

---------------------CI CD-----------
1. CI using GitHub Actions | Continuous Integration 
2. npm init playwright@latest
3. run on all OS => [runs-on: ubuntu-latest windows-latest macos-latest]
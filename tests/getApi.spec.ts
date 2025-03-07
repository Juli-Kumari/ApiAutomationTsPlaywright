import {request, test} from '@playwright/test';

let reqContext2;
test.beforeAll('Before all the tests', async()=>{
 reqContext2 = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com"
 })
})

test('API Testing GET request 1', async({request})=>{
    // here  {request} is a fixture.
    // {request} is APIRequestContext
const response = await request.get("https://restful-booker.herokuapp.com/booking")
console.log(await response.json())
})

test('API Testing GET request using context 2', async()=>{
    // here "request" is APIRequest from '@playwright/test'
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com/"
    })
const response = await reqContext.get("booking")
console.log(await response.json())
})

test('API Testing GET request before all 3', async({request})=>{
const response = await reqContext2.get("/booking")
console.log(await response.json())
})

test('API Testing GET request using URL from .config file 4', async({request})=>{
const response = await request.get("booking")
console.log(await response.json())
})
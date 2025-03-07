import { expect, request, test } from '@playwright/test';

let reqContext2;
test.beforeAll('Before all the tests', async () => {
    reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    })
})

test('API Testing GET request 1', async ({ request }) => {
    // here  {request} is a fixture.
    // {request} is APIRequestContext
    const response = await request.get("https://restful-booker.herokuapp.com/booking", {
        headers: {
            Accept: "application/json"
        }
    })
    console.log(await response.json())
})

test('API Testing GET request using context 2', async () => {
    // here "request" is APIRequest from '@playwright/test'
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com/",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    })
    const response = await reqContext.get("booking")
    console.log(await response.json())
})

test('API Testing GET request before all 3', async ({ request }) => {
    const response = await reqContext2.get("/booking")
    console.log(await response.json())
})

test('API Testing GET request using URL from .config file 4', async ({ request }) => {
    const response = await request.get("booking")
    console.log(await response.json())
})

test('GET request path parameter data 5', async ({ request }) => {
    const response = await request.get('booking/4')
    console.log(await response.json())
})

test('GET request query parameter data 6 - way 1', async ({ request }) => {
    const response = await request.get('/booking/?firstname=Sally&lastname=Jones')
    console.log(await response.json())
})
test('GET request query parameter data 7 using param - way 2', async ({ request }) => {
    const response = await request.get('/booking', {
        params: {
            firstname: "Sally",
            lastname: "Jones"
        }
    })
    console.log(await response.json())
})

test('GET request: assert 8', async ({ request }) => {
    const response = await request.get('booking/4')
    console.log(await response.json())
    //1. status code
    expect(response.status()).toBe(200)
    // 2. response code 
    expect(response.ok()).toBeTruthy()
    // 3. JSON body match
    expect(await response.json()).toMatchObject({
        firstname: 'Mary',
        lastname: 'Jones',
        totalprice: 146,
        depositpaid: false,
        bookingdates: { checkin: '2020-09-19', checkout: '2022-05-25' },
        additionalneeds: 'Breakfast'
    })
    // 4. JSON data match
    const jsonData = await response.json()
    expect(jsonData.firstname).toBe("Mary")
})

test('GET request: UI verification 9', async ({ request, page }) => {
    // API
    const response = await request.get("https://api.demoblaze.com/entries")
    const jsonData = await response.json()
    console.log(jsonData.Items[0].title)

    // UI
    await page.goto("https://demoblaze.com/")

    await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toHaveText(jsonData.Items[0].title)

})
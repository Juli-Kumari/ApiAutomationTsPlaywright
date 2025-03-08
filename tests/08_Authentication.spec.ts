import { expect, request, test } from '@playwright/test'

let tokenValue
test.beforeAll('Authentication using Basic auth: Get Token', async ({ request }) => {
    const response = await request.post('/auth',{
        data: {
            "username" : "admin",
            "password" : "password123"
        }
    })
    tokenValue = (await response.json()).value
    console.log(tokenValue)
})

test('Authentication using TOKEN', async({request})=>{
    
    const response = await request.put('booking/4',
        {
            headers: {
                Cookie: "token="+ tokenValue
            },
            data:{
                "firstname" : "James",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        }
    )
    expect(response.status()).toBe(200)
})

test('Authentication with API key ', async ({ request }) => {
    const response = await request.put('booking/4',
        {
            headers: {
                Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            data:{
                "firstname" : "James",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        }
    )
    expect(response.status()).toBe(200)
})
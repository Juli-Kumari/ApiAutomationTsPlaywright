import {expect, test} from '@playwright/test'

test('PUT request 1', async({request})=>{
    const response = await request.put('booking/1', {
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Juli",
            "lastname": "Ericsson",
            "totalprice": 832,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2020-02-19",
                "checkout": "2021-12-16"
            }
        }
    })
    const jsonData = await response.json()
    console.log(jsonData)

    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    expect(response.ok()).toBeTruthy()
    expect(jsonData).toMatchObject({
        "firstname": "Juli",
        "lastname": "Ericsson",
        "totalprice": 832,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2020-02-19",
            "checkout": "2021-12-16"
        }
    })

    expect(jsonData.firstname).toEqual('Juli')

})
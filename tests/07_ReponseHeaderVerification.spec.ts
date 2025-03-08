import {expect, request, test} from '@playwright/test'

test('Fetch & validate response header', async({request}) =>{
    const response = await request.get('/booking/1')

    const headerResponse = await response.headers()

    console.log(headerResponse)
    expect(headerResponse.server).toEqual('Cowboy')
    // expect(headerResponse['content-type']).toEqual('application/json; charset=utf-8')

    console.log("*********************************")

    const headerArrayValue = await response.headersArray()
    console.log(headerArrayValue)
    expect(headerArrayValue.length).toBe(11)

    // print one by one header value
    console.log("*********************************")

    headerArrayValue.forEach((header)=>{
        console.log(header)
        console.log(header.name + ":: "+ header.value)
    })
})
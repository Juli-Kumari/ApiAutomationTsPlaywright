import {expect, test} from '@playwright/test'
import apiDataJson from '../testData/apiData.json'

test('POST req: ', async({request})=>{
    const response = await request.post('/booking',{
        data: apiDataJson.postCallData
    })
const jsonData = await response.json()
console.log(jsonData)
expect(response.status()).toBe(200)
expect(response.statusText()).toBe('OK')
expect(jsonData.booking).toMatchObject(apiDataJson)
expect(jsonData.booking.additionalneeds).toEqual(apiDataJson.postCallData.additionalneeds)

})

test('PUT req: ', async({request})=>{
    const response = await request.put('booking/1', {
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:apiDataJson.putCallData
    })
    const jsonData = await response.json()
    console.log(jsonData)

    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    expect(response.ok()).toBeTruthy()
    expect(jsonData).toMatchObject(apiDataJson.putCallData)

    expect(jsonData.firstname).toEqual(apiDataJson.putCallData.firstname)
})
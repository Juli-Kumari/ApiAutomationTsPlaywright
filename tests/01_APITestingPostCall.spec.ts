import {expect, test} from '@playwright/test'
import exp from 'constants'

test('POST request 1', async({request})=>{
    const response = await request.post('/booking', {
        data: {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    })
    const jsonData = await response.json()
console.log(jsonData )
expect(response.status()).toBe(200)
expect(response.statusText()).toBe('OK')
expect(response.ok()).toBeTruthy()
expect(jsonData.booking).toMatchObject({
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  })
expect(jsonData.booking.firstname).toBe('Jim')
})
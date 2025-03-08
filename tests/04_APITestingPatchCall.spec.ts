import { expect, test } from '@playwright/test'

test('PATCH request 1', async ({ request }) => {
    const response = await request.patch('/booking/1', {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Tanu",
            "lastname": "Brown"
        }
    })
    const jsonData = await response.json()
    console.log(jsonData)

    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    expect(response.ok()).toBeTruthy()
    expect(jsonData).toMatchObject({
        firstname: 'Tanu',
        lastname: 'Brown',
        totalprice: 372,
        depositpaid: false,
        bookingdates: { checkin: '2015-08-09', checkout: '2023-07-23' },
        additionalneeds: 'Breakfast'
      })

    expect(jsonData.firstname).toEqual('Tanu')

})
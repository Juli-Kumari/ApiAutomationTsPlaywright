import { expect, request, test } from '@playwright/test'

test('DELETE request', async ({ request }) => {
    const response = await request.delete('booking/1844', {
        headers: {
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    })
    expect(response.status()).toBe(201)

    const responseText = await response.text()
    expect(responseText).toEqual('Created')

    // GET request

    const getResponse = await request.get('booking/1844')
    expect(getResponse.status()).toBe(200)
    // expect(getResponse.text()).toEqual('Method Not Allowed')


})
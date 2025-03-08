import { expect, request, test } from '@playwright/test'

test.beforeAll('Authentication using Basic auth: Get Token', async ({ request }) => {
    const response = await request.post('/auth',{
        data: {
            "username" : "admin",
            "password" : "password123"
        }
    })
    console.log(await response.json())
})

test('Authentication with API key ', async ({ request }) => {
    const response = await request.put('booking/4',
        {
            headers: {
                Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
            }
        }
    )
    expect(response.status()).toBe(200)
})
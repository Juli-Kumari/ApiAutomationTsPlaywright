import {expect, test} from '@playwright/test'

test('POST req: ', async({request})=>{
    const response = await request.post('/booking',{
        data: ''
    })
const jsonData = await response.json()
console.log(jsonData)
expect(jsonData.status()).toBe(200)
expect(jsonData.statusText()).toBe('OK')

})

test('GET req: ', async({request})=>{
    
})
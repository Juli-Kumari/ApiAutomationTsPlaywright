import {test} from '@playwright/test'

test('Handle multiple environment', async({page})=>{
 console.log(process.env.URL)

//  const urlValue = <string> process.env.URL
const urlValue = process.env.URL as string
 page.goto(urlValue)
})
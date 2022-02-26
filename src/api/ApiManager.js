const puppeteer = require('puppeteer')
const pageP = puppeteer.launch().then((browser) => browser.newPage())

const BASE_URL = process.env.REACT_APP_BASE_URL
//const BASE_URL = "http://localhost:3001"

export default class ApiManager {
  static async getFoodList(foodName) {
    const url = 'https://focos.hpb.gov.sg/eservices/ENCF/'
    const page = await pageP

    try {
      await page.goto(url)

      await page.type('#txtFoodName', foodName)
      await page.evaluate(() => {
        document.querySelector(
          '#ddlNutrient option:nth-child(10)'
        ).selected = true
      })
      await page.evaluate(() => {
        document.querySelector('#rdPerServing_1').click()
      })
      await page.click('#btnSearch')

      console.log('Searching for: ' + foodName)
      // Wait for search results page to load
      await page.waitForSelector('#gvData')

      console.log('FOUND!')

      // Extract the results from the page
      const stuff = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#gvData tbody tr'))
          .slice(1)
          .map((r) => {
            const tds = r.querySelectorAll('td')
            return {
              name: tds[1].innerText,
              energy: tds[4].innerText + ' ' + tds[5].innerText,
            }
          })
      })
      console.log(stuff)
      return stuff
    } catch (error) {
      page.screenshot({ path: 'error.png' })
      console.error(error)
      return 'failed'
    }
  }
}

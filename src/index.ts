import { Logger, Puppeteer } from './utils'

const main = async () => {
  const browser = await Puppeteer.getBrowser({ isHeadless: true })
  if (browser) {
    const page = await browser.newPage()

    // * An example of crawling a page with CloudFlare applied.
    Logger.debug('🚧  Crawling in progress...')

    const url = ''
    await Puppeteer.goto(page, url)
    // await page.screenshot({ path: 'example.png' })

    Logger.debug('🚧  Getting the hrefs!')

    let divSelector = '#mixImv'

    await page.waitForSelector(divSelector)

    const hrefs = await page.$$eval('body > div > div > div > a', (list) =>
      list.map((elm: HTMLAnchorElement) => elm.href),
    )

    Logger.debug('🚧  Got the hrefs!')

    console.log(hrefs)

    Logger.debug('🚧  Crawling is complete.')
    Logger.debug('🚧  Exit the Puppeteer.')
    browser.close()
  }
}

main()

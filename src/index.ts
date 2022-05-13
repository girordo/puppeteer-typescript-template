import { Logger, Puppeteer } from './utils'

const main = async () => {
  const browser = await Puppeteer.getBrowser({ isHeadless: true })
  if (browser) {
    const page = await browser.newPage()

    Logger.debug('🚧  Crawling in progress...')

    const url = ''
    await Puppeteer.goto(page, url)

    Logger.debug('🚧  Getting the hrefs!')

    let divSelector = '#mixImv'

    await page.waitForSelector(divSelector)

    const divEvaluted = await page.$(divSelector)

    Logger.debug('🚧  Got the hrefs!')

    console.log(divEvaluted)

    Logger.debug('🚧  Crawling is complete.')
    Logger.debug('🚧  Exit the Puppeteer.')
    browser.close()
  }
}

main()

/* eslint-env jest */

import { join } from 'path'
import { renderViaHTTP, findPort, launchApp, killApp } from 'next-test-utils'

const context = {}

describe('Configuration', () => {
  beforeAll(async () => {
    context.appPort = await findPort()
    context.server = await launchApp(join(__dirname, '../'), context.appPort)
  })
  afterAll(() => {
    killApp(context.server)
  })

  describe('MDX-rs Plugin support', () => {
    it('should render an MDX page correctly', async () => {
      expect(await renderViaHTTP(context.appPort, '/')).toMatch(/Hello MDX/)
    })

    it('should render an MDX page with component correctly', async () => {
      expect(await renderViaHTTP(context.appPort, '/button')).toMatch(
        /Look, a button!/
      )
    })
  })
})

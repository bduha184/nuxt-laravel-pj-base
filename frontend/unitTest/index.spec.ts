import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/vue'
import Index from '../pages/index.vue'

describe('Index', () => {
  test('Indexページにタイトルが表示されていること', () => {
    const { container } = render(Index)
    const title = container.querySelector('[data-testid="page-title"]')?.textContent?.trim()
    expect(title).toBe('pages/index.vue')
  })
})

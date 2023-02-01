import { render } from '@testing-library/react'
import App from './App'

describe('App.js', () => {
  it('should render a header', () => {
    const { getByText } = render(<App />)
    expect(getByText('Hello World!')).toBeDefined()
  })
})

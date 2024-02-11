import { render, screen } from '../src/test-setup/test-utils'
export * from '@testing-library/react'

import SessionsPage from '../src/pages/Sessions'
import { Provider } from 'react-redux';
import { store } from '../src/slices/index';
test('Has basic fields', () => {
    render(
        <Provider store={store}>
            <SessionsPage />
        </Provider>)
    expect(screen.getByTestId('header-title')).toBeInTheDocument()
})


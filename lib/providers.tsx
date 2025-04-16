'use client';

import { StyledComponentsRegistry } from './styled-components-registry';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <Provider store={store}>
        {children}
      </Provider>
    </StyledComponentsRegistry>
  );
}

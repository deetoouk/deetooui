import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface ThemeNameState {
  name: string;
}

export default createProviderConsumer<ThemeNameState>(
  {
    name: 'default'
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);

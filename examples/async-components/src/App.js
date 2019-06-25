import { hot, setConfig } from 'react-hot-loader';
import * as React from 'react';
import styled from 'styled-components';
import emoStyled from 'react-emotion';

// import CAsync from './chunks/async-component'
// import { RLoadable1 as Comp1, RLoadable2 as Comp2 } from './chunks/react-loadable';
import { Loadable1 as Comp1, Loadable2 as Comp2 } from './chunks/loadable-components';
// import  { Imported1 as Comp1, Imported2 as Comp2 } from './chunks/react-imported-component'
// import { Universal1 as Comp1, Universal2 as Comp2 } from './chunks/react-universal-component'

const BigText = styled.div`
  font-size: 20px;
`;

const SmallText = emoStyled('div')`
  font-size: 22px;
`;

const indirect = {
  element: () => (
    <SmallText>
      hidden <Counter />
    </SmallText>
  ),
};

const App = () => (
  <div>
    Testing React-Hot-Loader againts "React code splitting" components
    <ul>
      {/*<li>*/}
      {/*Async-components <CAsync />*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*Loadable-components <CLoadableComp />*/}
      {/*</li>*/}
      <li>
        Import <Comp1 />
      </li>
      <li>
        Import <Comp2 />
      </li>
    </ul>
  </div>
);

setConfig({ logLevel: 'debug' });

export default hot(module)(App);

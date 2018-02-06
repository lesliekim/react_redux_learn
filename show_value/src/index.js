import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer';
import { view as ShowValue } from './show';

render(
    <Provider store={ store }>
        <ShowValue />
    </Provider>,
    document.getElementById('root')
);

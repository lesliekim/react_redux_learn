import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer';
import { view as ShowValue } from './show';
import { view as Button } from './button';

render(
    <Provider store={ store }>
        <div>
            <ShowValue />
            <Button />
        </div>
    </Provider>,
    document.getElementById('root')
);

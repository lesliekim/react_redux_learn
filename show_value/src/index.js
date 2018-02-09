import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer';
import { view as ShowValue } from './show';
import { view as Button } from './button';
import { view as Select } from './select';

render(
    <Provider store={ store }>
        <div>
            <ShowValue />
            <Button />
            <Select />
        </div>
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers.js';
import { view as TodoPanel } from './todos/';
import { view as Filter } from './filter/';

render(
<Provider store={ store }>
	<div>
		<TodoPanel/>
		<Filter/>
	</div>
</Provider>,
document.getElementById('root')
);


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers.js';
import TodoPanel from './todo';
import Filter from './filter';

render(
<Provider store={ store }>
	<div>
		<TodoPanel/>
		<Filter/>
	</div>
</Provider>,
document.getElementById('root')
);


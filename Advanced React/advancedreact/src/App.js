import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import List from './List';
import ListFilter from './ListFilter';
import Keys from './Keys';
import ControlledInputs from './ConrolledInputs';
import RegistrationForm from './RegistrationForm';
import ContextAPI from './ContextAPI';
import UseReducerHook from './UseReducerHook';
import UseRefHook from './UseRefHook';
import UsePrevious from './UsePrevious';
import ConfirmationDialog from './Props';
import LiveOrders from './ReactApiExamples';
import SpreadOperator from './SpreadOperator';
import HOC from './HOC';

function App() {
	return (
		<div className='App'>
			<nav>
				<Link to='/' className='nav-item'>
					Homepage
				</Link>
				<Link to='/list' className='nav-item'>
					List
				</Link>
				<Link to='/list-filter' className='nav-item'>
					List Filter
				</Link>
				<Link to='/keys' className='nav-item'>
					Keys
				</Link>
				<Link to='/controlled-inputs' className='nav-item'>
					Controlled Inputs
				</Link>
				<Link to='/registration-form' className='nav-item'>
					Registration Form
				</Link>
				<Link to='/context-api' className='nav-item'>
					Context API
				</Link>
				<Link to='/use-reducer-hook' className='nav-item'>
					Use Reducer Hook
				</Link>
				<Link to='/use-ref-hook' className='nav-item'>
					Use Ref Hook
				</Link>
				<Link to='/use-previous' className='nav-item'>
					Use Previous
				</Link>
				<Link to='/props' className='nav-item'>
					Props
				</Link>
				<Link to='/react-api-examples' className='nav-item'>
					React API Examples
				</Link>
				<Link to='/spread-operator' className='nav-item'>
					Spread Operator
				</Link>
				<Link to='/hoc' className='nav-item'>
					HOCs
				</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Homepage />}></Route>
				<Route path='/list' element={<List />}></Route>
				<Route path='/list-filter' element={<ListFilter />}></Route>
				<Route path='/keys' element={<Keys />}></Route>
				<Route path='/controlled-inputs' element={<ControlledInputs />}></Route>
				<Route path='/registration-form' element={<RegistrationForm />}></Route>
				<Route path='/context-api' element={<ContextAPI />}></Route>
				<Route path='/use-reducer-hook' element={<UseReducerHook />}></Route>
				<Route path='/use-ref-hook' element={<UseRefHook />}></Route>
				<Route path='/use-previous' element={<UsePrevious />}></Route>
				<Route path='/props' element={<ConfirmationDialog />}></Route>
				<Route path='/react-api-examples' element={<LiveOrders />}></Route>
				<Route path='/spread-operator' element={<SpreadOperator />}></Route>
				<Route path='/hoc' element={<HOC />}></Route>
			</Routes>
		</div>
	);
}

export default App;

// Import npm react-router-dom: npm install react-router-dom

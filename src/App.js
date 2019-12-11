import React from 'react';
import './App.css';
import NavigationBar from './components/nav/nav';
import StoreMain from './components/storeMain/storeMain';
import Footer from './components/footer/footer';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<StoreMain />
			<Footer/>
		</div>
	);
}

export default App;
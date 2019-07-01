import React from 'react';
import './App.css';
import NavigationBar from './nav';
import StoreMain from './storeMain/storeMain';
import Footer from './footer/footer';

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
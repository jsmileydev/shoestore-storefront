import React from 'react';
import './App.css';
import NavigationBar from './nav';
import ShopGrid from './storeMain/shop-grid';
import Footer from './footer/footer';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<ShopGrid />
			<Footer/>
		</div>
	);
}

export default App;
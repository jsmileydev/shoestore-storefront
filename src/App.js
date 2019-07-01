import React from 'react';
import './App.css';
import NavigationBar from './nav';
import ShopGrid from './storeMain/shop-grid';
import FooterBar from './footerbar';

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<ShopGrid />
			<FooterBar/>
		</div>
	);
}

export default App;
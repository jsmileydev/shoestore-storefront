import React from 'react';
import './App.css';
import Navbar from './navbar';
import ShopGrid from './shop-grid';
import Footer from './footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<ShopGrid />
			<Footer />
		</div>
	);
}

export default App;
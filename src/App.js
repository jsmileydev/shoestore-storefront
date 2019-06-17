import React from 'react';
import './App.css';
import {Navhead} from './navhead';
import {ShopGrid} from './shop-grid';
import { Footer } from './footer';

function App() {
	return (
		<div className="App">
			<Navhead />
      <ShopGrid/>
			<Footer />
		</div>
	);
}

export default App;

import { Routes, Route } from "react-router-dom";
import News from './News';
import Search from './Search';
import { Header, NavBar } from '@/components';


function App() {

	return (<>
		<div className="wrapper">
			<header><Header /></header>
			<nav><NavBar /></nav>
			<main>
				<Routes>
					<Route index element={<News />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</main>
		</div>
	</>)
}


export default App;
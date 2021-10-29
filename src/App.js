import React, {useState, useEffect} from 'react';
import Sticker from './components/Sticker.js'
import {stickers} from './helper.js'
import { Link ,Route } from "wouter";

function App() {

	const [gifs, setGifs] = useState([]);
	const [keyword, setKeyword] = useState('panda');

	useEffect( function () {
		stickers(keyword)
		.then(some=>setGifs(some))
	}, [keyword])

	return (
		<React.Fragment>
			<Link href="/elf">
				<a className="link">Elfos</a>
			</Link>
			<Route component={Sticker} path="/:keyword">
				{(params) =>
				 <div>Hello, {params.keyword}</div>
				}
			</Route>
{
				gifs.map(gif=>
					<Sticker
						key={gif.id}
						title={gif.title}
						url={gif.url}
						/>
						)
}
		</React.Fragment>
				)
}

export default App;
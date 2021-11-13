import React, {useState} from 'react';
import { Link, useLocation } from "wouter";

const gifspop = ['suga', 'elf', 'bugs', 'loli'];

const Home = () => {

	// const [keyword, setKeyword] = useState('')
	const [letter, setLetter] = useState('');
	const [path, pushLocation] = useLocation();
	// console.log(path)

	const handleSubmit = e =>{
		e.preventDefault();
		if (letter.trim()==='') return;
		// setKeyword(letter);
		pushLocation(`/${letter}`);
	}

	const handleChange = e =>{
		setLetter(e.target.value);
	}

	return (
		<React.Fragment>
			<nav>
				<Link href="/">
					Gifs
				</Link>
			</nav>
			<form
				onSubmit={handleSubmit}
			>
				<input
					onChange={handleChange}
					type="text"
				/>
			</form>
			<div className="links">
				{gifspop.map(gifpop=>(
					<Link key={gifpop} to={`/${gifpop}`}>{gifpop}</Link>
				)
				)}
			</div>
		</React.Fragment>
	)
}

export default Home;
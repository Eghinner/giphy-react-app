import React from 'react';
// import './Sticker.css';

const OnceSticker = ({gifs}) => {
	return (
		gifs.map(gif=>(
			<div className="card" key={gif.id}>
				<img src={gif.url} alt={gif.title} title={gif.title}/>
			</div>
		))

	)
}

export default OnceSticker
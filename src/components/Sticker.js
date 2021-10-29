import React from 'react'

const Sticker = ({title,url}) => {

	// const {url} = params;

	return (
		<div>
			<h3>{title}</h3>
			<img src={url} alt="stickercillos"/>
		</div>
	)
}

export default Sticker
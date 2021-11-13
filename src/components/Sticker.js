import React from 'react'
import OnceSticker from './OnceSticker.js'
import Spinner from './Spinner.js'
import Home from '../pages/Home.js';
import useGifts from './hooks/useGifts.js'

const Sticker = ({params}) => {

	const {word} = params;
	const {cargando, gifs} = useGifts({word})

	return (
		<React.Fragment>
			<Home/>
			<div className="container">
				{cargando
					?<Spinner/>
					:<OnceSticker gifs={gifs}/>
				}
			</div>
		</React.Fragment>
	);
}

export default Sticker;
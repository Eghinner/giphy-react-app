import {useState, useEffect} from 'react';
import {stickers} from '../../helper.js';

const useGifts = ({word}) => {

	const [gifs, setGifs] = useState([]);
	const [cargando, setCargando] = useState(false);

	useEffect( function () {
		setCargando(true)
		stickers(word)
		.then(some=>{
			setGifs(some)
			setCargando(false)
		})
		.catch(e=>{
			setGifs(['Error'])
			setCargando(false)
			console.log(e??'peta')
		})
		.finally(e=>{
			setGifs(['Error'])
			setCargando(false)
		})
	}, [word]);


	return {cargando, gifs}
}

export default useGifts
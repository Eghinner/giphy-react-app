
export function stickers(query) {
	const urlapi = `https://api.giphy.com/v1/stickers/search?api_key=9BXMR8MNgSyytpSBCQkO38ap3VIFQWR0&q=${query}&limit=3&offset=0&rating=g&lang=en`;
	return fetch(urlapi)
	.then(res=>res.json())
	.then(res=>{
		const {data} = res;
		const stickarray = data.map(stick => {
			const {title,id}=stick;
			const {url}=stick.images.fixed_height_small;
			return {title,url,id};
		});
		return stickarray;
	})
}
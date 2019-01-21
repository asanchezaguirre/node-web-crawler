const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv5 = require('uuid/v5');

const downloadpage = async (URL) => {
	const folder = await uuidv5(URL, uuidv5.URL)
	fs.mkdirSync(`./${folder}`, { recursive: true }, (err) =>{
	if (err) throw err;
});
	fs.writeFile(`./${folder}/file.html`, "hola", (err) =>{
	if (err) throw err;
	console.log('The file has been saved');
});
}
downloadpage("https://www.google.com/");
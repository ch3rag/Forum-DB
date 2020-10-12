const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.json({
		message: 'This is Chirag\'s Forum Database',		
	});
});


const port = process.env.PORT || 4444;
app.listen(port);

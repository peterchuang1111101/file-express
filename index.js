const express = require('express');

// 建立第一個 Express 伺服器，監聽 3000 埠口
const app1 = express();
app1.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问静态资源，你可以根据需要更改为特定的域名
	next();
});
app1.use(express.static('public'));
const port1 = 3000;
app1.get('/api/images/:imageName', (req, res) => {
	const imageName = req.params.imageName;
	const imagePath = `${__dirname}/public/images/${imageName}`;
	res.attachment(imagePath);
	res.sendFile(imagePath);
});
app1.get('/api/inlineImages/:imageName', (req, res) => {
	const imageName = req.params.imageName;
	const imagePath = `${__dirname}/public/images/${imageName}`;
	// 设置 Content-Disposition 为 inline
	res.setHeader('Content-Disposition', `inline; filename="${encodeURIComponent(imageName)}"; filename*=UTF-8''${encodeURIComponent(imageName)}`);
	res.sendFile(imagePath);
});
app1.listen(port1, () => {
	console.log(`伺服器 1 運行於 http://localhost:${port1}`);
});

// 建立第二個 Express 伺服器，監聽 3001 埠口
const app2 = express();
app2.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问静态资源，你可以根据需要更改为特定的域名
	next();
});

app2.use(express.static('public'));
const port2 = 3001;

app2.listen(port2, () => {
	console.log(`伺服器 2 運行於 http://localhost:${port2}`);
});

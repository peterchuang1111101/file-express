function getBrowser() {
	const userAgent = window.navigator.userAgent;

	if (userAgent.includes('Chrome')) {
		return 'Google Chrome';
	} else if (userAgent.includes('Firefox')) {
		return 'Mozilla Firefox';
	} else if (userAgent.includes('Safari')) {
		return 'Apple Safari';
	} else if (userAgent.includes('Opera')) {
		return 'Opera';
	} else if (userAgent.includes('Edge')) {
		return 'Microsoft Edge';
	} else if (userAgent.includes('Trident') || userAgent.includes('MSIE')) {
		return 'Internet Explorer';
	} else {
		return 'Unknown';
	}
}

const browser = getBrowser();
document.getElementById('browser').innerHTML = browser;

// download image with fetch
const downloadImageWithFetch = (url, imageName) => {
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');
	const image = new Image();
	image.crossOrigin = 'anonymous';
	image.onload = function () {
		canvas.width = image.width;
		canvas.height = image.height;
		context.drawImage(image, 0, 0);
        
        const extension=url.split(".").pop()
		const dataURL = canvas.toDataURL('image/jpeg');
		const link = document.createElement('a');
		link.href = dataURL;
		link.download = imageName;
	
		link.click();
	
	};
	image.src = url;
};

document.querySelector('#CrossOrigin').addEventListener('click', (e) => {
	e.preventDefault();
	downloadImageWithFetch('http://localhost:3001/images/%E7%8B%9701.jpg', 'dog.jpg');
});

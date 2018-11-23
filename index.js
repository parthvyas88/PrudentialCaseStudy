var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'FirefoxDriver'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('https://openweathermap.org/')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
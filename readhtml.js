
var webPage = require('webpage');
var url ='https://cpj.org/data/killed/?status=Killed&motiveConfirmed%5B%5D=Confirmed&type%5B%5D=Journalist&start_year=1992&end_year=2019&group_by=year';
var fs = require('fs'); 
var page = webPage.create();
var system = require('system');

//page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0'
//page.settings.userAgent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'

page.open(url, function(status) {
    if (status === 'success') {
        fs.write('1.html', page.content, 'w'); 
        console.log('htmlfile ready');
        phantom.exit(); 
    }
})
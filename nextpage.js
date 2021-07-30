var webPage = require('webpage');
var url = 'https://cpj.org/data/killed/?status=Killed&motiveConfirmed%5B%5D=Confirmed&type%5B%5D=Journalist&start_year=1992&end_year=2019&group_by=year';

var fs = require('fs'); 
var page = webPage.create();
var system = require('system');

//page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0';

page.open(url, function(status) {
    if (status === 'success') {
        page.evaluate(function() {
            document.querySelector('a.right:nth-child(3)').click();
        });
        setTimeout(function() {
            var new_url = page.url;
            console.log('URL: ' + new_url);
            phantom.exit();
    }, 2000);
    };
});

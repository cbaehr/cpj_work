// scrape_cpj.js

var webPage = require('webpage');
var page = webPage.create();
var url = 'https://cpj.org/data/killed/?status=Killed&motiveConfirmed%5B%5D=Confirmed&type%5B%5D=Journalist&start_year=1992&end_year=2019&group_by=year'

var fs = require('fs');
var path = '/Users/christianbaehr/Github/cpj_work/cpj_page.html'

page.open(url, function (status) {
	var content = page.content;
	fs.write(path,content,'w')
	phantom.exit();
});
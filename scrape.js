var page = require('webpage').create();
                   page.open('https://cpj.org/data/killed/?status=Killed&motiveConfirmed%5B%5D=Confirmed&type%5B%5D=Journalist&start_year=1992&end_year=2019&group_by=year', function () {
                   console.log(page.content); //page source
                   phantom.exit();
                   });

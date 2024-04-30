const linkBadgeHeight = Vue.createApp({
    data() {
        return {

            // 圖片路徑
            homeSrc: "./images/icon-home-gray.gif",            // 主頁畫面圖片
            profileSrc: "./images/icon-profile-gray.gif",           // 個人簡歷 
            publicationSrc: "./images/icon-publication-gray.gif",       // 發布刊物
            teachingSrc: "./images/icon-teaching-orange.gif",          // 開設課程
            projectSrc: "./images/icon-project-gray.gif",           // 計畫
            advisingSrc: "./images/icon-advising-gray.gif",          // 專題計畫

            // 連結網址

            homeLink: "./index.html",         // 主頁網址
            profileLink: "./profile.html",       // 個人簡歷網址
            publicationLink: "./publication.html",   // 發布刊物
            teachingLink: "./teaching.html",      // 開設課程
            projectLink: "./project.html",       // 計畫
            advisingLink: "./advising.html"       // 專題



        }
    }
}).mount("#linkBadge");

$(document).ready(function () {
    readFile();
});

function readFile() {
    const csvUrl = "./data/teaching.csv";
    const SeasonName = ['Spring', 'Summer', 'Fall', 'Winter'];

    var colspanMaxNum = 0;
    fetch(csvUrl)
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split('\n');

            for (var jndex = 1; jndex < rows.length; jndex++) {
                if (!rows[jndex])
                    continue;
                let col = rows[jndex].split(',')

                let type = col[0];
                let courseName = col[1];

                let season = [];
                for (var i = 2; i < 6; i++)
                    season.push(col[i]);



                let addRow = $('<tr>').attr('rowspan', 2);
                addRow.append($('<td>').text(courseName));

                let timeRow = $('<tr>');
                timeRow.append('<td>');
                var totalCnt = 0;
                for (var i = 0; i < 4; i++) {

                    if (!season[i] || season[i][0] == '\r') {

                        continue;
                    }

                    let time = season[i].split(';');

                    let whichSeason = $('<td>').text(SeasonName[i]);


                    var cnt = 0;
                    for (const year of time) {
                        if (!year || year == '\r')
                            continue;
                        var tempTime = $('<td>').text(year);
                        timeRow.append(tempTime);
                        cnt++;
                    }
                    totalCnt += cnt;

                    whichSeason.attr("colspan", cnt);
                    addRow.append(whichSeason);
                }
                if (totalCnt > colspanMaxNum) {
                    colspanMaxNum = totalCnt;
                }

                if (type == 'undergraduate') {
                    $('#undergraduate').append(addRow);
                    $('#undergraduate').append(timeRow);
                }
                else {
                    $('#graduate').append(addRow);
                    $('#graduate').append(timeRow);
                }

            }

            //$("#timeTile").attr("colspan", colspanMaxNum);
            $("#graduate").attr("colspan", colspanMaxNum);
            $("#undergraduate").attr("colspan", colspanMaxNum);
            $("#graduateTitle").attr("colspan", colspanMaxNum + 1);
            $("#undergraduateTitle").attr("colspan", colspanMaxNum + 1);

            $('#belowTable tr').each(function () {
                var tds = $(this).find('td');

                var t = tds.length;

                if (t < colspanMaxNum + 2) {
                    var colspanValue = colspanMaxNum + 2 - t;
                    $(tds.last()).attr('colspan', colspanValue);
                }
            });
        });



}
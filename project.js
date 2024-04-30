const linkBadgeHeight = Vue.createApp({
    data() {
        return {

            // 圖片路徑
            homeSrc: "./images/icon-home-gray.gif",            // 主頁畫面圖片
            profileSrc: "./images/icon-profile-gray.gif",           // 個人簡歷 
            publicationSrc: "./images/icon-publication-gray.gif",       // 發布刊物
            teachingSrc: "./images/icon-teaching-gray.gif",          // 開設課程
            projectSrc: "./images/icon-project-orange.gif",           // 計畫
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
    const csvUrl = "./data/project.csv";
    var colspanMaxNum = 0;
    fetch(csvUrl)
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split('\n');

            for (var jndex = 1; jndex < rows.length; jndex++) {
                if (!rows[jndex])
                    continue;
                let col = rows[jndex].split(',')

                let addRow = $('<tr>');
                col.forEach(element => {
                    let tempTd = $('<td>').text(element);
                    addRow.append(tempTd);
                });

                $('#project').append(addRow);
            }
        });
}
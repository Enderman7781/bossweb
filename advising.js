const linkBadgeHeight = Vue.createApp({
    data() {
        return {

            // 圖片路徑
            homeSrc: "./images/icon-home-gray.gif",            // 主頁畫面圖片
            profileSrc: "./images/icon-profile-gray.gif",           // 個人簡歷 
            publicationSrc: "./images/icon-publication-gray.gif",       // 發布刊物
            teachingSrc: "./images/icon-teaching-gray.gif",          // 開設課程
            projectSrc: "./images/icon-project-gray.gif",           // 計畫
            advisingSrc: "./images/icon-advising-orange.gif",          // 專題計畫

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
    readFile_Under();
});

function readFile() {
    const csvUrl = "./data/advising.csv";
    fetch(csvUrl)
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split('\n');

            for (var jndex = 1; jndex < rows.length; jndex++) {
                if (!rows[jndex])
                    continue;
                let col = rows[jndex].split(',')

                let addRow = $('<tr>');

                let nameCol = $('<td>');
                let thesisCol = $('<td>');

                console.log(col);

                nameCol.html(col[0] + "<br>" + col[1]);

                var thesisStr = col[2] != "" ? col[2] + "," + col[3] + "." : "";
                thesisCol.html("M.S. Thesis：" + thesisStr + "<br>" + "Email：" + '<a href="mailto:' + col[4] + '" style="color: blue; text-decoration: underline;">' +
                    col[4] + '</a>');

                addRow.append(nameCol);
                addRow.append(thesisCol);

                $('#studentInfo').append(addRow);
            }
        });
}

function readFile_Under() {
    const csvUrl = "./data/advising_undergraduate.csv";
    fetch(csvUrl)
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split('\n');

            for (var jndex = 1; jndex < rows.length; jndex++) {
                if (!rows[jndex])
                    continue;
                let col = rows[jndex].split(',')

                let addLi = $('<li>');

                console.log(col);

                let groupMember = "";
                for (var kndex = 3; kndex < col.length; kndex++) {
                    if (col[kndex] == "") {
                        break;
                    }
                    else if (kndex == 3) {
                        groupMember += col[kndex];
                    }
                    else {
                        groupMember += "/" + col[kndex];
                    }
                }
                let grade = col[0];
                let projectName = col[1];
                let addtionInfo = col[2] != "" ? "(" + col[2] + ")" : "";

                addLi.text(grade + "級：" + groupMember + ",\"" + projectName + "\"" + addtionInfo);

                $('#stu_info_undergraduate').append(addLi);
            }
        });
}
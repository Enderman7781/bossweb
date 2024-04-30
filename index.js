const linkBadgeHeight = Vue.createApp({
    data() {
        return {

            // 圖片路徑
            homeSrc:        "./images/icon-home-orange.gif",            // 主頁畫面圖片
            profileSrc:     "./images/icon-profile-gray.gif",           // 個人簡歷 
            publicationSrc: "./images/icon-publication-gray.gif",       // 發布刊物
            teachingSrc:    "./images/icon-teaching-gray.gif",          // 開設課程
            projectSrc:     "./images/icon-project-gray.gif",           // 計畫
            advisingSrc:    "./images/icon-advising-gray.gif",          // 專題計畫

            // 連結網址

            homeLink:           "./index.html",         // 主頁網址
            profileLink:        "./profile.html",       // 個人簡歷網址
            publicationLink:    "./publication.html",   // 發布刊物
            teachingLink:       "./teaching.html",      // 開設課程
            projectLink:        "./project.html",       // 計畫
            advisingLink:       "./advising.html"       // 專題
            


        }
    }
}).mount("#linkBadge")

const centerInfo = Vue.createApp({
    data() {
        return {
            introduceContent: `received his B.S. degree in
            Computer Science from Tamkang University in 1990, the M.S. degree in
            Computer Science and Engineering from Yuan Ze University in 1994,
            and the
            Ph.D. degree in Computer Science and Information Engineering from
            National Chiao Tung University in 2004. From 1994 to 2002, he worked
            at Accton
            Technology Corporation as a software engineer. In February 2005, he
            joined
            the faculty of the Department of Computer Science and Information
            Engineering, National Changhua University of Education, as an
            assistant
            professor and then became an associate professor in August 2008. His
            research interests include design and analysis of network
            protocols, wireless networks, and active queue
            management. Dr. Chan is also a member of the IEEE and IEICE.`,

            nationNumber:   "886",
            telNumber:      "4 7232105",
            faxNumber:      "4 7211284",
            extNumber:      "8442",
            mailAddress:    "ycchan@cc.ncue.edu.tw",
            mailToAddress:  "mailto:ycchan@cc.ncue.edu.tw",


        }
    }

}).mount("#information")

const otherLink = Vue.createApp({
    data(){
        return{
            NPLabUrl:       "https://people.csie.ncue.edu.tw/ycchan/research%20direction%20of%20network%20protocol%20lab.pdf",
            NPLabImgSrc:    "./images/NPLab.jpg",
            G100Url:        "https://people.csie.ncue.edu.tw/ycchan/class.htm",
            G100ImgSrc:     "./images/g100-icon.jpg",
            departmentUrl:  "http://www.csie.ncue.edu.tw/",
            departmentImgSrc:"./images/CSIE.jpg",
            ncueUrl:        "http://www.ncue.edu.tw/",
            ncueImgSrc:     "./images/NCUE.jpg"
        }
    }
}).mount("#otherLink")


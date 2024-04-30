const linkBadgeHeight = Vue.createApp({
    data() {
        return {

            // 圖片路徑
            homeSrc: "./images/icon-home-gray.gif",            // 主頁畫面圖片
            profileSrc: "./images/icon-profile-orange.gif",           // 個人簡歷 
            publicationSrc: "./images/icon-publication-gray.gif",       // 發布刊物
            teachingSrc: "./images/icon-teaching-gray.gif",          // 開設課程
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
}).mount("#linkBadge")

const personalInfo = Vue.createApp({
    data() {
        return {
            Phd: "Ph.D., Department of Computer Science and Information Engineering, National Chiao Tung University, 1996/9-2004/6.",
            MS_D: "M.S., Department of Computer Science and Engineering, Yuan Ze University, 1992/9-1994/6.",
            BS_D: "B.S., Department of Computer Science, Tamkang University, 1986/9-1990/6.",

            Intrest_1: "Internet Congestion Control",
            Intrest_2: "Wireless Networks",
            Intrest_3: "Applications of IoT",

            pe_1: "Aug. 2015 ~ present: Section Chief, Network and Information System Management Section, Office of Library & Information Services, National Changhua University of Education",
            pe_2: "Aug. 2014 ~ July 2015: Section Chief, Communications Network Section, Computer Center, National Changhua University of Education",
            pe_3: "Aug. 2008 ~ present: Associate Professor, Department of Computer Science and Information Engineering, National Changhua University of Education",
            pe_4: "Feb. 2007 ~ Sept. 2007: Section Chief, Audio-Visual Instruction Section, Center for Teaching Excellence, National Changhua University of Education",
            pe_5: "Feb. 2005 - July 2008: Assistant Professor, Department of Computer Science and Information Engineering, National Changhua University of Education",
            pe_6: "Feb. 2005 ~ July. 2005: Adjunct Assistant Professor, Department of Computer Science and Information Engineering, Chaoyang Uinversity of Technology",
            pe_7: "Aug. 2004 ~ Jan. 2005: Assistant Professor, Department of Computer Science and Information Engineering, Chaoyang Uinversity of Technology",
            pe_8: "July 2002 ~ Aug. 2002: Summer Visiting, Broadband Network Lab, Carleton University, Canada",
            pe_9: "Sept. 1994 ~ Sept. 1997 & Oct. 1998 ~ Aug. 2002: Engineer, Accton Technology Corporation"
        }
    }

}).mount("#personalInfo")
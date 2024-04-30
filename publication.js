const linkBadgeHeight = Vue.createApp({
    data() {
        return {

            // 圖片路徑
            homeSrc: "./images/icon-home-gray.gif",            // 主頁畫面圖片
            profileSrc: "./images/icon-profile-gray.gif",           // 個人簡歷 
            publicationSrc: "./images/icon-publication-orange.gif",       // 發布刊物
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
}).mount("#linkBadge");

const journal_data = Vue.createApp({
    data() {
        return {
            journal_1: "Yi-Cheng Chan and Dai-Jiong Lin, “The Design of an AP-Based Handoff Scheme for IEEE 802.11 WLANs,” International Journal of e-Education, e-Business, e-Management and e-Learning, Vol. 4, No. 1, pp. 72-76, February 2014. [EI]",
            journal_2: "Yi-Cheng Chan and Ya-Yi Hu, “Adaptive Network Coding Scheme for TCP over Wireless Sensor Networks,” International Journal of Computers, Communications & Control, Vol. 8, Issue 6, pp. 800-811, December 2013. [SCI-Expanded]",
            journal_3: "Yi-Cheng Chan, Chia-Liang Lin, Chia-Tai Chan, and Cheng-Yuan Ho, “CODE TCP: A Competitive Delay-Based TCP,” Computer Communications, Vol. 33, Issue 9, pp. 1013-1029, June 2010. [SCI-Expanded, EI]",
            journal_4: "Yi-Cheng Chan and Ming-Chun Liao, “Collision-Aware Backoff Mechanisms for IEEE 802.11 WLANs,” Journal of Convergence Information Technology, Vol. 5, No. 2, pp. 88-100, April 2010. [EI]",
            journal_5: "Cheng-Yuan Ho, Yaw-Chung Chen, Yi-Cheng Chan, and Cheng-Yun Ho, “Fast Retransmit and Fast Recovery Schemes of Transport Protocols: A Survey and Taxonomy,” Computer Networks, Vol. 52, Issue 6, pp. 1308-1327, April 2008. [SCI-Expanded, EI]",
            journal_6: "Yi-Cheng Chan, Chia-Liang Lin, and Cheng-Yuan Ho, “Quick Vegas: Improving Performance of TCP Vegas for High Bandwidth-Delay Product Networks,” IEICE Transactions on Communications, Vol. E91-B, No. 4, pp. 987-997, April 2008. [SCI, EI]",
            journal_7: "Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “WARD: A Transmission Control Protocol-Friendly Stateless Active Queue Management Scheme,” IET Communications, Vol. 1, Issue 6, pp. 1179-1186, Dec. 2007. [SCI, EI]",
            journal_8: "Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “WARD: A Deterministic Fluid Model,” IET Communications, Vol. 1, Issue 4, pp. 711-717, August 2007. [SCI, EI]",
            journal_9: "Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “TCP-Ho: A Congestion Control Algorithm with Design and Performance Evaluation,” IEICE Transactions on Communications, Vol. E90-B, No. 3, pp. 516-526, March 2007. [SCI, EI]",
            journal_10: "Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “Gallop-Vegas: An Enhanced Slow-Start Mechanism for TCP Vegas,” Journal of Communications and Networks, Vol. 8, No. 3, pp. 351-359, Sept. 2006. [SCI]",
            journal_11: "Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “RoVegas: A router-based congestion avoidance mechanism for TCP Vegas,” Computer Communications, Vol. 27, Issue 16, pp. 1624-1636, October 2004. [SCI-Expanded, EI]",
            journal_12: "Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “RedVegas: Performance Improvement of TCP Vegas over Heterogeneous Networks,” IEICE Trans. Fundamentals, Vol. E87-A, No. 7, pp. 1672-1680, July 2004. [SCI-Expanded, EI]",
            journal_13: "Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “Design and Performance Evaluation of an Improved TCP Congestion Avoidance Scheme,” IEE Proceedings – Communications, Vol. 151, No. 1, pp. 107-111, Feb. 2004. [SCI, EI]",
            journal_14: "Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “An Enhanced Congestion Avoidance Mechanism for TCP Vegas,” IEEE Communications Letters, Vol. 7, Issue 7, pp. 343-345, July 2003. [SCI, EI]",
            journal_15: ""
        }
    }
}).mount('#journal')

const conference_inter_data = Vue.createApp({
    data() {
        return {
            inter_1: "Yi-Cheng Chan and Shu-Hao Hsu, “Adaptive Congestion Control Scheme According to Burst Assembly State for TCP Over OBS Networks,” Tokyo International Conference on Engineering and Applied Sciences (EAS 2017), pp. 32-41, Tokyo, Japan, December 2017.",
            inter_2: "Yi-Cheng Chan and Wan-Chen Chang, “A Delay-Based TCP for Data Center Networks,” The 4th International Conference on Advances in Information Processing and Communication Technology (IPCT 2016), pp. 25-29, Rome, Italy, August 2016. [EI]",
            inter_3: "Yi-Cheng Chan and Tzu-Hsuan Chiou, “A Threshold Controlled TCP for Data Center Networks,” 2016 International Symposium on Computer, Consumer and Controly (IS3C 2016), pp. 767-771, Xian, China, July 2016. [EI]",
            inter_4: "Yi-Cheng Chan and Ya-Yi Hu, “TCP Protocol Combined with Network Coding Scheme on Wireless Sensor Networks,” The 5th International Conference on Engineering and Applied Sciences (ICEAS 2015), Vol. 2, pp. 366-375, Hokkaido, Japan, July 2015.",
            inter_5: "Yi-Cheng Chan and Yu-Shuo Lee, “An Enhanced Congestion Avoidance Mechanism for Compound TCP,” 2014 International Conference on Multimedia, Communication and Computing Application (MCCA 2014), pp. 51-54, Xiamen, China, October 2014. [EI]",
            inter_6: "Yi-Cheng Chan, Chien-Yu Chen, and Yu-Shuo Lee, “Reorder Adapting TCP,” Lecture Notes in Electrical Engineering (LNEE), Volume 234, pp 41-47, 2013. (ICITES, Changhua, Taiwan, December 2012). [EI]",
            inter_7: "Yi-Cheng Chan and Hon-Jie Lee, “A Hybrid Congestion Control for TCP over High Speed Networks,” The Sixth International Conference on Genetic and Evolutionary Computing (ICGEC 2012), pp. 530-533, Kitakyushu, Japan, August 2012. [EI]",
            inter_8: "Yi-Cheng Chan and Yi-Po Lin, “A Downlink Burst Mapping Algorithm for IEEE 802.16-2009 Networks,” 2011 International Conference on Data Engineering and Internet Technology (DEIT 2011), pp. 824-827, Bali, Indonesia, March 2011. [EI]",
            inter_9: "Yi-Cheng Chan and Tai-Ta Chen, “Path Selection with Zone Load-Balance for IEEE 802.16j T-MMR Networks,” 2010 International Computer Symposium (ICS 2010), pp. 620-625, Tainan, Taiwan, December 2010. [EI]",
            inter_10: "Yi-Cheng Chan and Sheng-Hong Hsu, “A Network Managed Location Identification Scheme for IEEE 802.16m Networks,” IET International Conference on Wireless Sensor Network (IET-WSN 2010), pp. 249-254, Beijing, China, November 2010. [EI]",
            inter_11: "Yi-Cheng Chan, Ming-Chun Liao, and Ching-Hsiang Chu, “A Collision-Aware Backoff Mechanism for IEEE 802.11 WLANs,” IEEE International Conference on Intelligent Computing and Intelligent Systems (ICIS 2009), Vol. 3, pp. 284-288, Shanghai, China, November 2009. [EI]",
            inter_12: "Yi-Cheng Chan, Chang-Lung Wu, and Chin-Yu Lai, “Congestion-Aware Downlink Scheduling for IEEE 802.16j Multi-Hop Relay Networks,” The Fourth International Wireless Internet Conference (WICON 2008), Maui, Hawaii, USA, November 2008. [EI]",
            inter_13: "Yi-Cheng Chan, Fang-Chun Liu, and Yuan-Tzu Yen, “Throughput Modeling of TCP Parallelization,” 2008 International Computer Symposium (ICS 2008), Vol. 1, pp. 591-597, Taipei, Taiwan, November 2008. [ICS 2008 Best Paper Award]",
            inter_14: "Yi-Cheng Chan, Chia-Liang Lin, and Fang-Chun Liu, “A Competitive Delay-Based TCP,” IEEE International Conference on Research, Innovation and Vision for the Future (RIVF 2008), pp. 134-140, Ho Chi Ming City, Vietnam, July 2008. [EI]",
            inter_15: "Yi-Cheng Chan, Chia-Tai Chan, Cheng-Yuan Ho, and Chia-Liang Lin, “Improving Performance of TCP Vegas for High Bandwidth-Delay Product Networks,” International Conference on Advanced Communication Technology (ICACT’06), Vol. 1, pp. 459-464, Phoenix Park, Korea, February 2006. [EI]",
            inter_16: "Yuan-Rung Yang, Chia-Tai Chan, Yaw-Chung Chen, and Yi-Cheng Chan, “Smart Window Adjustment for XCP’s Congestion Management,” International Conference on Advanced Communication Technology (ICACT’06), Vol. 1, pp. 476-479, Phoenix Park, Korea, February 2006. [EI]",
            inter_17: "Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “A TCP-Friendly Stateless AQM Scheme for Fair Bandwidth Allocation,” IEEE International Conference on Autonomic and Autonomous Systems & International Conference on Networking and Services (ICAS /ICNS 2005), pp. 14-19, Papeete, Tahiti, French Polynesia, October 2005. [EI]",
            inter_18: "Cheng-Yuan Ho, Chen-Hua Shih, Yaw-Chung Chen, and Yi-Cheng Chan, “An Aided Congestion Avoidance Mechanism for TCP Vegas,” Lecture Notes in Computer Science (LNCS), 3619, pp. 961-971, August 2005. (ICCNMC’05, Zhangjiajie, Hunan, China) [EI]",
            inter_19: "Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “An Enhanced Slow-Start Mechanism for TCP Vegas,” IEEE International Conference on Parallel and Distributed Systems (ICPADS’05), pp. 405-411, Fukuoka, Japan, July 2005. [EI]",
            inter_20: "Cheng-Yuan Ho, Yi-Cheng Chan, and Yaw-Chung Chen, “An Efficient Mechanism of TCP-Vegas on Mobile IP Networks,” IEEE Global Internet Symposium (GI’05), pp. 2776-2780, Miami, Florida, USA, March 2005. [EI]",
            inter_21: "Yi-Cheng Chan, Chia-Tai Chan, Yaw-Chung Chen, and Cheng-Yuan Ho, “Performance Improvement of Congestion Avoidance Mechanism for TCP Vegas,” IEEE International Conference on Parallel and Distributed Systems (ICPADS’04), pp. 605-612, Newport Beach, California, USA, July 2004. [EI]",
            inter_22: "Yi-Cheng Chan, Chia-Tai Chan, and Yaw-Chung Chen, “Performance Improvement of TCP Vegas over Heterogeneous Networks,” IEEE International Conference on Distributed Computing Systems Workshops (ICDCS MNSA’04), pp. 36-41, Tokyo, Japan, March 2004. [EI]",
            inter_23: ""
        }
    }
}).mount("#international")

const conference_domestic_data = Vue.createApp({
    data() {
        return {
            domestic_1: "陳秉廉, 詹益禎, “解決資料中心網路中Incast問題的調步延遲式TCP,” 2021全國智慧運算會議(SCC2021), 金門大學, Aug. 4-6, 2021.",
            domestic_2: "盧咨亦, 詹益禎, “AMT-TCP:應用在資料中心TCP之可調適標記閥值,” 2021全國智慧運算會議(SCC2021), 金門大學, Aug. 4-6, 2021.",
            domestic_3: "洪境鴻, 詹益禎, “心電圖信號中P和T點的混合偵測方法,” 第十五屆國際健康資訊管理研討會(UHIMA2020), Paper ID: A072, 嘉南藥理大學, July 4, 2020.",
            domestic_4: "Chih-Hsiang Chen and Yi-Cheng Chan, “A scalable IoT architecture based on fog computing: A smart home luminaire system use case,” 第二十四屆行動計算研討會 (The 24th Mobile Computing Workshop –MC2019), Paper ID: 03, 台南市關子嶺, August 26-27, 2019.",
            domestic_5: "陳偉誠, 詹益禎, “CT-TCP:用於資料中心網路的門檻值控制TCP,” 2018工程與民生科技技術研討會(TCEL2018), pp.155-160, 大華科技大學, June 20, 2018.",
            domestic_6: "柯喬翎, 詹益禎, “在資料中心網路中分析DCVegas緩啟動的瞬態行為,” 2018工程與民生科技技術研討會(TCEL2018), pp.161-166, 大華科技大學, June 20, 2018.",
            domestic_7: "賴亮丞, 林均皓, 顏紹軒, 王昱竣, 詹益禎, “無線自走車與行動裝置之結合應用:二維格狀平面中考慮斷點之最短路徑演算法,” 2014年民生電子研討會( 2014 Workshop on Consumer Electronics – WCE 2014), pp. 78-83, 東海大學, November 29, 2014.",
            domestic_8: "蘇韋翔, 陳冠瑋, 黃祐彬, 張凱鈞, 黃子原, 詹益禎, “一個以RSSI 為基礎的無線感測網路定位機制,” 2012第七屆智慧生活科技研討會 (The 7th Intelligent Living Technology Conference – ILT 2012), pp. 2411-2417, 勤益科技大學, June 1, 2012.",
            domestic_9: "陳宗諒, 曾千瑜, 詹益禎, “Concave-Convex TCP：一個適用於高頻寬網路之混合式TCP,” 2010第十六屆資訊管理暨實務研討會 (The 16th Conference on Information Management & Practice), pp. 212-1, 雲林科技大學, December 11, 2010.",
            domestic_10: "朱慶翔, 邱昶豪, 田惠文, 林煜泓, 詹益禎, “以協定為基礎的垃圾郵件防堵機制之研究,” 2009臺灣網際網路研討會 (Taiwan Academic Network Conference 2009 – TANET 2009), pp. 196, 彰化師範大學, October 28-30, 2009.",
            domestic_11: "賴秦宇, 嚴苑慈, 黃孃瑩, 詹益禎, “區域網路節點定位機制,” 2008臺灣網際網路研討會 (Taiwan Academic Network Conference 2008 – TANET 2008), pp. 18, 義守大學, October 20-22, 2008.",
            domestic_12: "嚴苑慈, 賴秦宇, 黃孃瑩, 林宏勳, 韓志杰, 詹益禎, “異質性網路管理系統之設計與實作,” 2008第二屆資訊科技應用學術研討會 (Information Technology and Applications Conference 2008 – ITAC 2008), 中國科技大學, October 17, 2008.",
            domestic_13: "詹益禎, 王孝恩, 徐志榮, 黃柏霖, 許嘉樺, 黃瀚璋, 黃琦閔, “高頻寬延遲乘積網路上之TCP Vegas效能改進研究,” 2007資訊科技國際研討會 (2007 International Conference on Advanced Information Technologies – AIT 2007), pp. 98, 朝陽科技大學, April 28, 2007.",
            domestic_14: `詹益禎, 關聖威, 鄭鳳生, "A Real Time Video API Library for Desktop Conference Systems," 1994電腦應用研討會 (1994 Workshop on Computer Applications), pp. 154-158, 中興大學(南投縣蕙蓀林場), April 22-23, 1994.`,
            domestic_15: ""
        }
    }
}).mount("#domestic")

const thesis_data = Vue.createApp({
    data() {
        return {
            thesis_1: `Yi-Cheng Chan, "Study and Design of TCP Congestion Control Techniques," Ph.D. Thesis, Department of Computer Science and Information Engineering at  National Chiao Tung University, June 2004.`,
            thesis_2: `Yi-Cheng Chan, "Architecture and Support for Multiuser Multimedia Conferences," Master Thesis, Department of Computer Science and Engineering at Yuan Ze University, June 1994.`
        }
    }
}).mount("#thesis")

$(document).ready(function () {
    readFile();
});

function readFile() {
    //alert("JQREADY");
    const csvUrl = "./publication.csv";
    //console.log(globalGateInfo);
    fetch(csvUrl)
        .then(response => response.text())
        .then(csvData => {
            // 解析 CSV 数据
            const rows = csvData.split('\n');
            // 创建 HTML 表格并填充数据
            rows.forEach(row => {
                var col = row.split(',')

                var type = col[0];
                var str = col[1];
                var adding = $('ul').text(str)
                if (type == "journal_paper") {
                    $("$journal").append(adding)
                }
            });
        });

}
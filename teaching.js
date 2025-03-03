function readFile() {
    const csvUrl = "./data/teaching.csv";
    const seasonNames = ['Spring', 'Summer', 'Fall', 'Winter'];
    let coursesByYear = {};
    let gradCourses = new Set();  // 存 Graduate 課程
    let undergradCourses = new Set(); // 存 Undergraduate 課程

    fetch(csvUrl)
        .then(response => response.text())
        .then(csvData => {
            const rows = csvData.split('\n');

            for (let j = 1; j < rows.length; j++) {
                if (!rows[j].trim()) continue;
                let cols = rows[j].split(',');

                let type = cols[0].trim();  // Graduate or Undergraduate
                let courseName = cols[1].trim();

                // 分類 Graduate 和 Undergraduate
                if (type === "graduate") {
                    gradCourses.add(courseName);
                } else if (type === "undergraduate") {
                    undergradCourses.add(courseName);
                }

                for (let i = 2; i < 6; i++) {
                    if (!cols[i] || cols[i].trim() === '') continue;

                    let timePeriods = cols[i].split(';'); // 可能有多個時間段
                    for (let period of timePeriods) {
                        period = period.trim();
                        if (!period) continue;

                        // **處理年份範圍（如 2008~2010）**
                        let years = parseYearRange(period);
                        for (let year of years) {
                            if (!coursesByYear[year]) {
                                coursesByYear[year] = [];
                            }
                            coursesByYear[year].push({ courseName, season: seasonNames[i - 2], type });
                        }
                    }
                }
            }

            renderCourseDropdown([...gradCourses], [...undergradCourses]);
            renderTimeline(coursesByYear);
        });
}

function parseYearRange(yearStr) {
    let years = [];
    let rangeMatch = yearStr.match(/^(\d{4})~(\d{4})$/);

    if (rangeMatch) {
        let startYear = parseInt(rangeMatch[1]);
        let endYear = parseInt(rangeMatch[2]);

        for (let y = startYear; y <= endYear; y++) {
            years.push(y.toString());
        }
    } else {
        years.push(yearStr); // 單一年份
    }

    return years;
}
// **生成指定類別的下拉選單**
function renderCourseDropdown(gradCourses, undergradCourses) {
    let dropdown = document.getElementById('CourseDropdown');
    let grad_option = document.createElement('option');
    grad_option.text = '(Graduate)'; grad_option.value = ""; grad_option.setAttribute('disabled', '');
    let undergrad_option = document.createElement('option');
    undergrad_option.text = '(Undergraduate)'; undergrad_option.value = ""; undergrad_option.setAttribute('disabled', '');
    dropdown.innerHTML = '<option value="" disabled selected>Select Course</option>';

    dropdown.appendChild(grad_option);
    gradCourses.forEach(course => {
        let option = document.createElement('option');
        option.value = course;
        option.textContent = course;
        dropdown.appendChild(option);
    });
    dropdown.appendChild(undergrad_option);
    undergradCourses.forEach(course => {
        let option = document.createElement('option');
        option.value = course;
        option.textContent = course;
        dropdown.appendChild(option);
    });

}

// **渲染時間軸**
function renderTimeline(coursesByYear) {
    const timelineContainer = document.getElementById('timeline');
    timelineContainer.innerHTML = '';

    let sortedYears = Object.keys(coursesByYear).sort((a, b) => b - a);
    const seasonOrder = { "Spring": 1, "Summer": 2, "Fall": 3, "Winter": 4 };

    for (let year of sortedYears) {
        let yearBlock = document.createElement('div');
        yearBlock.className = 'timeline-item';
        //yearBlock.id = ;

        let yearTitle = document.createElement('h3');
        yearTitle.id = `year-${year}`;
        yearTitle.textContent = year;
        yearTitle.className = 'timeline-year';
        yearBlock.appendChild(yearTitle);

        let courseList = document.createElement('div');
        courseList.className = 'course-list';

        // **按照 Spring → Summer → Fall → Winter 排序**
        let sortedCourses = coursesByYear[year].sort((a, b) => {
            return seasonOrder[a.season] - seasonOrder[b.season];
        });

        for (let course of sortedCourses) {
            let courseDiv = document.createElement('div');
            courseDiv.className = `course-item ${course.type}`;
            courseDiv.dataset.courseName = course.courseName;
            courseDiv.dataset.courseType = course.type;
            courseDiv.innerHTML = `<strong>${course.courseName}</strong> (${course.season})`;
            courseList.appendChild(courseDiv);
        }

        yearBlock.appendChild(courseList);
        timelineContainer.appendChild(yearBlock);
    }
}

// **點擊下拉選單後，高亮對應課程的年份**
function highlightCourse(courseName) {
    // 讓所有課程變淡
    document.querySelectorAll('.course-item').forEach(course => {
        course.style.opacity = '0.3';
    });

    // 讓所有年份變淡
    document.querySelectorAll('.timeline-item h3').forEach(yearTitle => {
        yearTitle.style.opacity = '0.3';
    });

    let firstHighlighted = null; // 用來記錄第一個高亮的課程

    document.querySelectorAll(`.course-item[data-course-name="${courseName}"]`).forEach(course => {
        course.style.opacity = '1'; // 讓選中的課程亮起來

        // 讓課程所屬的年份標題亮起來
        let yearTitle = course.closest('.timeline-item').querySelector('h3');
        if (yearTitle) {
            yearTitle.style.opacity = '1';
        }

        // 記錄第一個高亮的課程，稍後用來滾動
        if (!firstHighlighted) {
            firstHighlighted = course;
        }
    });

    // **滾動到第一個高亮課程**
    if (firstHighlighted) {
        firstHighlighted.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
// 頁面載入時讀取 CSV
document.addEventListener("DOMContentLoaded", readFile);





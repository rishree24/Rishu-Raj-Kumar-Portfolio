document.addEventListener("DOMContentLoaded", function () {
    createPortfolio();
});

function createPortfolio() {
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.type = "text/css";
    styles.href = "styles.css";
    document.head.appendChild(styles);

    const body = document.body;

    // Header
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="container">
            <h1>Rishuraj Kumar</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;
    body.appendChild(header);

    // About Section
    const about = document.createElement("section");
    about.id = "about";
    about.innerHTML = `
        <div class="container">
            <h2>About Me</h2>
            <p>Data Analyst | Data Science | Machine Learning</p>
            <p>
                Have gained good exposure to understanding various aspects of Data Analysis and Business Analysis through the Post Graduate program which has developed a great sense of confidence at a very personal level. In addition, I've dabbled in machine learning and statistical modeling. My strong analytical skills and unwavering enthusiasm for data science motivate me to take on difficulties in the real world. Hence, I seek an entry-level position in the area of Data Analyst, Business Analyst, Data Science, and related fields where I can share my skills and expand my capabilities further in the pursuit of progressive career advancement.
            </p>
            <h3>Profile Summary</h3>
            <ul>
                <li>I have 3+ years of overall experience in preparing the data and giving insight into business in the domain of Life Insurance.</li>
                <li>Hand-on experience in MySQL, Python, and ML—worked on various kinds of project</li>
                <li>Possess excellent knowledge in the domain of Life Insurance.</li>
            </ul>
            <h3>Certifications</h3>
            <ul>
                <li>Pursuing Post Graduate in Data Science and Machine Learning course from Data Trained.</li>
                <li>Post Graduate Program in Business Analysis from Purdue University (Simplilearn).</li>
                <li>Completed Post Graduate Diploma in Banking & Finance by IFBI(NIIT).</li>
                <li>Diploma in Computer Application from NIIT.</li>
            </ul>
        </div>
    `;
    body.appendChild(about);

    // Skills Section
    const skills = document.createElement("section");
    skills.id = "skills";
    skills.innerHTML = `
        <div class="container">
            <h2>Skills</h2>
            <h3>Data Analysis Skills</h3>
            <ul>
                <li>MySQL, WEB Scrapping (BeautifulSoup, Selenium-Automated), Power BI(Visualization), MS Visio, Diagrams.net, Seaborn, Python (Programming Language), Exploratory Data Analysis, Predictive Modelling, Text Mining, Natural Language Processing (NLP), Machine Learning Algorithms, Machine Learning.</li>
            </ul>
            <h3>Other Tools</h3>
            <ul>
                <li>MS Office, JIRA - (User Stories), Agile Methodology, BRD</li>
            </ul>
            <h3>Technical Skills</h3>
            <ul>
                <li>SQL Server (T-SQL)</li>
                <li>Python</li>
                <li>Statistical Analysis</li>
                <li>Data Visualization</li>
                <li>Machine Learning</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Big Data</li>
                <li>Deep Learning</li>
                <li>Artificial Intelligence</li>
            </ul>
        </div>
    `;
    body.appendChild(skills);

    // Experience Section
    const experience = document.createElement("section");
    experience.id = "experience";
    experience.innerHTML = `
        <div class="container">
            <h2>Experience</h2>
            <article>
                <h3>Data Science Intern</h3>
                <p><strong>Flip Robo Technologies</strong> | Dec’23 - Present</p>
                <ul>
                    <li>Concepts and techniques of data science, including data mining, machine learning, statistical analysis, deep learning, and cloud computing. Design accurate and scalable prediction algorithms</li>
                    <li>Proficiently leveraged Python libraries, including Pandas and NumPy, to conduct comprehensive data analysis and extract valuable insights from extensive datasets. Visualize the dashboard and share with higher management</li>
                    <li>Collaborate with the engineering team to bring analytical prototypes to production</li>
                    <li>Generate actionable insights for business improvements</li>
                </ul>
            </article>
            <article>
                <h3>Cluster Manager</h3>
                <p><strong>Aditya Birla Sunlife Insurance Com Ltd.</strong> | Sep’21-July'22</p>
                <ul>
                    <li>Collecting data from a variety of sources, such as primary and secondary databases, and surveys.</li>
                    <li>Organizing the data in the proper formats for analysis.</li>
                    <li>Analyzing the data using statistical methods to draw insight and conclusions.</li>
                </ul>
            </article>
            <article>
                <h3>Associate Business Development Manager</h3>
                <p><strong>Kotak Life Insurance Ltd.</strong> | Nov’18-Sep’21</p>
                <ul>
                    <li>Drive business/campaigns and provide solutions using data-driven insights, leveraging the use of digital channels and finding business opportunities</li>
                    <li>Responsible for dashboards, data support, segmentation/scorecards, analytics, and customer insights.</li>
                    <li>Completed in-depth analyses for business optimization projects boosting revenue by 15%</li>
                </ul>
            </article>
        </div>
    `;
    body.appendChild(experience);

    // Projects Section
    const projects = document.createElement("section");
    projects.id = "projects";
    projects.innerHTML = `
        <div class="container">
            <h2>Projects</h2>
            <article>
                <h3>Netflix Analysis</h3>
                <p><strong>Data Trained</strong> | Dec-23 to Dec-23</p>
                <ul>
                    <li>The dataset reveals an increasing trend in the number of movies released over the years.</li>
                    <li>Comparison of TV shows to movies indicates both have seen growth over the years.</li>
                    <li>Identification of frequently appearing actors and directors.</li>
                    <li>Potential correlation between certain actors/directors and higher ratings.</li>
                    <li>Analysing release date patterns for TV shows can identify peak viewership periods.</li>
                    <li>Certain months or seasons may be associated with higher engagement.</li>
                </ul>
            </article>
            <article>
                <h3>Canteen Management System</h3>
                <p><strong>Simplilearn</strong> | Mar-23 to Mar-23</p>
                <ul>
                    <li>Analyse user purchasing behavior to identify popular menu items. Understand peak hours and days of canteen usage.</li>
                    <li>Identify trends in dietary preferences, such as vegetarian, vegan, or specific cuisine choices.</li>
                    <li>Collect and analyze customer feedback to improve menu items and service quality.</li>
                    <li>Identify trends in customer satisfaction and areas for improvement.</li>
                    <li>Implement changes based on feedback to enhance the overall dining experience.</li>
                </ul>
            </article>
        </div>
    `;
    body.appendChild(projects);

    // Footer Section
    const footer = document.createElement("footer");
    footer.id = "contact";
    footer.innerHTML = `
        <div class="container">
            <h2>Contact</h2>
            <p>
                Rishuraj Kumar<br>
                Email: rishree24@gmail.com<br>
                DOB: 08/08/1990<br>
                Languages Known: English, Hindi<br>
                LinkedIn: <a href="https://www.linkedin.com/in/rishu-raj-kumar-0618a9180">linkedin.com/in/rishu-raj-kumar-0618a9180</a><br>
                GitHub: <a href="https://github.com/rishree24">github.com/rishree24</a><br>
                Phone: 8468986994
            </p>
        </div>
    `;
    body.appendChild(footer);
}

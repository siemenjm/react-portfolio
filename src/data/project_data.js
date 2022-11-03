import thriftScreenshot from '../assets/Thrift_screenshot.png';
import sleeperSheetsScreenshot from '../assets/Sleeper_Sheets_screenshot.png';

const projectData = [
    {
        title: 'Thrift',
        shortDesc: 'Financial Tracking App',
        screenshot: thriftScreenshot,
        screenshotAlt: 'Thrift screenshot showing a financial graph',
        longDesc: 'Thrift is a money-tracking web application built using the PERN stack. Users can track their transactions, accounts, and the institutions that they belong to. Some basic charts are also implemented using <a href=\'https://www.chartjs.org/\' target=\'_blank\' rel=\'noopener noreferrer\' >Chart.js</a>.',
        projectTech: [
            'PostgreSQL',
            'Express.js',
            'React.js',
            'Node.js'
        ],
        githubLink: 'https://github.com/siemenjm/backend-thrift',
        deployedLink: 'https://thrift-financial.netlify.app/',
    },
    {
        title: 'Sleeper Sheets',
        shortDesc: 'Fantasy Football Data App',
        screenshot: sleeperSheetsScreenshot,
        screenshotAlt: 'Sleeper Sheets screenshot showing matchup page',
        longDesc: 'Sleeper Sheets is a full-stack MERN fantasy football application that consumes the Sleeper API to grab a user\'s Sleeper teams, leagues, stats, projections, etc. and display that data to the user.',
        projectTech: [
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js'
        ],
        githubLink: 'https://github.com/siemenjm/frontend-sleeper-sheets',
        deployedLink: 'https://funny-dango-f7628e.netlify.app/',
    },
];

export default projectData;
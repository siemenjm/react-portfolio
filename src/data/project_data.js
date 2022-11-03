import battleshipScreenshot from '../assets/Battleship_screenshot.png';
import instagramCloneScreenshot from '../assets/Instagram_Clone_screenshot.png';
import sleeperSheetsScreenshot from '../assets/Sleeper_Sheets_screenshot.png';
import thriftScreenshot from '../assets/Thrift_screenshot.png';

const projectData = [
    {
        title: 'Thrift',
        shortDesc: 'Financial Tracking App',
        screenshot: thriftScreenshot,
        screenshotAlt: 'Thrift screenshot showing a financial graph',
        longDesc: 'Thrift is a money-tracking web application built using the PERN stack. Users can track their transactions, accounts, and the institutions that they belong to. Some basic charts are also implemented using Chart.js.',
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
    {
        title: 'Instagram Clone',
        shortDesc: 'Full Stack Social Media App',
        screenshot: instagramCloneScreenshot,
        screenshotAlt: 'Instagram Clone screenshot showing user posts page',
        longDesc: 'Instagram is a full-stack web application in which users are able to post images for the world to see, along with browsing other\'s images, liking them, and commenting on them. Our team of three developers implemented a version of Instagram that allows users to do the same things that they can on the real version in a one-week sprint.',
        projectTech: [
            'MongoDB',
            'Express.js',
            'Node.js'
        ],
        githubLink: 'https://github.com/siemenjm/Instagram-Clone-Project2',
        deployedLink: 'https://instagram-clone-713.herokuapp.com/',
    },
    {
        title: 'Battleship',
        shortDesc: 'Frontend Boardgame App',
        screenshot: battleshipScreenshot,
        screenshotAlt: 'Battleship screenshot showing gameboard',
        longDesc: 'Battleship is a two-player game in which the goal is to sink all of your opponent’s ships before they sink yours. You must search the ocean for their fleet and once found, call down cannon-strikes onto their positions until they are destroyed. Beware, they fire back!!!',
        projectTech: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        githubLink: 'https://github.com/siemenjm/battleship-project1',
        deployedLink: 'https://siemenjm.github.io/battleship-project1/',
    },
];

export default projectData;
import img0 from '../../assets/images/t-metro.png';
import img1 from '../../assets/images/wanderlust.png';
import img2 from '../../assets/images/ticktask.png';

const ProjectData = [
    {
        id: 0,
        title: 'T-Metro',
        description: 'T-Metro is an E-commerce website where people can buy albums and merch of the artist TWICE. Website features include product search, cart checkout, payment with Stripe, user registration and login.',
        tech: ['HTML', 'CSS', 'Sass', 'Javascript', 'React', 'Redux', 'Node.js', 'Firebase', 'Stripe API', 'Express'],
        image: img0,
        url: 'www.t-metro.com',
        repo: 'https://github.com/steven2596/t-metro'
    },
    {
        id: 1,
        title: 'Wanderlust Travels',
        description: 'Wanderlust is the travel and tour agency which manages tour packages for Switzerland. It’s a landing page which showcases the agency’s services, tour packages it offers, benefits, etc.',
        tech: ['HTML', 'CSS', 'Sass', 'Javascript', 'React'],
        image: img1,
        url: 'https://wanderlust-travels.netlify.app',
        repo: 'https://github.com/steven2596/wanderlust-travels'
    },
    {
        id: 2,
        title: 'TickTask',
        description: 'TickTask is a full-stack web application which helps you to make a list of tasks with different priority levels and keep track of completed tasks. It also includes dark mode which helps reduce eye strain in low-light conditions.',
        tech: ['HTML', 'CSS', 'Sass', 'Javascript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
        image: img2,
        url: 'www.ticktask.com',
        repo: 'https://github.com/steven2596/ticktask'
    }
];

export default ProjectData;
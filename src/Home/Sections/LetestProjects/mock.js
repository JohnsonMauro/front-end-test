import Project1 from '@images/project-1.jpg';
import Project2 from '@images/project-2.jpg';
import Project4 from '@images/project-4.jpg';

const projectsData = [
  {
    id: 1,
    image: {
      src: Project4,
      alt: "A image of Mac's dispositives like a computer, tablet and cellphone.",
    },
    title: 'Velocity - Desingned for Products',
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the middle of text.`,
    externalLink: '#',
  },
  {
    id: 2,
    image: {
      src: Project1,
      alt: 'A image of a woman were retrating a system app.',
    },
    title: 'Tempo - Desingned for Startups',
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the middle of text.`,
    externalLink: '#',
  },
  {
    id: 3,
    image: {
      src: Project2,
      alt: 'A image of a cellphone with a Delta app.',
    },
    title: 'Delta - Desingned for Mobile Apps',
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the middle of text.`,
    externalLink: '#',
  },
];

export { projectsData };

/*
  data.js

  The starting data to load the page with
*/

// some default tasks to show on page load
export const TASKS = [
  {
    id: 1,
    text: 'React Student Dashboard',
    due: '2026-10-18',
    completed: false
  },
  {
    id: 2,
    text: 'Semantics and Code Gen modules for compiler',
    due: '2026-10-18',
    completed: false
  },
  {
    id: 3,
    text: 'Continue learning Rust for project',
    due: 'Sometime in November',
    completed: false
  }
];

// 4 classes to show
export const CLASSES = [
  {
    id: 1,
    courseName: 'Principles of Programming Languages',
    desc: `Learn how the compiler turns high-level source code into machine code
    and the many parts of the compiler, the syntax of programming languages and language design,
    parse trees, and other language design topics.`
  },
  {
    id: 2,
    courseName: 'Internet Programming',
    desc: `Internet Programming teaches you about front-end development and later about full-stack
    development by using hands-on learning and projects. I will eventually be making a full-stack
    app with a backend, frontend, database, and api.`
  },
  {
    id: 3,
    courseName: 'Algorithms',
    desc: `Your typical DSA class that every computer science student takes. We learn a few of the common
    searching and sorting algorithms, basic and some advanced data structures, and discuss mock interview
    questions to prepare for future job interviews that test algorithm knowledge.`
  },
  {
    id: 4,
    courseName: 'Introduction to Computer Vision and Image Processing',
    desc: `We learn about linear classifiers, neural networks, CNNs, and other similar
    computer vision topics. This introductory course has math, coding, deep learning, and
    other topics all combined into the curriculum.`
  }
];

export const ABOUT_PROJECT = `
This project is to learn the basics of React and using React States to manage
and update the page instead of using manual DOM manipulation. The other learning objectives
include data flow through passing props around the components, creating/using reusable components,
creating/using dynamic arrays, altering the view without using a router/changing pages.
`

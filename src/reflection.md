# Reflection

This page contains the project reflection documentation.

## GitHub Link

[You can find the project repository here](https://github.com/CJQuintero61/react-dashboard)

## Component Hierarchy and Data Flow

The dashboard itself is simple and has 3 nav items in the header for the 3 views:
the classes, the to do list, and the about this project view.

The js code works by importing the data to read from `data.js` where `App.js` reads
it and creates the state variables and callback functions to update those state variables.
From `App.js`, the state var and call back function are passed to the component that needs
it. Ex, the theme and setTheme() function are passed to the header component
because the header component uses them to pass to the button component for what
to do when the theme button is clicked.

Props are all documented in component docstrings and all my components
define PropTypes too.

## Controlled Form Mechanics

The form handles input for tasks by checking for an empty task name.
Tasks can be made with no due date, but require a name. Under the hood,
there is also a random UUID created to make unique task ids too
when tasks are created.

My task form handles dynamic text being typed
by using `onChange={(event) => setText(event.target.value)}` where if this
line is missing, you can't enter text at all. This line actually updates the text
in the task box every keystroke.

When the form is submitted, it calls handleSubmit() which is defined in TaskForm.js
which calls the callback function addTask() from App.js which uses the spread
operator to keep all current tasks, then appends the new task to the task list.

When deleting a task, the current array is filtered by the task to delete's ID
so only the task you want to delete is removed and others are kept. This is done
from the task item component (not the task form) where clicking delete
calls the callback function which was passed by App.js and App.js defines
the callback and performs the filtering.

## AI Use

### App.css Styles

I used AI to fully generate `App.css` for me to add styling to the project. I felt that
the point of this project is to learn about react components and state variables
and state callbacks, which I do think I have a good grasp on, so I used AI to make
the styling for me since I didn't feel like it trivialized the purpose of the project
and saved some time.

Although the styles were fully AI generated, I did make sure to implement the actual
logic for what buttons and states actually do when the page is interacted with as
to follow the purpose of the project.

I didn't use tailwind or any other styling besides regular `.css`.

### General Help

AI was used for a lot of general help such as syntax, explaining the instructions, helping
me check the requirements, explaining how the code works, suggestions to clean up logic,
and other general purposes.

Some of the changes I made that were from AI include, but are not limited to

- using `&&` in App.js instead of if else checks for what view to show
- using `oneOf([])` in my prop types to be more specific instead of a general `PropTypes.string`
- reviewing my work for bugs/error, missing documentation, and misleading comments

### Making the Header

I had help making the header, specifically adding the callback function for clicks
as a parameter to pass to the buttons. I knew the header needed buttons to change
the view and that params would be passed to buttons but AI helped fill the gap on
how to add the state changing function to the buttons. I'm talking about
`onClick={() => onChangeView('Classes')}` these lines on the button props for state changing.

### Creating the Task Form, Task List, and Task Items

AI helped me make these 3 components since at first I tried to do it
all in one component so that the to do page would show a large task component.

Instead AI told me I was trying to combine many separate ideas into a large component
when that could be broken down into their own components then just combined by
listing them `App.js` which is what I did. In the to do page, you'll
see I have the task form first to add tasks, then a small task
summary which just counts how many tasks in the task list are marked as
complete, then the task list which calls .map() to create individual task items.

Doing this was really helpful to break down the code into those react-like
components and to simplify what I was trying to do.

I added the task summary component near the end and by this point from making
the other components and passing props, I didn't really need any help for this.

### The Label for the task items

AI told me that by adding the task `<span>` I had to the label element
where the checkbox was defined, this would allow clicking the task name
to also toggle it as completed/incomplete which is a nice touch.

Before I had a regular checkbox in the input element and this small
change was really nice.

### Adding data.js

Originally I threw all the data that would be loaded on the page into app.js
since that is where my state variables are defined and their callback functions.
I then realized it was getting messy so I moved it to a data file
where it could be read instead. AI helped me debug by I kept running into
errors and turns out anything that will be imported has to be marked as `export`
even if the data I was making wasn't a fully fledged component. Simply adding
`export const ...` was enough to fix this.

### Prop Types and Type Safety

In all my code, regardless of the language, I like knowing the types
of the data that I'm working with and good documentation. You'll notice
all my functions have docstrings with thier args list and what they return
if they return something. 

After the crash course video where prop types were introduced, I knew I was
going to use them since I like good code documentation, and AI said that
react prop types no longer actually type check so what I was doing
was purely for documentation purposes. This wasn't a huge deal to me
as I typically code in python where type hints also do nothing,
but I still like having the documentation for what every variable is expected to be.

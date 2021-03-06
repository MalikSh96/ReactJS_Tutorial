# Lesson 1
# What is ReactJS
ReactJS is an open source javascript library, and is often used as the **V** in the **MVC (Model-View-Controller)**, as is a library for
creating ***user interfaces***.

In short, ReactJS is an open source library for building user interfaces.

ReactJS is **NOT** a framework, and it focusses on **UI** only, and not other aspects of an application like for example routing or HTTP requests., it is responsible for only building rich user interfaces.

ReactJS has a rich ecosystem, which can help you handle routing and HTTP requests and other functionalities, because ReactJS plays really well with other libraries and is more than capable of building full-fledged web applications.

# Why learn React, theoretically
It is not going to die down anytime soon, because it is created and maintained by Facebook.

It also has a huge community behind it, which will help you search for solutions for eventual problems because of its wide use, and other developers may already have solved an issue that you have.

React is also in demand skillset.

# Why learn React, technically
React has a ***Component Based Architecture***, and this lets you break down your application into small encapsulated parts, which can then be composed to make more complex UIs. 

For example: 

A webpage is splitted into components, such as a main content area, navigation area, a sidebar, a footer and so on. 
Each section represents a **component** which when composed in the right way make up the entire website.

ReactJS takes allows you to build such components with javascript, reusable components which can then be used throughout your webpage, and components can hold both **html** code but also **javascript** logic, which then allows you to listen to ***user actions***, to display content dynamically, to update the **UI** whenever a change happens, without having to reach out to a server and ***fetch*** a new view.

Components also make it possible to write reusable code.

Another key point is that React is declarative, and this means that we just have to tell React what we want, and React will build the actual UI with its React-DOM library, this is the ***declarative*** paradigm, to give a relatable example:

***You go an artist, you ask the artist to draw a landscape, you don't tell them how to draw the landscape, it is up to the artist*** - This is declarative, you tell what has to be done and the artist will get it done for you.

The same goes goes for React, we have to tell React what the UI should look like, and React will create the actual UI, React will make it painless for you to create complex UIs by abstracting away the dificult parts.

React will handle efficiently updating and rendering of just the right components in your application when your data changes.

DOM updates are handled gracefully in React.

You can seamlessly integrate React into any of your applications, be it a portion of your page or a complete page or even an entire application itself, React will fit right in.

Once you have a good grasp on React, you can start building mobile applications with React Native.

# Lesson 2
# Prerequisites to get started with React
HTML, CSS and JavaScript fundamentals are absolutely necessary.

For this course we will also make use of ES6.

For JavaScript (in this project) be aware of `this` keyword, `filter`, `map` and `reduce` functions.

For ES6 be aware of `let`, `const`, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment.

# The steps to be done
We will be working in the following order:

1. React **fundamentals**.
2. React and **HTTP**.
3. **Routing** with React.
4. State management with **Redux**.
5. Taking a look at useful **utilities/libraries** that will work well with React. 

# Setting up development environment
For ReactJS, we need 2 things installed:

1. [Node](https://nodejs.org/en/)
2. Text editor

# Creating a new React application using the **Create-react-app** package.
We will be making use of [this](https://github.com/facebook/create-react-app). **Create React App** is a command line interface tool that allows you to quickly create and run React applications with no configurations.

This means that you simply run a command and an entire React project is created for you.

To start creating our React application we do the following: 

```
npx create-react-app my-app
cd my-app
npm start
```
***npx*** is a npm package runner which gets installed when you install Node, and that is why we are directly able to run `npx create-react-app <project_name>` without having to install it, npx takes care of that for us. 

# Alternate approach for creating a new React application
In this approach we install the **Create-react-app** package globally and then use the package to generate the projects.

```
npm install create-react-app -g
create-react-app <project_name>
```

# Lesson 3
# Folder structure
`package.json` file contains the dependencies and the scripts required for the project

`node_modules` folder is the folder in which all the dependencies are installed, it is generated when you run `create-react-app` command or when you run `npm install`

`public/index.html`, `index.html` is the only html you will have in your application, you are building single page application, and this is it, the view might dynamically change in the browser it is this `index.html` file that gets served up, and `index.html` contains the root dom node.

Typically you will not add any code to `index.html`, maybe some changes in the head tag, but definitely **not** in the body tag. We want React to control the UI.

And for that purpose we have **one** `div` tag with `id="root"` -> `<div id="root"></div>` - At one time the React application takes over this `div` tag and is ultimately responsible for the UI.

`src` folder is the folder you will be working with the most during development, the starting point for your React application is `index.js`.

In `index.js` you specify the root component which is the `App` component and the ***DOM*** element which will be controlled by React. The DOM element in this is an element with an `id` of `root`. 

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
The `App` component is present in `App.js`, and `App.js` is responsible for the html displayed in the browser - In other words, the `App` component represents the view, which you see in the browser.

# LESSON 4
# Components
In React a component represents a part of the UI. The component that contains all inner components is the **Root (App)** component. 

Each of the inner components only describe a part of the UI, however all the components come together to make up the entire application.

Components are also reusable, the same component can be used with different properties to display different information.

# Component in code
A component in code is usually placed in JavaScript file, for example `AppComponent` is placed in `App.js`.

# Component types
In React there exist 2 component types:

1. Stateless Functional Component.

Function component are literally JavaScript functions, they return html which describes the UI, for example:

```
function welcome(props){
  return <h1>Hello, {props.name}</h1>;
}
```

2. Stateful class component

Class components are regular ES6 classes that extend the component class from the React library, they must contain a ***render*** method which in turn returns html, for example:

```
class Welcome extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

# LESSON 5
# Functional Components
Functional components are just JavaScript functions, they can optionally receive an object of properties (props), and return html which describes the UI.
The html is actually something known as **JSX**, bur for the sake of understanding it for now, we will call it html.

# LESSON 6
# Class Components
Class components are basically ES6 classes, similar to a functional component, a class component also can optionally receive properties (props) as input, and return html (***jsx***). Apart from the props a class component can also maintain a **private** internal state, in simpler words it can maintain some information, which is private to that component and use that information to describe the UI.

# Using Functional Component or Class Component
**Functional Components**
- Simple functions, receiving props and returning a declaration.

- Try and use Functional Components as much as possible (if it is possible to use Functional or Class components, use always Functional).

- **Advantage**: Absence of `this` keyword which you will encounter in a **class** based component.

- **Advantage**: You will be forced to think of a solution without using ***state***. For example, if you have a number of components, each with their own private ***state***, maintenance and debugging your application is kind of dificult. 

- Functional components tend to be without any complicated logic and are mainly responsible for the UI. 

**Class Components**
- Is more feature rich.

- They can maintain their own private data, which is also called ***state***.

- They can contain complicated/complex UI logic.

- They can provide life-cycle hooks.

- Class components are called ***stateful/smart/container*** components.

# LESSON 7
# Using **Hooks**
Hooks is a feature that lets you use state and other react features without writing a class, in other words you can use states in **Functional Components** aswell now.

# LESSON 8
# **JSX**
**JavaScript XML (JSX)** is an extension to the JavaScript language syntax. With the react library, it is an extension to write xml-similar code for elements and components.

JSX tags have a tag name, attributes and children.

JSX is **not** a necessity for write React applications, but JSX makes your react code simpler and elegant.

JSX ultimately transpiles to pure JavaScript which is understood by the browsers.

Each JSX element is syntactic sugar for calling `React.createElement()`, and that is why you have to import the react library when you use JSX.

**`Hello.js`** file
```
import React from 'react';

//This is the JSX version of the Hello component
// const Hello = () => {
//     return (
//         <div className='dummyClass'>
//             <h1>Hello Malik Sharfo!</h1>
//         </div>
//     )
// }

const Hello = () => {
    //createElement() accepts 3 parameters, at minimum
    //1st parameter, a string which specifies the html tag to be rendered
    //2nd parameter, we get to pass any optional props - Is an object of k/v pairs that will be applied to the element
    //3rd parameter, is the children for the html element (in this case children for our 'div' tag)
    //createElement() can accept any number of elements as children.
    return React.createElement(
        'div', 
        {
            id: 'hello',
            className: 'dummyClass'
        }, 
        React.createElement('h1', null, 'Hello Malik, how are you?'));
}

export default Hello;
```

# JSX differences
- `Class` replaced by `className`
- `for` replaced by `htmlFor`
- camelCase property naming convention (fx. onclick -> onClick, tabindex -> tabIndex)

# LESSON 9
# Properties (props)
Props is the optional input that your component can accept, it also allows the component to be dynamic.
To specify props for a component you specify them as attributes.

To specify a name property you add a `name` attribute, and to the attribute you assign the value.

**`App.js`**
```
<Greet name='Souheib'/>
<Greet name='Mack'/>
<Greet name='Abdoulie'/>
```
**`Greet.js`**
```
const Greet = (props) => {
    console.log(props);
    return <h1>
            Hello {props.name} a.k.a {props.heroName}! 
            {/* <p>This is looking good</p> */}
           </h1>
}
```
So props is just an object that contains the attributes and the values which have been passed from the parent component.

Sometimes it is also possible that you might not have an idea (hardcoded) as to what content is being passed in, what we want the component to render that unknown content. You can do that by specifying the content between the opnening and closing tags of the component and retrieving it using the ***reserved*** children property in the props object.

For the properties you know for sure are going to be passed, you can pass them as attributes. If you have no clue what is going to be passed as props, or if you have to pass in dynamic html content, pass it **in** between the component tags, and in the component defintion simply render the content using `props.children`. If something is specified it is rendered in the browers and if nothing is passed `props.children` simply renders nothing.

**`App.js`**
```
<Greet name='Malik' heroName='The marker'> 
  <p>This is children props</p>
</Greet>
```

**`Greet.js`**
```
const Greet = (props) => {
  console.log(props);
  return (
    //we can only return one html element, so we have to enclose all of our content in one div wrapper tag
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}!
        {/* <p>This is looking good</p> */}
      </h1>
      {props.children}
    </div>
  )
}
```
For props in **class** components, the props are available through **`this.props`** which is reserved in class components.

```
class Welcome extends Component {
  render(){
    return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}!</h1>
  }
}
```

**All in all**, when specifying the components you can include additional attributes, react is going to bundle all such attributes into an object which **we/you** by convention call as **props**. In the component definition you can access any attribute you want to and render dynamic content.

There is one **strict** rule that follows with props, and that is that props are **immutable**, or in simpler words their value can **not** be changed.

# LESSON 10
# State
There is another way to influence what is rendered on the screen, and that is the **state** of the component.

# Props vs State
**Props**
- Props gets passed to the component
- Function parameters
- Props are immutable (the parent owns the props and **can't** be changed by the children)
- Props can be accessed using the `props` (functional components) and `this.props` (class component) parameters

**State**
- State is managed within the component
- Variables declared within the function body
- The component has full control -> state **can** be changed
- State can be accessed using the `useState` (functional components) Hook and `this.state` (class components)

Ultimately both props and state holds information that influences the UI in the browser.

A state is nothing but an object that is privately maintained inside a component, a state can influenced what is rendered in the browser, and lastly state can be changed within the component.

**`Message.js`**
```
import React, { Component } from 'react';
class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor'
        };
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}!</h1>
                <button onClick={
                    () => this.changeMessage()}
                >
                    Subscribe
                </button>
            </div>
        )
    }
}

export default Message;
```
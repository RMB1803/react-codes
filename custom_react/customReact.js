function customRender(reactElement, Container) {
    /* 
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    Container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    Container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);

/*
REACT FLOW 
 We have an HTML file where we embed our index.js file and it contains a <div id='root'></div>
 In index.js we import react and reactDOM and the function App that we created in App.js file, we get the root 
 element using document.getElementbyId('root'), we then render our react element into root.
 In the App element that we create, we store our html and other things that we want to get into our HTML file in 
 the form of a function App() and return our html elements and then we export the function App
 */
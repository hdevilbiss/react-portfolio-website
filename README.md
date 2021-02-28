# ACME Meditation

An animated React portfolio website with three pages: home, about, and contact. Uses styled components instead of Sass.

![A screenshot of the about section reading ACME Mobile Meditation Institute we bring the calm to you](docs/images/about-section-screenshot.jpg)

## Get Started

1. Clone the remote. `git clone https://github.com/hdevilbiss/react-portfolio-website.git`
1. Move into the new folder. `cd react-portfolio-website`
1. Install the Node dependencies. `npm i`
1. Start the server; a browser will pop up after some time. `npm start`

**This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).**

## Routing

The `react-router-dom` package enables page routing.

```jsx
import {Switch, Route} from "react-router-dom";
```

The Route component has a path attribute which tells under which URI paths to render its containing items.

For example, anytime that `/` is present in the URI, the `<Home />` component will be rendered.

```jsx
<Route path="/">
    <Home />
</Route>
```

This is true for URIs `/`, `/contact`, `/shop`... Any time that `/` is there.

### Switch

To ensure that `<Home />` only renders on exactly `/`, wrap all the routes inside of a switch component, providing an **`exact` attribute** to the base URI, `/`.

```jsx
<Switch>
    <Route path="/" exact>
        <Home />
    </Route>
    <Route path="/work">
        <OurWork />
    </Route>
    <Route path="/contact">
        <ContactUs />
    </Route>
</Switch>`
```

### Link

The React Router DOM package has a `Link` component which can be used in place of HTML `<a>` tags. Instead of an `href` attribute, `<Link>` uses a `to` attribute.

```jsx
<ul>
{links.map(({name, route}, idx) => {
    return (
    <li key={idx}>
        <Link to={route}>
        {name}
        </Link>
    </li>
    )
})}
</ul>
```

## Framer Motion

Install and import `motion` from the [framer-motion package](https://www.framer.com/motion/) to get cool animations in React.

`npm i framer-motion`

`import { motion } from "framer-motion";`

### Motion

Use `motion` to create animated HTML elements. For example, make an animation `<h2>` heading.

```jsx
<motion.h2
    animate={{opacity: 1, transition: {duration: 2}}}
    initial={{opacity: 0}}
>
    We bring
</motion.h2>
```

### Initial and Animate

The `animate` property contains an object with CSS properties to indicate the end-state of the animation. The `initial` property indicates what should be the initial state for that property.

### Ease

The `ease` property can be used to specify the [ease type](https://www.framer.com/api/motion/types/#tween.ease).

### Stagger Children and when

The `staggerChildren` property receives a duration to know how much to stagger each child animation.

The `before` property can indicate whether the parent animation should run before or after the children animations.

### Exit Animation

Use `AnimatePresence` to animate components when they get removed from the React tree (`exit`).

The `exitBeforeEnter` property indicates that the incoming animation should wait until the `exit` animation is done before starting.

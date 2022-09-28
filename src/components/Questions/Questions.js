import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h2>
                    How does react work?
                </h2>
                <p>
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                </p>
            </div>
            <div>
                <h2>
                    What is the difference between State and Props?
                </h2>
                <p>
                    Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                </p>
            </div>
            <div>
                <h2>
                    What is useEffect() used for ?
                </h2>
                <p>
                    We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component
                </p>
            </div>
        </div>
    );
};

export default Question;
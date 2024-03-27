# Child to Parent Communication in React

Define Callback Function in Parent: In the parent component, we define a callback function that will receive data from the child component.

Pass Callback Function to Child Component: We pass this callback function as a prop to the child component.

Invoke Callback Function in Child: In the child component, when an event occurs or when data needs to be passed to the parent, we invoke the callback function passed from the parent, and we can pass data as an argument to this function.

Handle Data in Parent Component: Inside the parent component, the callback function receives the data passed from the child component. We then handle this data as needed, such as updating the parent component's state.

Re-render Parent Component: Once the parent component's state is updated, React automatically re-renders the parent component, reflecting any changes in the user interface.

That's the basic flow of passing data from a child to a parent component in React using callback functions. This pattern allows for effective communication between components in a React application.

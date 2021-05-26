# Component Life Cycle and Methods

-- Every React component goes through a lifecycle and we can use LifeCycle mthods to tap into it's lifecycle.
-- Every component in react application goes through MOUNTING, UPDATING, UNMOUNTING PHASE.

# Mounting Phase
-- This is where the component is first created and ready to mount the dom.
-- In here we have access to serveral lifecycle hooks and they all fire in some order.

1. Constructor method
-- not necessary to call.
-- it offers antther way to set the state of the component.

2. getDerivedStateFromProps()
-- It exists for one purpose only. It enables the component to update its internal state as a result of changes in props.
-- It triggers on first render and when we receive updated props from parent component, it triggers as well.
-- we receive the props and the current state of the component where the method is called and we can compare the props we receive to the current state if needed and then return a new state object or null if there is no changes.
-- this method is not often used.

3. render method
-- this is where react takes our jsx and preapres it to render it to the dom.
-- required method in a class component lifecycle.

4. componentDidMount()
-- this fires when the component first mounts.
-- good place to get any external data from db.


# Updating Phase
1.getDerivedStateFromProps()
-- triggers when the state updates or props recieved changed and we receive next props on current updated state.

2. shouldComponentUpdate()
-- this recives the next props and next states and we can compare the old props with the new props and old state with the new state.
-- return false if we want to protect the component from updating and re rendering.
-- check old props with new, return true if differernt, when we need an update and re render.
-- alternatives is to use pure components in react.

3. render()

4. getSnapshotBeforeUpdate()
-- get read access to the dom before the change is actually committed.
-- get current value from the dom. eg - window position and return that from the method
-- return value is passed to the final updated hook

5. componentDidUpdate()
-- this fires when there is chnage of state or props.
-- called after the jsx template is rendered to the dom. we get write access to the dom.
-- good place to get any external data from a db.
-- if we update the state here we will get into infinite loop.

    componentDidUpdate(prevProp, prevState) {
        console.log("component updated");
        console.log(prevProp, prevState);
    }


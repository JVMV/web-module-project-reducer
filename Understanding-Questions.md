# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
onClick action runs eventHandler
eventHandler declares an action calling addOne
addOne returns a string
action is dispatched to the reducer
reducer switches to action.type and calls case ADD_ONE
ADD_ONE returns a copy of state with an updated state.total + 1
Change of state causes re-render
* TotalDisplay shows the total plus 1.

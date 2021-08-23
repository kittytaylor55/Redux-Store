
X Install react, redux, and react-redux
X create a store.js file in the utils directory
import {createStore} from 'redux'
import reducers from './reducers'
add an initialState variable (leave as empty object to start with)
create a store variable by calling createStore with your reducers and initialState variables
export default store variable

X go into the reducers.js file and add export default reducers at the bottom

X In the src/App.js file
import { Provider } from 'react-redux'
import store from './store'
Change StoreProvider to just be Provider
add store prop and pass in store variable instead of a value property

X Everywhere we are are doing: const [state, dispatch] = useStoreContext() , replace with:
import {useDispatch, useSelector} from 'react-redux'
const dispatch = useDispatch()
const state = useSelector((state) => state)

X Add the "initial state" value from the utils/GlobalState.js file and add it to the initialState value in the store.js file
If you can delete the GlobalState.js file without breaking any functionality, you have successfully refactored app to use redux
(edited)


Work with a partner to add comments describing the functionality of the code found in [reducers.js](.Unsolved/client/src/utils/reducers.js).

## 📝 Notes

What is the purpose of the action argument that gets passed to the reducer function?

How can we account for multiple types of actions inside the reducer?

Refer to the documentation: 

[React documentation on useReducer](https://reactjs.org/docs/Hooks-reference.html#usereducer)

---

## 💡 Hints

How do we make sure that the database is seeded?

Which `npm` package allows us to run both the front end and the back end at the same time? How do you start it?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Why do we create variable names for each action type in `actions.js`?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
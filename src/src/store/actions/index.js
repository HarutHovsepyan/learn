import { actionAdd,actionMinus } from "./countActions";
import * as PostsAction from "./postsActions"
const countAction = { add: actionAdd, minus:actionMinus };

export {countAction,PostsAction}
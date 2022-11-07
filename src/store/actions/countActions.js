import { CountTypes} from '../types';

function actionAdd(count) {
  return {
    type: CountTypes.PLUS,
    count:count
    }
}
function actionMinus(count) {
  return {
    type: CountTypes.MINUS,
    count:count
    }
}
export {actionAdd,actionMinus}
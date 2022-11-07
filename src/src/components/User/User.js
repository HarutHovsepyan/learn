import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { LanguageContext, UserContext } from '../../contexts';
import { translates } from '../../languages';
import { countAction } from '../../store/actions';

function User(props) {
  const user = useContext(UserContext);
  const language = useContext(LanguageContext);
  const dispatch = useDispatch()
  const pluse = useCallback(() => {
    dispatch(countAction.add(5))
  }, [dispatch])
  const minus = useCallback(() => {
    dispatch(countAction.minus(5))
  }, [dispatch])
  const pluse10 = useCallback(() => {
    dispatch(countAction.add(10))
  }, [dispatch])
  return (
    <div>
      <p>{translates[language.lng]["language"]} {language.lng}</p>
      <p> {translates[language.lng]["name"]}:{user.name}</p>
      <p>{translates[language.lng]["sureName"]}:{user.sureName}</p>
      <button onClick={pluse}>+</button>
      <button onClick={pluse10}>+10</button>
      <button onClick={minus}>-</button>
      
    </div>
  );
}


export default User;
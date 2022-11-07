import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { LanguageContext } from '../../contexts';
import { selectCount } from '../../store/selectors';

function LanguageBar(params) {
  const language = useContext(LanguageContext);
  const count = useSelector(selectCount);
  
  return <button
    onClick={() => {
      language.change(language.lng === "am" ? "en" : "am");
      // setLng(lng === "am" ? "en" : "am");
    }}
  >Change Language { count}</button>; 
}

export default LanguageBar;
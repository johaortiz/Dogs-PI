import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../redux/slices/darkMode';


export const useChangeMode = () => {

    const theme = useSelector(state => state.theme.value);
    const dispatch = useDispatch();
    
    const changeModeHandler = () => {
      dispatch(changeMode());
    };

  return [theme, changeModeHandler];
};

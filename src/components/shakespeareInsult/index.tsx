import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { insultValue, fetchInsult } from './shakespeareSlice';

export const ShakespeareInsult = () => {
  const insult = useAppSelector(insultValue);
  const dispatch = useAppDispatch();

  const onClick = () => {
    console.log('AAAAAAA');
    dispatch(fetchInsult());
  };

  return (
    <div>
      <button type="button" onClick={onClick}>
        Fetch Insult
      </button>
      <div>{insult}</div>
    </div>
  );
};

export default ShakespeareInsult;

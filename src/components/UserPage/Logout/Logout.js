import { LogoutButton, LogoutIcon, ButtonText } from './Logout.styled';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../../redux/auth/operations';

export const Logout = ({ onClick }) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(authOperations.logout());
  };

  return (
    <LogoutButton onClick={handleClick}>
      <LogoutIcon />
      <ButtonText>Log Out</ButtonText>
    </LogoutButton>
  );
};

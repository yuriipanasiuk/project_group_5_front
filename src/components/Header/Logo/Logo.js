import { useNavigate } from 'react-router-dom';
import { LogoSpanLetter, LogoText } from './Logo.styled';

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoText onClick={() => navigate('/')}>
      pet<LogoSpanLetter>l</LogoSpanLetter>y
    </LogoText>
  );
};

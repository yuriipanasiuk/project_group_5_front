import { FaPaw } from 'react-icons/fa';
import { ToggleContainer, ToggleBtn, ToggleSwitch } from './ThemeToggle.styled';

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <ToggleContainer>
      <FaPaw size="20" fill="white" stroke="black" strokeWidth={7} />
      <ToggleBtn onClick={toggleTheme}>
        <ToggleSwitch />
      </ToggleBtn>
      <FaPaw size="20" fill="black" stroke="white" strokeWidth={10} />
    </ToggleContainer>
  );
};

export default ThemeToggle;

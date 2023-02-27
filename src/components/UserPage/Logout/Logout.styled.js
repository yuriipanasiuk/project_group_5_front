import styled from 'styled-components';

export const LogoutButton = styled.button`
  display: block;
  border-style: none;
  margin-left: auto;
  margin-top: 42px;
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.colors.bgcContent};
  cursor: pointer;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    position: absolute;
    margin-left: 0px;
    margin-top: 0px;
    left: 32px;
    bottom: 24px;
  }

  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    left: 17px;
    bottom: 20px;
  }
`;

export const LogoutIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3049 6.57135L15.3051 6.57118C15.3843 6.49195 15.5128 6.49182 15.5923 6.57127L17.1668 8.14574C17.6569 8.63589 17.6569 9.43442 17.1668 9.92457L15.5923 11.499C15.5524 11.5389 15.5014 11.5586 15.4486 11.5586C15.396 11.5586 15.3449 11.5389 15.305 11.499L15.3049 11.499C15.2256 11.4197 15.2256 11.2912 15.3049 11.212L15.305 11.2119L16.4249 10.0918L17.2784 9.23828H16.0714H7.62891C7.51668 9.23828 7.42578 9.14738 7.42578 9.03516C7.42578 8.92293 7.51668 8.83203 7.62891 8.83203H16.0714H17.2784L16.4249 7.9785L15.305 6.85844L15.3049 6.85833C15.2256 6.77909 15.2256 6.65059 15.3049 6.57135ZM12.2266 13.7812V15.1875C12.2266 16.4622 11.1888 17.5 9.91406 17.5H2.84766C1.57294 17.5 0.535156 16.4622 0.535156 15.1875V2.8125C0.535156 1.53778 1.57294 0.5 2.84766 0.5H9.91406C11.1888 0.5 12.2266 1.53778 12.2266 2.8125V4.21875C12.2266 4.33097 12.1357 4.42188 12.0234 4.42188C11.9112 4.42188 11.8203 4.33097 11.8203 4.21875V2.8125C11.8203 1.761 10.9656 0.90625 9.91406 0.90625H2.84766C1.79615 0.90625 0.941406 1.761 0.941406 2.8125V15.1875C0.941406 16.239 1.79615 17.0938 2.84766 17.0938H9.91406C10.9656 17.0938 11.8203 16.239 11.8203 15.1875V13.7812C11.8203 13.669 11.9112 13.5781 12.0234 13.5781C12.1357 13.5781 12.2266 13.669 12.2266 13.7812Z"
      fill="#F59256"
      stroke="#F59256"
    />
  </svg>
);

export const ButtonText = styled.span`
  margin-left: 8px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.regModalLinkText};

  &:hover {
    color: ${p => p.theme.colors.regModalActiveBtn};
  }
  &:focus {
    color: ${p => p.theme.colors.regModalActiveBtn};
  }
`;

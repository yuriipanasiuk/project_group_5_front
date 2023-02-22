import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 60px;
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    width: 768px;
  }
  @media (min-width: ${p => p.theme.screenSizes.desktop}) {
    width: 1280px;
  }
`;

export const EditPhotoButton = styled.button`
  display: block;
  border-style: none;
  margin-left: auto;
  margin-top: 12px;
  margin-bottom: 34px;
  display: flex;
  align-items: center;

  color: #111111;
  background-color: white;

  cursor: pointer;
  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    position: absolute;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const EditPhotoButtonText = styled.span`
  margin-left: 8px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;

  &:hover {
    color: ${p => p.theme.colors.regModalActiveBtn};
  }
  &:focus {
    color: ${p => p.theme.colors.regModalActiveBtn};
  }
`;

export const EditPhotoIcon = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.00033 7.70801C7.50455 7.70801 6.29199 8.92057 6.29199 10.4163C6.29199 11.9121 7.50455 13.1247 9.00033 13.1247C10.4961 13.1247 11.7087 11.9121 11.7087 10.4163C11.7087 8.92057 10.4961 7.70801 9.00033 7.70801Z"
      fill="#F59256"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.70866 0.208008C5.55807 0.208008 4.62533 1.14075 4.62533 2.29134V2.44015C4.62533 2.8182 4.31885 3.12467 3.9408 3.12467C1.78755 3.12467 0.0419923 4.87023 0.0419923 7.02348V10.8658C0.0419871 12.202 0.0419829 13.2494 0.121548 14.0863C0.202648 14.9392 0.3708 15.6376 0.748092 16.2533C1.14319 16.8981 1.68528 17.4401 2.33002 17.8352C2.9457 18.2125 3.64412 18.3807 4.49708 18.4618C5.33389 18.5413 6.38134 18.5413 7.71746 18.5413H10.2831C11.6193 18.5413 12.6668 18.5413 13.5036 18.4618C14.3565 18.3807 15.0549 18.2125 15.6706 17.8352C16.3154 17.4401 16.8575 16.8981 17.2526 16.2533C17.6299 15.6376 17.798 14.9392 17.8791 14.0863C17.9587 13.2494 17.9587 12.202 17.9587 10.8659V7.02348C17.9587 4.87023 16.2131 3.12467 14.0598 3.12467C13.6818 3.12467 13.3753 2.8182 13.3753 2.44015V2.29134C13.3753 1.14075 12.4426 0.208008 11.292 0.208008H6.70866ZM5.04199 10.4163C5.04199 8.23021 6.8142 6.45801 9.00033 6.45801C11.1865 6.45801 12.9587 8.23021 12.9587 10.4163C12.9587 12.6025 11.1865 14.3747 9.00033 14.3747C6.8142 14.3747 5.04199 12.6025 5.04199 10.4163ZM14.0003 7.91634C13.5401 7.91634 13.167 7.54324 13.167 7.08301C13.167 6.62277 13.5401 6.24967 14.0003 6.24967C14.4606 6.24967 14.8337 6.62277 14.8337 7.08301C14.8337 7.54324 14.4606 7.91634 14.0003 7.91634Z"
      fill="#F59256"
    />
  </svg>
);

export const UserPageHeader = styled.h2`
  display: block;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;

  margin-bottom: 18px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 40px;
    margin-left: 32px;
  }
`;

export const UserInfoCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  max-width: 280px;
  padding-top: 20px;
  padding-right: 12px;
  padding-bottom: 20px;
  padding-left: 16px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    max-width: 736px;
    padding-left: 32px;
    padding-bottom: 54px;
    border-top-left-radius: 0;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 20px;
  }
`;

export const UserPhotoThumb = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: 233px;
  height: 233px;

  @media (min-width: ${p => p.theme.screenSizes.tablet}) {
    position: absolute;
    top: 24px;
    right: 40px;
  }
`;

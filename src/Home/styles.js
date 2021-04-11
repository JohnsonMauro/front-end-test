import styled from '@emotion/styled';

const HomePageStyles = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 65% 1fr;
  width: 100%;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;

    section:nth-of-type(2) {
      order: 1;
    }

    section {
      margin-bottom: 20px;
    }
  }
`;

export { HomePageStyles };

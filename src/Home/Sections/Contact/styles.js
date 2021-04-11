import styled from '@emotion/styled';

const ContactStyles = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: auto;
  margin-right: auto;
  padding: 15px 25px;
  width: 100%;
`;

const ContactContent = styled.div`
  margin: 15px 0;
  width: 100%;
`;

const ContactContentIcon = styled.div`
  display: inline-block;
  width: 10%;
`;

const ContactContentInfo = styled.div`
  display: inline-block;
  width: 90%;
`;

const ContactInfoText = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

export { ContactStyles, ContactContent, ContactContentIcon, ContactContentInfo, ContactInfoText };

import styled from '@emotion/styled';

import ProjectFeatured from '@images/project-featured.jpg';

const ProjectImages = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  background-image: url(${ProjectFeatured});
  background-size: cover;
  height: 117px;
  width: 100%;
`;

export { ImageContainer, ProjectImages };

import {
  ProjectStyles,
  ProjectHeader,
  ProjectHighlightedTitle,
  ProjectOtherTitle,
  ProjectPlot,
} from './styles';

const Projects = ({ children, highlightedTitle, otherTitle, plot }) => (
  <ProjectStyles>
    <ProjectHeader>
      {Boolean(highlightedTitle) && (
        <ProjectHighlightedTitle>{highlightedTitle}</ProjectHighlightedTitle>
      )}
      {Boolean(otherTitle) && <ProjectOtherTitle>{otherTitle}</ProjectOtherTitle>}
      {Boolean(plot) && <ProjectPlot>{plot}</ProjectPlot>}
    </ProjectHeader>
    {children}
  </ProjectStyles>
);

export default Projects;

import styled from "styled-components";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export const StyledAccordion = styled(Accordion)`
  background-color: var(--darker-black) !important;

  .MuiSvgIcon-root {
    color: var(--main);
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  .Mui-expanded > p {
    color: var(--main) !important;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  color: var(--grey);
`;

export const StyledTypography = styled(Typography)`
  color: var(--grey);
  .Mui-expanded {
    color: var(--main);
  }

  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.fancyList};
  }
  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
    .company {
      color: var(--main);
    }
  }
  .range {
    margin-bottom: 25px;
    color: var(--grey);
    font-size: var(--fz-xs);
  }
`;

import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const StyledTabPanel = styled.div`
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

export const StyledTabs = styled(Tabs)`
  color: var(--grey);
  min-width: 10em;

  .Mui-selected {
    color: var(--main) !important;
    background-color: var(--main-tint);
  }
`;

export const StyledTab = styled(Tab)`
  color: var(--grey) !important;
`;

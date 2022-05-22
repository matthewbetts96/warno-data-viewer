import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";

export const SingleDataPoint = ({ title = "", value = "", tooltip = "" }) => {
  return (
    <Wrapper>
      <Tooltip title={tooltip}>
        <div>
          <div>{title}</div>
          <Chip label={value} variant="outlined" />
        </div>
      </Tooltip>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  margin: 5px;
  > div {
    display: flex;
    align-items: center;
    > div {
      width: 50%;
    }
  }
`;

export default SingleDataPoint;

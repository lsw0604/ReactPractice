import styled, { css }from "styled-components";
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  ${props => 
    props.hashMarginTop && 
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    content: '\\B7';
  }
`;

const SubInfo = ({ username, publishedDate, hashMarginTop }) => {
  return (
    <SubInfoBlock hashMarginTop={hashMarginTop}>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};

export default SubInfo;
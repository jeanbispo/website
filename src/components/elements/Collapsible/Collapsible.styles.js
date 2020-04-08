import styled, { css } from 'styled-components';

const styles = ({ theme }) => css`


.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.content {
  padding: 0 18px;
  overflow: hidden;
  background-color: #f1f1f1;
  ${props => props.collapsible === true && `
    display: none;
  `}
}
`;

export const collapsibleWithStyle = component => styled(component)(styles);

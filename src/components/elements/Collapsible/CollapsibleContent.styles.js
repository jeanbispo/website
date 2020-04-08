import styled, { css } from 'styled-components';

const styles = ({ theme }) =>
{

  return css`
    ${props => props.collapsible === true && `
      display: none;
    `}
  `;
}

export const collapsibleContentWithStyle = component => styled(component)(styles);

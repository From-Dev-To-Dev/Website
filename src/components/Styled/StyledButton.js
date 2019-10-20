import styled from 'styled-components'
import colors from './colors'


const StyledButton = styled.button`
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ color }) => color};
    margin-top: ${({ marginTop }) => marginTop};
    padding: ${({ padding }) => padding};
    width: ${({ width }) => width};
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: transparent;
      color: ${colors().white};
      border: 1px solid ${colors().white};
    }

    ${({ bold }) => bold && `
        font-weight: 600;
    `}
`

StyledButton.defaultProps = {
  border: `1px solid ${colors().primaryColor}`,
  borderRadius: '5px',
  padding: '.7em 0',
  backgroundColor: colors().white,
  color: colors().primaryColor,
  fontSize: '1em',
  marginTop: '0',
  transition: 'ease-in .25s',
  width: '100%',
  
}

export default StyledButton

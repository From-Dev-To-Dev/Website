import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    ${({ alignedCenter }) => alignedCenter && `
        align-items: center;
    `}
`

export const Column = styled.div`
        display: flex;
        flex-direction: column;
`

export const AlignedCenterRow = styled(Row)`
    align-items: center;
`

export const JustifyCenterRow = styled(Row)`
    justify-content: center;
`

export const FullyCentralizedRow = styled(Row)`
    align-items: center;
    justify-content: center;
`

export const FullyCentralizedColumn = styled(Column)`
    align-items: center;
    justify-content: center;
`

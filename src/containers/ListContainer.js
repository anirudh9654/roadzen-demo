import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const RootStyle = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
`

const TableStyle = styled.div`
    flex:0 0 60%;
    height:70%;
    margin:5% 0 0 0;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    border-width:1px;
    border-style: solid;
    border-color: rgba(57, 98, 189, 0.5);
`

const HeaderStyle = styled.div`
    background-color:#3962BD;
    min-height:60px;
    width:100%;
    display:flex;
    justify-content:space-around;
    color:#fff;
`
const TableBodyStyle = styled.div`
    width:100%;
    overflow-y:scroll;
`

const RowStyle = styled.div`
    flex:1 1 100%;
    width:100%;
    display:flex;
    color:#444;

`
const ColumnStyle = styled.div`
    flex:1 1 0%;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;

    border-width:0 0 1px 0;
    border-style: solid;
    border-color: rgba(57, 98, 189, 0.3);
`


class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { places } = this.props
        return (
            <RootStyle>
                <TableStyle>
                    <HeaderStyle>
                        <ColumnStyle>
                            Place Name
                        </ColumnStyle>
                        <ColumnStyle>
                            Coordinates
                        </ColumnStyle>
                    </HeaderStyle>
                    <TableBodyStyle>
                        {
                            places.map((x,i) => (
                                <RowStyle key={i} >
                                    <ColumnStyle>
                                        {x.name}
                                    </ColumnStyle>
                                    <ColumnStyle>
                                        {x.coordinates[0] + ',  ' + x.coordinates[1]}
                                    </ColumnStyle>
                                </RowStyle>
                            ))
                        }
                    </TableBodyStyle>
                </TableStyle>
            </RootStyle>

        );
    }
}

const mapStateToProps = ({ locationStore }) => {
    const { places } = locationStore
    return {
        places
    }
}

const mapActionsToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps())(ListContainer)

import React from 'react'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RootStyle = styled.div`
    flex: 1 1 100%;
    min-width:300px;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    color: #444;
    border-width:0px 2px 0px 0px;
    border-style: solid;
    border-color: #ccc;
    padding:40px 30px;
    ${props => props.isActive && css `
        background-color:#ddd;
    `}
`

const PrimaryStyle = styled.div`
    flex:1 1 70%;
    width:100%;
    display:flex;
`
const PrimaryIconStyle = styled.div`
    flex:0 0 50px;
    display:flex;
    justify-content:center;
`
const PrimaryTextStyle = styled.div`
    flex:1 1 0%;
    display:flex;
    padding:0 0 0 10px;
    font-size:1.2em;
    color:#777;
`
const SecondaryStyle = styled.div`
    flex:1 1 30%;
    width:100%;
    display:flex;
    justify-content:space-evenly;
    color: #888;
    font-size:1.1em;
`

class TileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick = () => {
        this.props.selectPlace(this.props.placeKey)
    }

    render() {
        const { primaryText, primaryIcon, secondaryText, isActive, styleProps } = this.props
        return (
            <RootStyle style={{ ...styleProps }} onClick={this.handleClick} isActive={isActive} >
                <PrimaryStyle>
                    <PrimaryIconStyle>
                        <FontAwesomeIcon 
                            icon={primaryIcon}
                            color={'#F5BE22'}
                            size={'2x'}
                        />
                    </PrimaryIconStyle>
                    <PrimaryTextStyle>
                        {primaryText}
                    </PrimaryTextStyle>
                </PrimaryStyle>
                
                <SecondaryStyle>
                    <div>
                        Lat : { secondaryText[0] && secondaryText[0].toFixed(4)}
                    </div>
                    <div>
                        Long : { secondaryText[1] && secondaryText[1].toFixed(4)}
                    </div>
                </SecondaryStyle>
            </RootStyle>

        );
    }
}

export default TileComponent
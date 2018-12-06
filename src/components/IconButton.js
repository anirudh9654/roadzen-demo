import React from 'react'
import styled, {css} from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const RootStyle = styled.div`
    width:100%;
    height:80px;
    display:flex;
    align-items:center;
    cursor:pointer;
    border-width:0px 0px 2px 0px;
    border-style: solid;
    border-color: #6F9DD5;

    ${props => props.isActive && css`
        background-color:#fff;
        border-width:0px;
        z-index:100;
        box-shadow: 1px 0px 15px 0px #666;
    `}
`

const IconContainerStyle = styled.div`
    flex:1 1 0%;
    height:100%;
    display:flex;
`
const BorderStyle = styled.div`
    flex:0 0 8px;
    height:100%;
    ${props => props.isActive && css`
        background-color:#F5BE22;
    `}
`
const IconStyle = styled.div`
    flex:1 1 0%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

class IconButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.passMenuKey({ menuKey: this.props.menuKey })
    }

    render() {
        const { tooltip, iconName, isActive } = this.props
        return (
            <RootStyle isActive={isActive} data-tip={tooltip} onClick={this.handleClick} >
                <IconContainerStyle>
                    <BorderStyle isActive={isActive} />
                    <IconStyle>
                        <FontAwesomeIcon 
                            icon={iconName}
                            color={isActive ? 'blue' : 'white'}
                            size={'2x'}
                        />
                    </IconStyle>
                    
                </IconContainerStyle>
                
                <ReactTooltip 
                    place='right'
                    type='info'
                    effect='solid'
                    delayShow={200}
                />
            </RootStyle>

        );
    }
}

export default IconButton
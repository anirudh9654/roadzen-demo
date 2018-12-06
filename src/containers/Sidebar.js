import React from 'react'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import { IconButton } from '../components';
import { faMapMarkerAlt, faList } from '@fortawesome/free-solid-svg-icons'


const RootStyle = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    background-color:#3962BD;
`


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenuKey: 'map-view'
        }
    }

    handleMenuChange = ({ menuKey }) => {
        this.props.history.push(`/${menuKey}`)
        this.setState({
            activeMenuKey: menuKey
        })
    }

    render() {
        return (
            <RootStyle>
                <IconButton
                    menuKey='map-view'
                    tooltip='Map View'
                    iconName={faMapMarkerAlt}
                    isActive={ 'map-view' === this.state.activeMenuKey ? true : false }
                    passMenuKey={this.handleMenuChange}
                />
                <IconButton
                    menuKey='list-view'
                    tooltip='List View'
                    iconName={faList}
                    isActive={ 'list-view' === this.state.activeMenuKey ? true : false }
                    passMenuKey={this.handleMenuChange}
                />
                
            </RootStyle>
        );
    }
}

export default withRouter(Sidebar)

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Sidebar, MapContainer, ListContainer } from '../containers'

const RootStyle = styled.div`
    display:flex;
    flex-flow: row nowrap;
    background-color:#fff;
    width:100%;
    height:100vh;
`

const SidebarStyle = styled.div`
    flex: 0 0 90px;
    height:100%;
`

const ContentContainerStyle = styled.div`
    flex:1 1 0%;
    height:100%;
    display:flex;
`

class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <RootStyle>

                <SidebarStyle>
                    <Sidebar />
                </SidebarStyle>
                
                <ContentContainerStyle>
                    <Switch>
                        <Route path='/' exact component={MapContainer} />
                        <Route path='/map-view' component={MapContainer} />
                        <Route path='/list-view' component={ListContainer} />
                    </Switch>
                </ContentContainerStyle>


            </RootStyle>
        )
    }
}

const mapStateToProps = (store) => {
    return {}
}

const mapActionsToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapActionsToProps())(Layout)

import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {saveSelectedPlace, removeSelectedPlace} from '../redux/actions'
import { MapComponent, TileComponent } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faMapMarkerAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const RootStyle = styled.div`
    width:100%;
    height:100%;
    background-color:#444;
`
const LocationsContainerStyle = styled.div`
    min-height:160px;
    width:80%;
    position:absolute;
    left:13%;
    bottom:4%;
    background-color:#fff;
    border-radius:10px;
    cursor:pointer;
    z-index:20;

    overflow-x:hidden;
    box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.08);
    display:flex;
    justify-content:flex-start;
    align-items:center;
`

const LeftScrollStyle = styled.div`
    position:absolute;
    left:10px;
`

const RightScrollStyle = styled.div`
    position:absolute;
    left:98%;
`

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition:0
        }
    }

    handleSelectPlace = (placeKey) => {
        this.props.saveSelectedPlace({ placeKey })
    }

    handleUnSelectPlace = () => {
        this.props.removeSelectedPlace()
    }

    handleScrollLeft = () => {
        const {scrollPosition} = this.state
        if(scrollPosition > 10){
            this._scrollRef.scrollLeft = scrollPosition - 100
            this.setState(prevState => {
                return {
                    scrollPosition: prevState.scrollPosition - 100
                }
            })
        }


    }

    handleScrollRight = () => {
        const {scrollPosition} = this.state
        this._scrollRef.scrollLeft = scrollPosition + 100
        this.setState(prevState => {
            return {
                scrollPosition: prevState.scrollPosition + 100
            }
        })

    }

    render() {
        const { activePlaceKey, places } = this.props
        return (
            <RootStyle>
                <MapComponent
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsfg3spr8oSlXBAi93MSBe_ZFg1f9Ycg0&v=3.exp&libraries=geometry,drawing,places"
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    places={places}
                    activePlaceKey={activePlaceKey}
                    selectPlace={this.handleSelectPlace}
                    unSelectPlace={this.handleUnSelectPlace}
                    loadingElement={
                        <img
                            src={<FontAwesomeIcon 
                                icon={faSpinner}
                                color={'blue'}
                                size={'2x'}
                            />}
                            alt='loader'
                            style={{
                                position:'absolute',
                                top:'35%',
                                left:'48%'
                            }} 
                        />
                    }
                />

                <LocationsContainerStyle >
                    <PerfectScrollbar containerRef={ref => this._scrollRef = ref} style={{ height:'200px',width:'100%', display:'flex' }} >
                        {
                            places.map((x,i) => {
                                return(
                                    <TileComponent
                                        key={i}
                                        primaryText={x.name}
                                        primaryIcon={faMapMarkerAlt}
                                        secondaryText={x.coordinates}
                                        placeKey={x.key}
                                        isActive={ activePlaceKey === x.key ? true : false }
                                        selectPlace={this.handleSelectPlace}
                                        styleProps={{
                                            height:'120px',
                                        }}
                                    />
                                )
                            })
                        }
                    </PerfectScrollbar>
                    <LeftScrollStyle onClick={this.handleScrollLeft} >
                        <FontAwesomeIcon 
                            icon={faChevronLeft}
                            color={'#8FB4DF'}
                            size={'2x'}
                        />
                    </LeftScrollStyle>

                    <RightScrollStyle onClick={this.handleScrollRight} >
                        <FontAwesomeIcon 
                            icon={faChevronRight}
                            color={'#8FB4DF'}
                            size={'2x'}
                        />
                    </RightScrollStyle>
                </LocationsContainerStyle>
            </RootStyle>
        );
    }
}


const mapStateToProps = ({ locationStore }) => {
    const { places, activePlaceKey } = locationStore
    return {
        places, activePlaceKey
    }
}

const mapActionsToProps = () => {
    return {
        saveSelectedPlace, removeSelectedPlace
    }
}

export default connect(mapStateToProps, mapActionsToProps())(MapContainer)

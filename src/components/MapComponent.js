import React from 'react'
import styled from 'styled-components'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const InfoStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    font-size:1em;
`
const FieldStyle = styled.div`
    padding: 1px;
`

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: this.props.places
        }
    }

    onMapMounted = (ref) => {
        this.map = ref
    }

    componentDidMount = () => {
        this.fitBounds()
    }

    componentDidUpdate(prevProps) {
        if (this.props.activePlaceKey !== null && prevProps.activePlaceKey !== this.props.activePlaceKey) {
            const activePlace = this.props.places.filter(x => x.key === this.props.activePlaceKey)
            this.fitBounds(activePlace)
        }
        if (this.props.activePlaceKey === null && prevProps.activePlaceKey !== this.props.activePlaceKey) {
            this.fitBounds()
        }
    }


    fitBounds = (entities) => {
        const { places } = this.state
        const allEntities = entities && entities.length ? entities : [...places]

        const bounds = new window.google.maps.LatLngBounds()
        allEntities.forEach((x) => {
            bounds.extend(new window.google.maps.LatLng(
                x.coordinates[0],
                x.coordinates[1]
            ));
        });
        this.map.fitBounds(bounds)
    }

    onClickMarker = (clickedItemKey) => {
        this.props.selectPlace(clickedItemKey)
    }

    onCloseBox = () => {
        this.props.unSelectPlace()
    }

    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
                ref={this.onMapMounted}
                defaultOptions={{
                    minZoom: 6,
                    maxZoom: 18
                }}
            >
                {
                    this.props.places &&
                    this.props.places.length &&
                    this.props.places.map((x, i) => {
                        const isActive = x.key === this.props.activePlaceKey
                        return (
                            <Marker
                                key={i}
                                position={{ lat: x.coordinates[0], lng: x.coordinates[1] }}
                                onClick={this.onClickMarker.bind(this,x.key)}
                                icon={{
                                    url: require('../images/marker.png'),
                                    scaledSize: new window.google.maps.Size(55, 55),
                                    origin: new window.google.maps.Point(0, 0),
                                    anchor: new window.google.maps.Point(0, 55),
                                }}
                            >
                                {isActive &&
                                    < InfoWindow onCloseClick={this.onCloseBox} >
                                        <InfoStyle>
                                            <FieldStyle>
                                                {x.name}
                                            </FieldStyle>
                                            <br/>
                                            <FieldStyle>
                                                {x.coordinates[0].toFixed(4) + ', ' + x.coordinates[1].toFixed(4)}
                                            </FieldStyle>
                                        </InfoStyle>
                                    </InfoWindow>
                                }
                            </Marker>
                        )
                    })
                }
            </GoogleMap>
        );
    }
}

export default withScriptjs(withGoogleMap(MapComponent))
import * as React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { withProps, compose } from "recompose";
import Marker from "react-google-maps/lib/components/Marker";
import { demoMapStyle } from "./demoMapStyle";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";
import { Markers } from "./markersList";
import { UserMarker } from "../../contracts/UserMarker";

//import { GOOGLE_STYLE } from "./google-style";

//import "./world-map-view.scss";
//import { Config } from "../../config";

// TODO: Remove this key. It's only Dev time.
const GOOGLE_MAPS_API_KEY = "AIzaSyCUfG5xqkrkJp4s_2nPnPNPPd3FfASE-sI";

const MyMapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: "100%" }} />,
        containerElement: <div style={{ width: "100%", height: "100%" }} />,
        mapElement: <div style={{ height: "100%" }} />
    }),
    withScriptjs,
    withGoogleMap
)((props: any) => (
    <GoogleMap defaultZoom={7} center={{ lat: 55.1694, lng: 23.8813 }} defaultOptions={{ styles: demoMapStyle }}>
        <MarkerClusterer onClick={props.onMarkerClustererClick} averageCenter enableRetinaIcons gridSize={60}>
            {Markers.map(marker => <Marker key={marker.index} position={{ lat: marker.latitude, lng: marker.longitude }} />)}
        </MarkerClusterer>
    </GoogleMap>
));

interface Props {
    markers?: JSX.Element[];
    userMarkers?: UserMarker[];
}

export class WorldMapView extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="world-map-view">
                {this.props.children}
                <MyMapComponent >{this.props.markers}</MyMapComponent>
            </div>
        );
    }
}

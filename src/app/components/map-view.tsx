import * as React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { withProps, compose } from "recompose";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

//import { GOOGLE_STYLE } from "./google-style";

//import "./world-map-view.scss";
//import { Config } from "../../config";

// TODO: Remove this key. It's only Dev time.
const GOOGLE_MAPS_API_KEY = "AIzaSyCUfG5xqkrkJp4s_2nPnPNPPd3FfASE-sI";

const MyMapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: "100%" }} />,
        containerElement: <div style={{ width: "1024px", height: "706px" }} />,
        mapElement: <div style={{ height: "100%" }} />
    }),
    withScriptjs,
    withGoogleMap
    // tslint:disable-next-line:no-any
)((props: any) => (
    <GoogleMap defaultZoom={2} center={{ lat: 40, lng: 11 }}>
        <MarkerClusterer
            defaultGridSize={30}
            defaultAverageCenter={true}
            // imagePath={`${Config.STATIC_URI}/marker-cluster`}
            imageExtension=".png"
            imageSizes={[25, 25, 25, 25, 25]}
        >
            {props.children}
        </MarkerClusterer>
    </GoogleMap>
));

interface Props {
    markers?: JSX.Element[];
}

export class WorldMapView extends React.Component<Props> {
    public render(): JSX.Element {
        return (
            <div className="world-map-view">
                {this.props.children}
                <MyMapComponent>{this.props.markers}</MyMapComponent>
            </div>
        );
    }
}

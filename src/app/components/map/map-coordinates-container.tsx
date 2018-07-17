import * as React from "react";
import { Container } from "flux/utils";

import { UserMarker } from "../../contracts/UserMarker";
import { UsersReduceStore } from "../../stores/users-store";
import { WorldMapView } from "./map-view";

interface State {
    currentUserCoordinates: UserMarker[];
}

class MapCoordinatesContainerClass extends React.Component<{}, State> {
    public static getStores(): Container.StoresList {
        return [UsersReduceStore];
    }

    public static calculateState(state: State): State {
        return {
            currentUserCoordinates: UsersReduceStore.getState().usersCoordinates
        };
    }

    public render(): JSX.Element {
        return <WorldMapView userMarkers={this.state.currentUserCoordinates}/>;
    }
}
export const MapCoordinatesContainer = Container.create(MapCoordinatesContainerClass);

import * as React from "react";
import { Link } from "react-router-dom";

export class NotFoundView extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <div>Status 404: This page does not exist!</div>
        <Link to="/">Go to home page</Link>
      </div>
    );
  }
}

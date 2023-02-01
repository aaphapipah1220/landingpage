import React from "react";
import { withRouter } from "react-router-dom";

import TicketItem from "../../component/Landingpage/TicketItem";


class TicketItemPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.history.location.state
        };
    }

    render() {
        return (
            <TicketItem data={this.state.data.data} />
        )
    }
}

export default withRouter(TicketItemPage);

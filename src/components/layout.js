import React, {Fragment, Component} from 'react';

class Layout extends Component {
	render() {
		return <Fragment>{this.props.children}</Fragment>;
	}
}

export default Layout;

/* eslint-disable import/no-unresolved, import/extensions */
import PropTypes from 'prop-types';
import { View } from 'react-native';
import React, { PureComponent } from 'react';
/* eslint-enable import/no-unresolved, import/extensions */

const propTypes = {
    children: PropTypes.node,
};

class Container extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.props.children}
            </View>
        );
    }
}

Container.propTypes = propTypes;

export default Container;

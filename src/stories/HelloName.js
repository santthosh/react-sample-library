import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const HelloName = ({ name, ...props }) => {
    return (
        <h1>Hello {name}!</h1>
    );
};

HelloName.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    name: PropTypes.string,
};

HelloName.defaultProps = {
    name: "World",
};

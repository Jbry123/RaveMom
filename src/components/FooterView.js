import React from 'react';
import Tappable from 'react-tappable';

import '../css/footer.css';

const FooterView = React.createClass({

    render() {
        return(
            <div id="footer">
                <ul>
                    <li>Home</li>
                    <li>Map</li>
                    <li>After Party</li>
                </ul>
            </div>
        )
    }
});

module.exports = FooterView


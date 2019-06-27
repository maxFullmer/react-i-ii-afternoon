import React from 'react';

function Slide(props) {
    if (props.currentID)
        return (
            <div>
                {props.currentID}/{props.totalID}
            </div>
        );
}

export default Slide;
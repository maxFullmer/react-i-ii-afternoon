import React from 'react';

function Entity(props) {
    return (
      <div>
        {props.fullName[props.currentID - 1]}
      </div>
    );
  }

  export default Entity;
import React from 'react';

function MetaInfo(props) {
    return (
      <div>
        <ul>
            <li><b>From: </b>{props.from[props.currentID - 1]}</li>
            <li><b>Job Title: </b>{props.jobTitle[props.currentID - 1]}</li>
            <li><b>Employer: </b>{props.employer[props.currentID - 1]}</li>
            <br></br>
            <li><b>Favorite Movies:</b>
                <ol>
                    <li>{props.favoriteMovies[props.currentID - 1][0]}</li>
                    <li>{props.favoriteMovies[props.currentID - 1][1]}</li>
                    <li>{props.favoriteMovies[props.currentID - 1][2]}</li>
                </ol>
            </li>
        </ul>
      </div>
    );
  }

export default MetaInfo;
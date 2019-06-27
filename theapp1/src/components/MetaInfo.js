import React from 'react';

function MetaInfo(props) {
    return (
      <div>
        <ul>
            <li>From: {props.from[props.currentID - 1]}</li>
            <li>Job Title: {props.jobTitle[props.currentID - 1]}</li>
            <li>Employer: {props.employer[props.currentID - 1]}</li>
            <br></br>
            <li>Favorite Movies:
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
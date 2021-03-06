import React from 'react';

const MovieForm = ({ match, history }) => {
  return (
    <div>
        <h2>Movie : {match.params.id} </h2>
        <button className="btn btn-primary m-2" 
        onClick={() => history.push("/movies")}
        >Save</button>
    </div>
  );
}

export default MovieForm;
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '..//actions';

const SmurfList = ({smurfs, getSmurfs}) => {
useEffect(() => {
    getSmurfs();
}, [getSmurfs]);

return (
    <>
    {smurfs.map(smurf => {
        return (
            <div>
      <h1>{smurf.name}</h1>
      <h2>{smurf.height}</h2>
      <h2>{smurf.age}</h2>
</div>
        )
    })}
    </>
)
}

const mapStateToProps = state => {
  return {
smurfs: state.smurfs,
    name: state.name,
    error: state.error
  }
}

export default connect(
  mapStateToProps, 
  { getSmurfs }
)(SmurfList);


   
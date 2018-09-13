import React from 'react';
import {connect} from 'react-redux'

const Profile = ({currentUser}) => {
    return ( 
    <div>
        {currentUser &&
        <div> 
            <h1>{currentUser.name}</h1>
            <h2>{currentUser.email}</h2>
        </div>
        }
    </div> 
    );
}

const mapStateToProps = ({currentUser}) =>({currentUser})
 
export default connect(mapStateToProps)(Profile);
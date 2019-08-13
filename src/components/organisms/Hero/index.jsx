//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
 MDBView,
 MDBMask,
 MDBRow,
 MDBCol,
 MDBBtn,
 MDBIcon,
 MDBContainer,
} from 'mdbreact';

//> Images
// Logo of MDB React
import lupiLogoWhite from '../../../assets/logo_white.png';

class Hero extends React.Component{
    render(){
        return(
            <MDBRow>
                <MDBCol md="6">
                    <MDBView src={`https://mdbootstrap.com/img/Photos/Others/gradient2.png`} >
                        <MDBMask className="rgba-purple-slight d-flex justify-content-center align-items-center">

                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="6">

                </MDBCol>
            </MDBRow>
        );
    }
}

export default Hero;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */

import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { notification} from 'antd';
import { API_URL } from '../../../shared/API_URLS';
import { customFetch } from '../../../shared/customFecth';


import CIcon from '@coreui/icons-react'

import picture from "../../../images/network.jpg"

const Login = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [parameters, setParameters] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    setIsLoading(false);
  }, [parameters]);

  const submitParameters = (dataToPost) => {
    const response = customFetch.post(
      API_URL.WIAGATE.USERS.GET_ALL,
      dataToPost,
    );
    return response
      .then(async (result) => {
        const data = { result };
        return data;
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-0">
                <CCardBody>
                  <CForm>
                    <h1><center>Login</center></h1>
                    <p className="text-muted"><h3><center>Welcome to Wiagate</center></h3></p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-5"
                         onClick={async () => {
                          setIsLoading(true)
                          submitParameters(parameters).then((data) => {
                            if (data.result) {
                              setIsLoading(false);
                              notification.success({
                                message: 'Succès',
                                description: 'Inscription réussie',
                              });
                              history.push('https://wiagate-frontend-final.herokuapp.com/#/dashboard');
                            } else {
                              notification.error({
                                message: 'Erreur',
                                description: "Veillez recommencer",
                              });
                            }
                          });
                        }}
                        >Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="primary" className="px-5"
                          /* onClick={async () => {
                            setIsLoading(true)
                              
                            history.push('https://wiagate-frontend-final.herokuapp.com/#/register');
                              
                          }} */
                        > <Link to="../register"> Sign In </Link> </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '100%' }}>
                  <div>
                       <img src={picture} alt="pic" style={{width:'100%'}} />
                  </div>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

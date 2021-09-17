import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { notification} from 'antd';
import { API_URL } from '../../../shared/API_URLS';
import { customFetch } from '../../../shared/customFecth';



const Register = () => {
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
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" />
                  </CInputGroup>
                  {/* <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup> */}
                  <CButton color="success" block
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
                  >Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                {/* <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow> */}
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register

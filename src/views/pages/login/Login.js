import React, {Component} from 'react'
import { Link, useLocation } from 'react-router-dom'
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
import CIcon from '@coreui/icons-react'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default class Login extends Component {

  state = {
    username: "",
    password: "",
    redirect: false,
    url: '',
  }

  handleSubmit = () => {
      console.log(this.state)
      fetch('http://192.168.1.201:8000/login/', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          "username": this.state.username,
          "password": this.state.password,
        })
      })
      .then((response) => response.json())
      .then((response) => {
        let query = new URLSearchParams(this.props.location.search)
        let authaction = query.get("authaction")
        let clientip = query.get("clientip")
        let gatewayname = query.get("gatewayname")
        let tok = query.get("tok")
        let redir = query.get("redir")
        console.log(query)
        console.log(authaction)
        console.log(tok)

        let  failure = true
        if (response.status === "success") {
          failure = false
        }

        if (!failure) {
           let url = authaction
           url += "?tok=" + tok
           url += "?redir=" + redir
           console.log(url)
           // alert(url)
           window.location.href = url
        }
        else {
          alert('User not authenticated!')
        }
      })
  }

render() {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" value={this.state.username} onChange={(e) => {this.setState({username: e.target.value})}} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={this.handleSubmit}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
}

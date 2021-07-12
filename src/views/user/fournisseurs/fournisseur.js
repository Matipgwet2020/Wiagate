import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CJumbotron,
  CModalFooter
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const BasicForms = () => {
  const [large, setLarge] = useState(false)

  return (
    <>
      
      <CRow >

      <CCol xs="12" sm="5">
            <CCard>
            <CCardHeader>
              <td><span className="h1">Description</span></td>
              <DocsLink name="CJumbotron"/>
            </CCardHeader>
            <CCardBody lg="3">
              <CJumbotron className="border">
                <h1 className="display-6">WELCOME TO WIAGATE</h1>
                <p className="lead">Become Provider with WIAGATE is possible </p>
                <hr className="my-2" />
                <p>It is very simple ! add one service.</p>
                <p className="lead">
                  <CButton color="primary" size="lg">Learn More</CButton>
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>

        </CCol>


        <CCol xs="12" sm="6">
          <CCard>
          <CCardHeader>
              <h1>Add a Service</h1>
              <DocsLink name="-Input"/>
            </CCardHeader>
            <CCardBody>
            <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>
                    <CInput id="name" placeholder="Enter your name" required />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="name">Type</CLabel>
                    <CInput id="name" placeholder="Enter your name" required />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="company">Equipement</CLabel>
                    <CInput id="company" placeholder="Enter your equipements" />
                  </CFormGroup>
                  <CFormGroup>
                    <div class="file btn btn-lg btn-primary">
                        Ajouter le logo 
                        <input type="file" name="file"/>
                    </div>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Duration</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Year</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">CVV/CVC</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
              </CRow>

            </CCardBody>
          </CCard>
        </CCol>
        
      </CRow>
      <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Confirmation de la souscription</CModalTitle>
              </CModalHeader>
              <CModalBody>
              You will subscribe to this service via this package !!
              </CModalBody>
              <CModalFooter>
                <CButton to="/consommation" color="primary">Ok</CButton>
                <CButton color="danger" onClick={() => setLarge(!large)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
      
    </>
  )
}

export default BasicForms
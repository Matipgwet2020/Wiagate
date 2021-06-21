import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
  CJumbotron,
  CWidgetDropdown
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)

  return (
    <>
       
      <CRow >

      <CCol xs="12" sm="5">
        {/* <CWidgetDropdown
          color="gradient-primary"
          text="Tickets Plane" 
          >

        <CIcon
          name="cib-cc-visa"
          height="52"
          className="my-4"
        />
        <CDropdown>
          <CDropdownToggle to="/base/forms" caret={false}  color="transparent">
            <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
                {/* <CDropdownMenu to="/base/forms"  className="pt-0" placement="bottom-end">
                  <CDropdownItem >
                    Sign In
                  </CDropdownItem>
                </CDropdownMenu> *
              </CDropdown>
            </CWidgetDropdown> */}
             <img
                alt="example"
                class="img-fluid rounded"
                src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
              />
          
          <CCard>
            <CCardHeader>
              <td><span className="h1">Description</span></td>
              <DocsLink name="CJumbotron"/>
            </CCardHeader>
            <CCardBody lg="3">
              <CJumbotron className="border">
                <h1 className="display-6">Ticket plan</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron - style component for calling extra
                  attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <CButton color="primary" size="lg">Learn More</CButton>
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>


        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader align="center">
            <td><span className="h1">Souscrire à un forfait</span></td>
              <DocsLink name="-Input"/>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                <CCardHeader>
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Credit Card Number</CLabel>
                    <CInput id="ccnumber" placeholder="0000 0000 0000 0000" required />
                  </CFormGroup>
                  </CCardHeader>
                </CCol>
              </CRow>
              
              <CRow>
                <CCol xs="12" className="mb-3 mb-xl-0">
                  <CButton block color="secondary">Veuillez choisir un forfait parmi les suivants</CButton>
               </CCol>
                
              </CRow>
              <CRow>
                <CCol xs="12">
                      
                    <CCardBody>
                      <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel>JOUR</CLabel>
                          </CCol>
                          <CCol md="9">
                            <CFormGroup variant="checkbox">
                              <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                              <CLabel variant="checkbox" htmlFor="radio1">3$/jour</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="checkbox">
                              <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                              <CLabel variant="checkbox" htmlFor="radio2">6$/jour</CLabel>
                            </CFormGroup>
                          </CCol>
                        </CFormGroup>
                        
                        <CFormGroup row>
                          <CCol md="3"><CLabel>MOIS</CLabel></CCol>
                          <CCol md="9">
                            <CFormGroup variant="checkbox">
                              <CInputRadio className="form-check-input" id="radio3" name="radios" value="option3" />
                              <CLabel variant="checkbox" htmlFor="radio1">80$/mois</CLabel>
                            </CFormGroup>
                            <CFormGroup variant="checkbox">
                              <CInputRadio className="form-check-input" id="radio4" name="radios" value="option4" />
                              <CLabel variant="checkbox" htmlFor="radio2">160$/mois</CLabel>
                            </CFormGroup>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol md="3">
                            <CLabel>ANNEES</CLabel>
                          </CCol>
                          <CCol md="9">
                            <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio5" name="radios" value="option5" />
                                <CLabel variant="checkbox" htmlFor="radio1">900$/an</CLabel>
                              </CFormGroup>
                              <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio5" name="radios" value="option6" />
                                <CLabel variant="checkbox" htmlFor="radio2">1890$/jour</CLabel>
                              </CFormGroup>
                          </CCol>
                        </CFormGroup>
                        
                      </CForm>
                    </CCardBody>
                </CCol>
              </CRow>
            
            <CCol xs="12">
              <CRow>
                <CCol xs="6">
                  <CCard>
                      <CCardFooter>   
                        <CButton onClick={() => setLarge(!large)} className="mr-1" type="submit"  size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                      </CCardFooter>
                    </CCard>
                </CCol>
                  
                <CCol xs="6">
                  <CCard>
                      <CCardFooter>   
                        <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                      </CCardFooter>
                    </CCard>
                </CCol>
                  
              </CRow>
            </CCol>

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
                <CButton to="/services" color="primary">Ok</CButton>{' '}
                <CButton color="danger" onClick={() => setLarge(!large)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

            
    </>
  )
}

export default BasicForms

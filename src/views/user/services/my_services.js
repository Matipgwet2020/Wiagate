import React from 'react'
import {
  CButton,
  CRow,

} from '@coreui/react'

const WidgetsDropdown = () => {
  return (
    <CRow  class ="service">
         <CButton 
         to="/services" 
         variant="outline" 
         color="info" 
         size="lg" 
         block>
           Subscribe to a service
        </CButton>

        <CButton
         to="/user/fournisseurs" 
         variant="outline" 
         color="primary" 
         size="lg" 
         block>
           Become provider
        </CButton>
      
    </CRow>


  )
}


export default WidgetsDropdown

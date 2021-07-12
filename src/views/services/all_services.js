import React, { useState } from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CPagination,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

//import routes from '../../routes'

const WidgetsDropdown = () => {
  const [currentPage, setCurrentPage] = useState(2)
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
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
            </CDropdownMenu> */}
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          text="Computer Sale"
         
        >
        <CIcon
          name="cil-laptop"
          height="52"
          className="my-4"
        />
          <CDropdown>
          <CDropdownToggle caret={false}  color="transparent">
            <CIcon name="cib-addthis" height="52" className="my+1"/>
          </CDropdownToggle>

            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>
                
                
              </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          text="Wiatalk"
        >
          <CIcon
          name="cil-envelope-closed"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle  to="/user/wiatalk" caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>
                
                
              </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          text="Wedding"
          
        >
          <CIcon
          name="cil-people"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>
                
                
              </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          text="Service 5"  
        >
          <CIcon
          name="cib-twitter"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="dark"
          text="Service 6"
          
        >
         <CIcon
          name="cib-facebook"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="secondary"
          text="Service 7"
        >
          <CIcon
          name="cil-calendar"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
             <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-success"
          text="Service 8"
        >
         <CIcon
          name="cib-linkedin"
          height="56"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          text="Service 9"
          
        >
          <CIcon
          name="cil-phone"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          text="Service 10"
         
        >
        <CIcon
          name="cil-puzzle"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          text="Service 11"
        >
          <CIcon
          name="cil-print"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          text="Service 12"  
        >
          <CIcon
          name="cil-speech"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-dark"
          text="Service 13"
          
        >
         <CIcon
          name="cil-cloud-download"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="secondary"
          text="Service 14"
        >
          <CIcon
          name="cil-dollar"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-success"
          text="Service 15"
        >
         <CIcon
          name="cib-google-pay"
          height="56"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          text="Service 16"
          
        >
          <CIcon
          name="cil-graph"
          height="52"
          className="my-4"
        />
          <CDropdown>
            <CDropdownToggle caret={false}  color="transparent">
              <CIcon name="cib-addthis" height="52" className="my+1"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
                
                
                </CDropdownItem>  
            </CDropdownMenu>
          </CDropdown>
          
        </CWidgetDropdown>
        <CPagination
            align="center"
            addListClass="some-class"
            activePage={currentPage}
            pages={1}
            onActivePageChange={setCurrentPage}
          />
      </CCol>
         
    </CRow>

  )
}


export default WidgetsDropdown

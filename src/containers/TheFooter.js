import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://polytechnique.cm" target="_blank" rel="noopener noreferrer">Wiagate</a>
        <span className="ml-1">&copy; ENSPY GI-2020/2021</span>
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Une réalisation de:</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">...</a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)

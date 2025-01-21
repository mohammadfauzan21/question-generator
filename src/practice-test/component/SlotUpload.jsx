import React from 'react'

const SlotUpload = () => {
  return (
    <div className="slot-upload">
        <div className="description">
            <i className='bx bxs-file-pdf icon'></i>
            <span className='text-upload'>Select PDF file to upload</span>
        </div>
        <p className='child-text'>File size Max 30 MB or less then that required</p>
    </div>
  )
}

export default SlotUpload
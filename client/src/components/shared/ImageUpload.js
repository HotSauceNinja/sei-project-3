import React from 'react'
import axios from 'axios'

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

function ImageUpload({ onChange, name, value, labelText }) {
  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    onChange({ target: { name, value: res.data.url } })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>


      <div style={{ width: '300px' }}>
        <img src={value} className="card-image" alt="selected" style={{ width: '60%', height: 'auto' }} />
      </div>

      <div>
        <label className="label">{labelText || 'Upload Image'}</label>
        <input
          type="file"
          onChange={handleUpload}
          name={name}
        />
      </div>

    </div>

  )
}

export default ImageUpload
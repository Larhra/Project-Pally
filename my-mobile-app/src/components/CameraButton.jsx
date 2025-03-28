"use client"

import { useState } from "react"
import { Camera, CameraResultType } from "@capacitor/camera"
import Button from "./Button"

function CameraButton() {
  const [photo, setPhoto] = useState(null)

  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      })

      // image.webPath will contain a path that can be set as an image src
      setPhoto(image.webPath)
    } catch (error) {
      console.error("Camera error:", error)
    }
  }

  return (
    <div className="camera-container">
      <Button text="Take Photo" onClick={takePhoto} />
      {photo && <img src={photo || "/placeholder.svg"} alt="Captured" className="camera-preview" />}
    </div>
  )
}

export default CameraButton


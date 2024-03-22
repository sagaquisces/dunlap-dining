import { useRef, useState } from 'react'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'

import './Intro.css'

const Intro = () => {
  const [playVid, setPlayVid] = useState(false)
  const vidRef = useRef()
  const handleVideo = () => {
    setPlayVid((prevPlayVid) => !prevPlayVid)

    if(playVid) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }
  return (
    <div className="app__video">
      <video 
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVid 
            ? <BsFillPauseFill color="#fff" fontSize={30} />
            : <BsFillPlayFill color="#fff" fontSize={30} /> }
        </div>
      </div>
    </div>
  )
}

export default Intro
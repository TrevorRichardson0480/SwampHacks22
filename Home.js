import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { startAudioRecording } from './audio.js'

const Home = () => {
    return (
        <div>
          <button onClick={startAudioRecording} type="button" className="btn btn-secondary btn-circle btn-xl">
            <span className="mic">
              <FontAwesomeIcon className="mic" icon={faMicrophone} />
            </span>
          </button>
        </div>
    )
}

export default Home

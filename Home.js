import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { micStart } from './audio.js'

const Home = () => {
    return (
        <div>
          <button onClick={micStart} type="button" class="btn btn-secondary btn-circle btn-xl">
            <span class="mic">
              <FontAwesomeIcon class="mic" icon={faMicrophone} />
            </span>
          </button>
        </div>
    )
}

export default Home

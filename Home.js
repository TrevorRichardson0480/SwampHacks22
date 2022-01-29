import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
          <button type="button" class="btn btn-secondary btn-circle btn-xl">
            <span class="mic">
              <FontAwesomeIcon class="mic" icon={faMicrophone} />
            </span>
          </button>
        </div>
    )
}

export default Home

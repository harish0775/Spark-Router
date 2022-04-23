import {useEffect} from 'react'
import { useNavigate  } from 'react-router-dom';
 function Protected(props) {
    
     const {Components}= props;
  return (
    
    <div>

        <Components/>
        </div>
  )
}

export default Protected;
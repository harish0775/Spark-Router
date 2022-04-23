import { useParams } from 'react-router-dom'

 function user() {
    const Params = useParams();
    const {name}=Params;
  return (
    <div>
        <h1> Welcome {name}</h1>
    </div>
  )
}
export default user;
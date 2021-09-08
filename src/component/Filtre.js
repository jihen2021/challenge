
import { useDispatch } from 'react-redux'
import {find} from '../redux/actions/action2'

function Filtre() {
   const dispatch= useDispatch()
    return (
        <div>
            
 
  {/* <div class="large ui buttons">
  <button class="ui button" style={{size:'10px'}}  onClick={()=>dispatch(find('All'))}>All</button>
  <button class="ui button" onClick={()=>dispatch(find('Done'))}>Done</button>
  <button class="ui button" onClick={()=>dispatch(find('UnDone'))}>UnDone</button>
</div> */}
</div>
   

       

    )
}

export default Filtre

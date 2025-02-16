import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil';
import { NotificationAtom , TotalNotificationSelector } from './atoms/Notifications';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
 return(
  <div>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  </div>
 )
}


function MainApp() {
  
  /*const [networkcount , setnetworkcount] = useRecoilState(NotificationAtom);
  const total = useRecoilValue(TotalNotificationSelector);


  useEffect(() =>{
    axios.get("http://localhost:3000/notifications")
      .then((res) => {
          setnetworkcount(res.data);
      })
  },[]);*/

  const networkcount = useRecoilValue(NotificationAtom);
  const total = useRecoilValue(TotalNotificationSelector);

  return(
    <div>
      <button>Home </button>

      <button>Network ({networkcount.network >= 100 ? "99+" : networkcount.network})</button>
      <button>Jobs ({networkcount.jobs >= 100 ? "99+" : networkcount.jobs})</button>
      <button>Messages ({networkcount.messaging >= 100 ? "99+" : networkcount.messaging})</button>
      <button>Notifications ({networkcount.notifications >= 100 ? "99+" : networkcount.notifications})</button>
      <button>Me ({total})</button>
    </div>
  )
}
export default App

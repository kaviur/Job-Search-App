import {useState} from 'react'
import MyOfferts from './MyOfferts'


const RecruiterDashboard = () => {

  //const [showRecluiterOffers, setshowRecluiterOffers] = useState(false)
  return (
    <div>
      <MyOfferts />
      {/* <nav className="navbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" onClick={()=>setshowRecluiterOffers(true)}>Mis publicaciones</a>
              </li>
            </ul>
      </nav>
      <div>
        {
          showRecluiterOffers&&<MyOfferts />
        }
      </div> */}
    </div>
  )
}

export default RecruiterDashboard
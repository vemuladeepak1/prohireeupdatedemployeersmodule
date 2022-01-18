import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react'
const Employer_Navbar = () => {
    const[state, setState] = useState({navbar_content:"white",color:"black"});
    const [collapse,setCollapse]= useState();
    const [id,setId] = useState();
    const [width,setWidth]=useState(window.innerWidth)
    const navigate = useNavigate();
    const Resize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",Resize)
    },[])
    useEffect(()=>{
        if(width<1440){
            setCollapse("collapse")
            setId("#navbarNav")
        }else{
            setCollapse("")
            setId("")
        }
    },[width])
    const handleClick = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("type");
      navigate("/signin")
  };
    return (
        <>
        
                <div className="collapse navbar-collapse" id="navbarNav"   >
                    <ul className="navbar-nav "   >
                    <li className="nav-item dropdown position-relative d-inline-block">
                  <a
                    className="nav-link dropdown-toggle  font-weight-bold"
                    href="#"
                    id="a3"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ color: state.color }}
                  >
                    FOR EMPLOYERS
                  </a>
                  <div
                    className="dropdown-menu dropdown-content  d-none position-absolute ml-4 bg-white rounded"
                    aria-labelledby="navbarDropdown" data-toggle={collapse} data-target={id}
                  >
                    <Link className="dropdown-item" to="/company_profile">
                      Company Profile
                    </Link>
                    <Link className="dropdown-item" to="/post_jobs">
                      Post A Job
                    </Link>
                    <Link className="dropdown-item" to="/Manage_jobs">
                      Manage Jobs
                    </Link>
                  </div>
                </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a onClick={()=>handleClick()} className="nav-link   font-weight-bold" id="a5" ><button type="button"
                                    className="btn  navbar-btn" data-toggle="modal" data-target="#MyModal"><i
                                        className="fas fa-user"></i> LOGOUT</button></a>
                        </li>
                    </ul>
                </div>
  

    </>
    )
}
export default Employer_Navbar
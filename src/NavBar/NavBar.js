import React from 'react'
import { BrowserRouter, Link, Route, Routes,Switch } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { getSignUp } from '../action/action';
import { getSignIn } from '../action/action';
import { useDispatch, useSelector } from 'react-redux'
import isAuth,{userType} from '../lib/isAuth';
import apiList from '../lib/apiList';
import axios from 'axios';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Employer_Navbar from './Employer_Navbar';
import Student_Navbar from './Student_Navbar';
const Navbar = () => {
    const[state, setState] = useState({navbar_content:"white",color:"black"});
    const [collapse,setCollapse]= useState();
    const [id,setId] = useState();
    const [width,setWidth]=useState(window.innerWidth)
    const Resize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",Resize)
    },[])
    useEffect(()=>{
        if(width<991){
            setCollapse("collapse")
            setId("#navbarNav")
        }else{
            setCollapse("")
            setId("")
        }
    },[width])
    console.log(isAuth())
    console.log(userType())
    return (
        <>
            <div id="nav-bar" >
                <nav className="navbar navbar-expand-lg fixed-top navbar_content mb-5" id="myScrollspy" style={{ backgroundColor: `${state.navbar_content}` }}>
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img type="logo" className="img-fluid logo_img" src="images/ProHireeLogo.png"
                                style={{ background: 'transparent' }, { height: '50px' }, { width: '70px' }} alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <i className="fa fa-bars text-white"></i>
                        </button>
                      
                            <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav "   >
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold" style={{color:state.color}} id="a1" to="/"  data-toggle={collapse} data-target={id}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold" style={{color:state.color}} id="a1" to="/companies"  data-toggle={collapse} data-target={id}>COMPANIES</Link>
                        </li>
                        <li className="nav-item dropdown position-relative d-inline-block">
                            <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a2" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:state.color}}>
                                BROWSE JOBS
                            </a>
           {/* toggler  changes */}
                            <div className="dropdown-menu dropdown-content d-none position-absolute ml-4 bg-white rounded"
                              data-toggle={collapse} data-target={id}
                                aria-labelledby="a2">
                                <Link className="dropdown-item"  to="/browsefilterlist" >My
                                  Browse Filter List</Link>
                                <Link className="dropdown-item"  to="/browsefiltergrid" >My
                                  Browse Filter Grid</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown position-relative d-inline-block">
                            <a className="nav-link dropdown-toggle  font-weight-bold" href="#" id="a3" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:state.color}}>
                                JOBS
                            </a>
                             {/* toggler  changes */}
                            <div className="dropdown-menu dropdown-content  d-none position-absolute ml-4 bg-white rounded"  data-toggle={collapse} data-target={id}
                                aria-labelledby="navbarDropdown">
                               <Link className="dropdown-item" to="/alljobs">All Jobs</Link>
                               <Link className="dropdown-item" to="/companyjobs">Company Jobs</Link>
                               <Link className="dropdown-item" to="/categoryjobs">Category Jobs</Link>
                               <Link className="dropdown-item" to="/locationaljobs">Locatinal Jobs</Link>
                               <Link className="dropdown-item" to="/designationjobs">Designation Jobs</Link>
                               <Link className="dropdown-item" to="/skilljobs">Skill Jobs</Link>
                            </div>
                        </li>
                        </ul>
                        {isAuth() ? (
                            userType() === "recruiter" ? 
                            (
                            <Employer_Navbar />
                             ):
                             (
                             <Student_Navbar />
                             )
                             )
                        :(
                    
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to='/signup' className="nav-link   font-weight-bold" id="a5" ><button type="button"
                                        className="btn  navbar-btn" ><i
                                            className="fas fa-user"></i> SIGNUP</button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/signin' className="nav-link   font-weight-bold" id="a5" ><button type="button"
                                        className="btn  navbar-btn" ><i
                                            className="fas fa-user"></i> SIGNIN</button></Link>
                                </li>

                            </ul> )
                    }
                    
                        </div>
                     
                       
                    </div>
                </nav>
            </div>
         
        </>
    )
}

export default Navbar


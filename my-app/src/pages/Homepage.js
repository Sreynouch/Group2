import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/img/cultureHeader.jpg';
class Homepage extends React.Component{
    render(){
        return(
            <div>
                <header className="masthead" style={{backgroundImage: `url(${background})`}}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="site-heading">
                                    <h1>Culture Cambodia</h1>
                                    <span className="subheading">know more about Cambodia culture</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className='row'>

                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/pp.jpg')} className='border img-fluid'/>
                        <p className='text-center mt-3 mb-3'>
                            <Link to='/phnompenh' className='btn btn-success'>Phnom Penh</Link>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/sr.jpg')} className='border img-fluid'/>
                        <p className='text-center mt-3 mb-3'>
                            <Link to='/siemreap' className='btn btn-success'>Siem Reap</Link>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/bb.jpg')} className='border img-fluid' />
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>Battambang</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >

                        <img src= {require('../assets/img/bmc.jpg')} style={{height: 220, width:330}} />
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>Banteay Meanchey</a>
                        </p>
                    </div>
                    
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid'/>
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid'/>
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid' />
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid' />
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid'/>
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid'/>
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid' />
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid' />
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid'/>
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid'/>
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid' />
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>
                    <div className='col-5 col-md-3 p-3 mt-2' >
                    <img src= {require('../assets/img/aboutImg.jfif')} className='border img-fluid' />
                        <p className='text-center mt-3 mb-3'>
                            <a className='btn btn-success'>watch</a>
                        </p>
                    </div>




                </div>


                
            </div>
        );
    }
    
}
export default Homepage;

import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'
// import { SplineEvent } from '@splinetool/react-spline';
import Loader from '../components/loader';
import { useState,useEffect } from 'react';
const Home = () => {
    const navigate = useNavigate();
    const [client, setClient] = useState(false);

     useEffect(() => {
        const clientWidth = document.documentElement.clientWidth;
        
        if(clientWidth < 1000){
            setClient(true);
            setTimeout(() => {
                navigate('/events')
            },3000)
        }
        // eslint-disable-next-line
     },[])

  const [screenLoading, setScreenLoading] = useState(false);
    useEffect(() => {
      setScreenLoading(true);
      setTimeout(() => {
        setScreenLoading(false);
      }, 8000);
    }, []);

    return (
        <div>
            {!client ? <Spline scene="https://prod.spline.design/z1df8UIGFMTtO57Z/scene.splinecode" /> :
            <div style={{backgroundColor:"grey",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <screenLoading && Loader  />
                <h3 style={{marginTop:"10px",textAlign:'center'}}>Use your PC for better experience</h3>
                <h3>Redirectng...</h3>
            </div>
            }

        </div>
// =======
    
//     return (
//         <div>
//             <Spline scene="https://prod.spline.design/z1df8UIGFMTtO57Z/scene.splinecode" />
//             { <Loader/>}
//         </div>
        
// >>>>>>> main
    );    
}
export default Home;

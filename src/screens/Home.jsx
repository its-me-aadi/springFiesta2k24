import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'
// import { SplineEvent } from '@splinetool/react-spline';

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



    return (
        <div>
            {!client ? <Spline scene="https://prod.spline.design/z1df8UIGFMTtO57Z/scene.splinecode" /> :
            <div style={{backgroundColor:"grey",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <Loader  />
                <h3 style={{marginTop:"10px",textAlign:'center'}}>Use your PC for better experience</h3>
                <h3>Redirectng...</h3>
            </div>
            }

        </div>
    );    
}
export default Home;

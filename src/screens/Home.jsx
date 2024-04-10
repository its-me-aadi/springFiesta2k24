import Spline from '@splinetool/react-spline';
// import { SplineEvent } from '@splinetool/react-spline';
import Loader from '../components/loader';
import { useState,useEffect } from 'react';
const Home = () => {
    const [screenLoading, setScreenLoading] = useState(false);
    useEffect(() => {
      setScreenLoading(true);
      setTimeout(() => {
        setScreenLoading(false);
      }, 8000);
    }, []);
    return (
        <div>
            <Spline scene="https://prod.spline.design/z1df8UIGFMTtO57Z/scene.splinecode" />
            {screenLoading && <Loader/>}
        </div>
        
    );    
}
export default Home;

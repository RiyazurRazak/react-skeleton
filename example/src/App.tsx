import React, { useEffect, useState } from 'react'

import {SkeletonWrapper} from '@riyazurrazak/react-skeleton'




const App = () => {

 const [Loading, setLoading] = useState(true);

 useEffect(()=>{
  setTimeout(function(){ setLoading(false); }, 10000);
 })

  return(
    <div>
        <div className="card">
           <SkeletonWrapper className="skeleton_wrapper" isLoading={Loading} width="60px" circle height="60px">
              <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="avatar_img" alt="avatar" loading="lazy"></img>
           </SkeletonWrapper>
           <SkeletonWrapper className="skeleton_wrapper" isLoading={Loading} height="30px" width="60%">
               <h1>React Skeleton Wrapper</h1>
           </SkeletonWrapper>
           <SkeletonWrapper isLoading={Loading} height="200px"  wave>
               <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="200px" alt="post"></img>
           </SkeletonWrapper>
           
        </div>

          <div className="dark">

          <div className="card">
            <SkeletonWrapper className="skeleton_wrapper" isLoading={Loading} width="60px" circle height="60px" backgroundColor="rgba(255,255,255,0.13)" highlightColor="rgba(255,255,255,0.08)">
               <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="avatar_img" alt="avatar" loading="lazy"></img>
            </SkeletonWrapper>
            <SkeletonWrapper className="skeleton_wrapper" isLoading={Loading} height="30px" width="60%" backgroundColor="rgba(255,255,255,0.13)" highlightColor="rgba(255,255,255,0.08)">
               <h1>React Skeleton Wrapper</h1>
            </SkeletonWrapper>
            <SkeletonWrapper isLoading={Loading} height="200px"  wave backgroundColor="rgba(255,255,255,0.13)" highlightColor="rgba(255,255,255,0.08)">
             <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="100%" height="200px" alt="post"></img>
           </SkeletonWrapper>
          </div>
         </div>
    </div>

  ) 
}

export default App

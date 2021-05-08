/** @jsx jsx */
import {jsx, css , keyframes} from '@emotion/react'
import React from 'react';


const waveSkeletonKeyframes = keyframes`
  0% {
    transform: translateX(-100%);
  }
  60%{
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const pulseSkeletonKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  50%{
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;


interface Props {
    isLoading : boolean,
    children: React.ReactNode,
    height? : string,
    width? : string,
    backgroundColor? : string,
    highlightColor? : string,
    className? : string,
    circle? : boolean,
    wave?: boolean,
}


const SkeletonWrapper = (
  {
    isLoading, 
    children, 
    backgroundColor, 
    highlightColor, 
    width, 
    height, 
    className, 
    circle,
    wave, 
  }
  : Props & typeof defaultProps) => {


const pulseSkeletonStyles = css`
   animation: ${pulseSkeletonKeyframes} 1.5s ease-in-out 0.5s infinite;
`;    

const waveSkeletonStyles = css`
  position: relative;
  overflow: hidden;
  &::after{
    content: '';
    position: absolute;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    width: ${width};
    height : ${height};
    transform: translateX(-100%);
    background-image: linear-gradient(
    90deg,
    transparent, ${highlightColor}, transparent);
    animation: ${waveSkeletonKeyframes} 1.6s linear 0.5s infinite;
    
  }
 
`;



  return(
        <div>

            {isLoading ?
            
               <span
                 css={css`
                 display: block;
                 background-color: ${backgroundColor};
                 width: ${width};
                 height: ${height};
                 border-radius: ${circle && '100%'};
                 ${wave ? waveSkeletonStyles : pulseSkeletonStyles}
                 `}
                 className={className}
               >
               &zwnj;
              </span>
              :
              children
            }
        </div>  

      
)}

const defaultProps = {
    isLoading : false,
    backgroundColor : `rgba(0, 0, 0, 0.11)`,
    highlightColor : `rgba(0, 0, 0, 0.04)`,
    width: 'auto',
    height : 'auto',
    circle: false,
    wave: false,
}


SkeletonWrapper.defaultProps = defaultProps;




export default SkeletonWrapper
import React, { useEffect } from "react"


const useCustomRef=(ref:React.RefObject<HTMLElement>,cb:()=>void)=>{
   useEffect(()=>{
     
    function clickOutSideHide(e:Event){
       if(ref.current && !ref.current.contains(e.target as Node)){
          cb()
       }

    }

    document.addEventListener('mousedown',clickOutSideHide);

    return ()=>{
         document.removeEventListener('mousedown',clickOutSideHide);
         console.log('clean up caled');
        }

   },[ref,cb])
}
export default useCustomRef
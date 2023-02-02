// import { background } from "@chakra-ui/react"
import {ChevronRightIcon ,ChevronLeftIcon,} from '@chakra-ui/icons'
import { textDecoration } from '@chakra-ui/react'


export const BrowserFuture=()=>{

    const allsection= ["Top Courses","Top Colleges","Top College State Wise"]


    return(
        <div style={{display:"flex", justifyContent:"space-around",  marginLeft:"30px" ,width:"90%" , marginTop:"10px" ,backgroundColor:"#ECF9FF",padding:"20px" }}>

          <ChevronLeftIcon color={"green"} />
           <h1 style={{color:"green" , fontSize:"25px",fontWeight:"600" ,textDecoration:"underline"}}>Browse future</h1>
            <h1 style={{ fontSize:"25px",fontWeight:"400"}}>Top Courses</h1>
            <h1 style={{fontSize:"25px",fontWeight:"400"}}>Browse future</h1>
            <h1 style={{fontSize:"25px",fontWeight:"400"}}>Browse future</h1>
            <ChevronRightIcon color={"green"} />

        
        </div>
    )


}
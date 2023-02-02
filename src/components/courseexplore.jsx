import "./courseexplore.css"
import { ChevronRightIcon} from '@chakra-ui/icons'
import { Spacer } from "@chakra-ui/react"



export const CourseExplore=()=>{

    let  degree=[ "BBA", "B.TECH", "M.TECH", "BCA", "MCA" ,"Bs in Statics","Ms in Statics"]

    return(
        <div style={{ marginTop:"30px",width:"90%", marginLeft:"30px"}}>
             
         <div  style={{ display:"flex" , width:"75%" ,justifyContent:"space-between" ,marginLeft:"25px" }}>
         <div>
         <h1 style={{fontSize:"25px", fontWeight:"600"}}>Top courses  to explore</h1>
         <h1>Choose the best future to yourself</h1>
       </div>
         <h1 style={{fontSize:"21px", fontWeight:"600"}}>View All</h1>
         </div>

         

        <div className="courseexplore_container">

           <div style={{ display:"flex", height:"100px", width:"250px", border:"1px solid grey" , borderRadius:"5px" , backgroundColor:"lightgreen" }} > 
                <h1 style={{padding:"20px"}}>MBA</h1>
                <Spacer/>
                <div style={{padding:"20px"}}>  <ChevronRightIcon color={"white"}/></div>
                </div>
       
        {degree.map((elem,index)=>{

        return(
                <div style={{ display:"flex", height:"100px", width:"250px", border:"1px solid grey" , borderRadius:"5px"}} key={index}> 
                <h1 style={{padding:"20px"}}>{elem}</h1>
                <Spacer/>
                <div style={{padding:"20px"}}>  <ChevronRightIcon/></div>
                </div>

            )
        })}

        </div>

    
        </div>
    )




}
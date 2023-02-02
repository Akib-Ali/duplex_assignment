import "./herosection.css"
import { Input ,Stack,InputGroup,InputLeftElement,InputRightElement, Checkbox} from '@chakra-ui/react'
import { PhoneIcon,ArrowDownIcon } from '@chakra-ui/icons'




export const HeroSection=()=>{

    return(
        <div className="herocontainer">
        
        <div style={{backgroundColor:"#ADE792", marginLeft:"60%" , width:"550px", height:"650px", marginTop:"60px"}}>
          <h1 style={{fontSize:"35px", paddingTop:"35px",  letterSpacing:"3px", fontWeight:"400", paddingLeft:"25px",color:"white"}}>Worry No More About</h1>
           <h1 style={{fontSize:"35px",  paddingLeft:"25px", letterSpacing:"3px",  fontWeight:"400",color:"white"}}>What's Best To Opt.</h1> 
           <h3 style={{fontSize:"25px",  paddingLeft:"25px",color:"white"}}>Get Insttant Listing on colleges, courses,</h3>
           <h3 style={{fontSize:"25px",  paddingLeft:"25px",color:"white"}}>exams and more.</h3>

    <Stack spacing={4}  width={"90%"} margin="auto">
    <InputGroup padding={"10px"} backgroundColor="white">
    
    <Input type='tel' placeholder='I want to kno more about' />
    <InputRightElement
    pointerEvents='none'
    children={<ArrowDownIcon color='gray.300' />}
    />
  </InputGroup>

  <InputGroup padding={"10px"} backgroundColor="white">
    
    <Input type='tel' placeholder='Enter Mobile Number' />
  </InputGroup>

  <div style={{display:"flex"}}>
  <Checkbox></Checkbox>
  <p style={{color:"white" , fontSize:"20px"}}>I agree with  <span style={{color:"black"}}>Terms & Condition</span></p>
 </div>

 <button style={{backgroundColor:"#150050" , color:"white" , padding:"20px" , borderRadius:"10px"}}> Get In touch with me!</button>

 </Stack>

 <div style={{display:"flex" , paddingLeft:"15px" , gap:"15px"}}>

 <div>
  <h1 style={{color:"white", fontSize:"30px" , fontWeight:"400" }}> Every 1  <sub>of</sub></h1>
  <h1 style={{color:"white", fontSize:"30px" , fontWeight:"400" }}>Student 3</h1>
 </div>

 <div style={{color:"white" , fontSize:"20px"}}>
    <p>Searching and getting satisfactory</p>
    <p><span style={{ fontSize:"21px",fontWeight:"700"}}>QUERIES</span> regarding courses , exam, college</p>
    <p>upskill and more  <span style={{ fontSize:"25px",fontWeight:"700"}}>Resolved</span></p>
 </div>


 </div>
 </div>

   


   

        </div>
    )
}
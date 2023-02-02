export const ExploreOption=()=>{

    const courses=["Bachelor in Business Administration", "Masters in BusinessAdministration" ,"MBA in Finance",
     "MBA in Marketing", "Executive MBA", "Bechelor in Technology", "B.tech in Computer Science" , "B.tech in Information Tecnology",
     "B.tech in Mechanical Science","Bs in statics","Ms IN Statistics","Bechelor in Design", "Master in Design"
   ]


   const popularstream=["Management", "Engineering", "Medical Science","Arts","Commerce", "Pharmacy", "Law","Architecture","Fashion Design","Agriculture","Paramedical Science","Computer Hardware","Interior Designing"
]

const topStates=["Maharastra","Uttar Pradesh", "Tamil Nadu","Kerala" ," Haryana","Gujrat"] 
const topcities= ["New Delhi" , "Chandigarh", "Lucknow", "Pune", "Bengaluru", " Indore","Hyderabad","Ahemdabad"]


    return(
        <div style={{marginTop:"50px" , paddingLeft:"30px" ,width:"90%" , marginLeft:"30px"}}>

            <h1 style={{fontSize:"25px" , fontWeight:"600"}}>Explore Option For you</h1>
            <h1 style={{fontSize:"25px" , fontWeight:"500"}}>Poplular Course</h1>
            
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr ", gap:"10px"}}>

           <ul style={{color:"green"}}>
                <li>Bachelor in Hotel Management</li>
            </ul>

            {courses.map((elem,index)=>{
                return (
                    <ul key={index}>
                        <li>{elem}</li>
                    </ul>
                )
            })}

        </div>

        <h1 style={{fontSize:"25px" , fontWeight:"500" , marginTop:"50px"}}>Poplular Stream</h1>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr  ", gap:"10px"}}>

        {popularstream.map((elem,index)=>{

            return (
                <ul key={index}>
                    <li>{elem}</li>
                </ul>
            )
        })}

        </div>

        <h1 style={{fontSize:"25px" , fontWeight:"500" , marginTop:"50px"}}>Top States</h1>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr  ", gap:"10px"}}>

    {topStates.map((elem,index)=>{

     return (
        <ul key={index}>
            <li>{elem}</li>
        </ul>
     )
     })}

  </div>

  <h1 style={{fontSize:"25px" , fontWeight:"500" , marginTop:"50px"}}>Top Cities</h1>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr  ", gap:"10px"}}>

    {topcities.map((elem,index)=>{

     return (
        <ul key={index}>
            <li>{elem}</li>
        </ul>
     )
     })}

  </div>



</div>
    )



}
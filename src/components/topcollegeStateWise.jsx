import "./topcollegeStateWise.css"

export const TopCollegeStateWise=()=>{


    const TopStateWiseCollege=[

        {
            collegeimage:"https://thumbs.dreamstime.com/b/cartoon-sketch-drawing-illustration-cindia-gate-new-delhi-india-cartoon-sketch-india-gate-new-delhi-india-113851135.jpg",
            cityname:"New Delhi"
        
        },
        {
            collegeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfc0H9IMp36saHVP6fWehpS-8UcbpbSetDg&usqp=CAU",
            cityname:"Maharastra"
        
        },
        {
            collegeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgkj4BXDs9Ne9s1CGfYf1cmH6up-aG2PS1Q&usqp=CAU",
            cityname:"Haryana"
        
        },

        {
            collegeimage:"https://upload.wikimedia.org/wikipedia/commons/1/1e/1910_sketch_of_Kashi_Vishwanath_Temple%2C_Vishveshvara%2C_Varanasi%2C_Uttar_Pradesh.jpg",
            cityname:"Uttar Pradesh"
        
        },

        {
            collegeimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErexO3kREEHDxQ42qIXzQnrfriqhd8uBCaw&usqp=CAU",
            cityname:"Tamil Nadu"
        
        },
       
        {
            collegeimage:"https://thumbs.dreamstime.com/b/cartoon-sketch-drawing-illustration-cindia-gate-new-delhi-india-cartoon-sketch-india-gate-new-delhi-india-113851135.jpg",
            cityname:"Uttar Pradesh"
        
        },
        {
            collegeimage:"https://thumbs.dreamstime.com/b/cartoon-sketch-drawing-illustration-cindia-gate-new-delhi-india-cartoon-sketch-india-gate-new-delhi-india-113851135.jpg",
            cityname:"Uttar Pradesh"
        
        },



    ]


    return(
        <div style={{marginTop:"50px" , backgroundColor:"#ECF9FF" ,padding:"20px", width:"90%"}}>

      <div  style={{ display:"flex" , width:"70%" ,justifyContent:"space-between"  , marginLeft:"30px"}}>
       <h1 style={{fontSize:"25px", fontWeight:"600"}}>Top Colleges State Wise</h1>
      <h1 style={{fontSize:"21px", fontWeight:"600"}}>View All</h1>
     </div>

     <div style={{display:"flex", gap:"10px", marginTop:"10px" ,marginLeft:"30px"}}>
        {TopStateWiseCollege.map((elem,index)=>{

            return(
                <div style={{border:"1px solid grey", padding:"5px"}}>
                 <img src={elem.collegeimage} />
                 <h2 style={{textAlign:"center"}}>{elem.cityname}</h2>
          
                 </div>
            )
        })}
     </div>

    </div>
    )





}
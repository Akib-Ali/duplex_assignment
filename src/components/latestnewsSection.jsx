import "./latestnewsSection.css"

export const LatestNewsSection=()=>{

    const studentdetail =[

    {studentspic: "https://img.freepik.com/premium-photo/group-happy-young-students-university_85574-4531.jpg?w=2000",
    detailinfo : "National Institute if Agricultural Extension Management..."
    },
    
    {studentspic: "https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?w=2000",
    detailinfo : "National Institute if Agricultural Extension Management..."
    },
    
    {studentspic: "https://thumbs.dreamstime.com/b/happy-students-bachelors-pointing-finger-you-education-graduation-people-concept-group-international-mortar-boards-84009757.jpg",
    detailinfo : "National Institute if Agricultural Extension Management..."
    }
    



    ]




    return(
        <div style={{width:"90%" , marginLeft:"30px" ,marginTop:"50px"}}>

    
         <div  style={{ display:"flex" , width:"75%" ,justifyContent:"space-between", marginLeft:"30px" }}>
          <h1 style={{fontSize:"25px", fontWeight:"600"}}>Latest News</h1>
         <h1 style={{fontSize:"21px", fontWeight:"600"}}>View All</h1>
         
         </div>

         <div className="latestnews_container">
         {studentdetail.map((elem,index)=>{

            return(

                <div style={{height:"400px", width:"380px" }}>
                  <img src={elem.studentspic}/>
                  <h1 style={{fontSize:"23px", fontWeight:"600"}}>{elem.detailinfo}</h1>
                  <div style={{display:"flex" , justifyContent:"space-between"}}> 
                  <h2 style={{fontWeight:"400"}}>Dec 17 ,2022</h2>
                  <h2 style={{fontSize:"21px", fontWeight:"600"}}>Read More..</h2>
                  </div>
                
                 </div>
            )

         })}
         </div>

                     



        </div>
    )
}
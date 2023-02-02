import "./articles.css"
export const Articles=()=>{

    

        const studentdetail =[
    
        {studentspic: "https://www.eseibusinessschool.com/wp-content/uploads/2022/05/Bachelor-students.jpg",
        detailinfo : "National Institute if Agricultural Extension Management..."
        },
        
        {studentspic: "https://www.frankfurt-school.de/.imaging/default/dam/programme/bachelor-science/Bachelor-programmes-header-mobile.jpg/jcr:content.jpg",
        detailinfo : "National Institute if Agricultural Extension Management..."
        },
        
        {studentspic: "https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_1380w_600h_n/public/2022-10/MicrosoftTeams-image%20%282%29.png?h=41f55a5b&itok=EZPB-hi2",
        detailinfo : "National Institute if Agricultural Extension Management..."
        }
        
    
    
    
        ]
    
    


    return(
              //border
        <div style={{ marginTop:"70px" , width:"90%" ,marginLeft:"30px"}}>        

        
         <div  style={{display:"flex" , width:"75%" ,justifyContent:"space-between" }}>
          <h1 style={{fontSize:"25px", fontWeight:"600" ,paddingLeft:"30px"}}>Articles</h1>
         <h1 style={{fontSize:"21px", fontWeight:"600"}}>View All</h1>
         
         </div>

         <div className="arcticles_container">
         {studentdetail.map((elem,index)=>{

            return(
                //here
                <div className="article_card">
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
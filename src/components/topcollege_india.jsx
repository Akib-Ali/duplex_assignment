import "./topcollege_india.css"
export const TopCollegeCard=()=>{

    const instituedata =[
        {
            instituteimage:"https://www.shutterstock.com/image-photo/bangalore-karnataka-india-august-18-260nw-1161838369.jpg",
            instituename:"Indian Institute of Science",
            location:"Bengalure Karnataka",
            instituedetail:" Rank 1 out 50 as per NIRF. Offers Courses in Science,engineering, architecture , animation, computer,It and more...",
            facilities:["library", "Hotel", "Cagfeteria"],
            salary:"Average Salary: ₹25Lakh"

            
    },
    {
        instituteimage:"https://content.jdmagicbox.com/comp/agra/52/0562p562std15152/catalogue/dr-bhimrao-ambedkar-university-agra-university-agra-universities-31liw6m.jpg",
        instituename:"Agra University",
        location:"Agra",
        instituedetail:" Rank 1 out 50 as per NIRF. Offers Courses in Science,engineering, architecture , animation, computer,It and more...",
        facilities:["library", "Hotel", "Cagfeteria"],
        salary:"Average Salary: ₹15Lakh"

        
}
    ]


 return (
  <div style={{widht:"90%", }}>

  <div  style={{display:"flex" , width:"70%" ,justifyContent:"space-between" , marginLeft:"30px"}}>
    <h1 style={{fontSize:"25px", fontWeight:"600"}}>Top Colleges of India</h1>
   <h1 style={{fontSize:"21px", fontWeight:"600"}}>View All</h1>
</div>
   
   

<div className="topcollegecontainer">

   {instituedata.map((elem,index)=>{
    return(


<div className="institute_card" key={index}>

<img src={elem.instituteimage} />

 <div style={{height:"250px", width:"430px", padding:"30px" ,}} >
    <h1 style={{fontSize:"25px" , fontWeight:"600"}}>{elem.instituename}</h1>
    <h3 style={{fontSize:"25px" , fontWeight:"400"}}>{elem.location}</h3>
    <p>{elem.instituedetail}</p>
    <h2>{`Facilities : ${elem.facilities}`}</h2>
    <h1 style={{fontSize:"21px" , fontWeight:"400"}}> {elem.salary}</h1>
</div>
</div>
    )
   })}
   

</div>


</div>
 )



}
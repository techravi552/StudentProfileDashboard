


fetch("https://studentprofile-2e442-default-rtdb.asia-southeast1.firebasedatabase.app/Students.json")
.then((res)=> res.json()
    
).then((product) =>{
    console.log(product);
    
})

async function fetchData() {
    res =  await fetch("https://studentprofile-2e442-default-rtdb.asia-southeast1.firebasedatabase.app/Students.json")
    let Students = await res.json()
    console.log(Students)

    let studentArray = Object.entries(Students).map(([id , Students])=>({id , ...Students}))
    // console.log("studentArray");
    

    studentArray.map((e)=>{
       console.log("ravi" , e.name)
       tabledata = document.getElementById("tabledata")
    
      tr=document.createElement("tr")
      tr.innerHTML=`<td>${e.name}</td><td>${e.Email}</td> <td>${e.age}</td> <td>${e.Course}</td> <td>${e.Skills}</td></td> <td>${e.Gender}</td>`
      tabledata.append(tr)

    })
}
fetchData()
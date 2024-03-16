import React from "react"
import Student from './Student'


const students = [
    { photo: {profile}, name: "Art James Narboada", email: "artjamesnarboada@gmail.com" },
    { photo: {profile}, name: "Art James Narboada", email: "artjamesnarboada@gmail.com" },
    { photo: {profile}, name: "Art James Narboada", email: "artjamesnarboada@gmail.com" },
    { photo: {profile}, name: "Art James Narboada", email: "artjamesnarboada@gmail.com" },
    { photo: {profile}, name: "Art James Narboada", email: "artjamesnarboada@gmail.com" },
    
  ];
  
  
const Content =() => {
    const studentCard= [];

    for(let x = 0; x< students.length;i++){
        const stud = stud[i];
        studentCard.push(<Student key={i} photo={stud.photo} name={stud.name} email={stud.email}/>)
    }
    return <div>{Student}</div>
}
export default Content
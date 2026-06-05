
import {useEffect,useState} from "react";

export default function Dashboard(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/opportunity/")
    .then(r=>r.json())
    .then(setData);
  },[]);

  return (
    <div>
      <h2>Opportunities</h2>
      {data.map((d,i)=>(
        <div key={i}>
          <h3>{d.title}</h3>
          <p>{d.match}% match</p>
        </div>
      ))}
    </div>
  );
}

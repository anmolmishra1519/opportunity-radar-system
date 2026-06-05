
import {useState} from "react";

export default function Chat(){
  const [msg,setMsg]=useState("");
  const [chat,setChat]=useState([]);

  const send=async()=>{
    const res=await fetch("http://localhost:8000/ai/chat",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({message:msg})
    });
    const data=await res.json();
    setChat([...chat,{u:msg,b:data.reply}]);
    setMsg("");
  };

  return (
    <div>
      <h2>AI Chat</h2>
      {chat.map((c,i)=>(
        <div key={i}>
          <b>You:</b>{c.u}<br/>
          <b>AI:</b>{c.b}
          <hr/>
        </div>
      ))}
      <input value={msg} onChange={e=>setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}

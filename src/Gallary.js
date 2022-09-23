import "./gallary.css"
import React,{useState} from "react"
import Masonry ,{ResponsiveMasonry} from "react-responsive-masonry"
const images=[
  "https://picsum.photos/2000/2000",
  "https://picsum.photos/3000/2000",
  "https://picsum.photos/2000/1500",
  "https://picsum.photos/3000/1500",
  "https://picsum.photos/1000/2500",
  "https://picsum.photos/1500/2000",
]

const Gallary=()=>{
 
    const[data,setData]=useState({img:'' ,i:0})


    const viewImage=(img,i)=>{
     setData({img,i})
    }

    const imgAction=(action)=>{
        let i=data.i
        if(action==='next-img'){
            setData({img:images[i+1],i:i+1})
        }
        if(action==='pre-img'){
            setData({img:images[i-1],i:i-1})
        }
        if(!action){
            setData({img:'',i:0})
        }
    }
    return (
      <>
  
      {data.img && 
      <div style={{
        width:'100%',height:'100vh',background:'black',position:'fixed',display:'flex',
        justifyContent:'center',alignItems:'center',overflow:'hidden',
      }}>
        <button onClick={()=>imgAction()} className='cut'>X</button>
        <button onClick={()=>imgAction('pre-img')}>{'<'}</button>
        <img src={data.img} style={{width:'auto',maxWidth:'90%',maxHeight:'90%'}}></img>
        <button onClick={()=>imgAction('next-img')}>{'>'}</button>
  
      </div>
  
      }
  
  
      <div style={{padding:'10px'}}>
      <ResponsiveMasonry
        columnCountBreakPoints={{350:1,750:2,900:3}}
      >
        <Masonry gutter="10px">
        {images.map((image,i)=>(
          <img key={i} src={image}
          style={{width:'100%',display:'block',cursor:'pointer'}}
          alt=""
  
          onClick={()=>viewImage(image,i)}
          />
        ))}
      </Masonry>
  
      </ResponsiveMasonry>
      </div>
     
      </>
    );
  
}

export default Gallary

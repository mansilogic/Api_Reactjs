// import { useState,useEffect } from "react";

// const Homes = () =>{
//     const [data,setdata] = useState(null);

//     useEffect (() =>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) =>res.json())
//         .then((data) = setdata(data));
//     },[]);

//     console.log(data);

//     return(
//         <div>
//             {
//                 data && data.map((item) =>(
//                     <div key={item.id} className="data-item">
//                         <p>{item.title}</p>
//                         <img src={item.url} height={50} width={50} alt={item.title}></img>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default Homes;


import { useState, useEffect } from "react";
import '../App.css';
import vdata from'./video.json';


const Home = () => {
  const [data, setData] = useState(null);
  const [data2,setdata2] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});
let rowdata = 1;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setData(data));

      
  }, []);
  const toggleItemExpand = (itemId) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [itemId]: !prevExpandedItems[itemId],
    }));
  };
  useEffect(() =>{
    
    fetch("./video.json")
    .then((res) => res.json())
    .then((data2) =>setdata2(data2))
  },[])
  // async function fetchData() {
  //   const data8 = await import('./video.json');
  //   console.log(data8.title);
  // }
  console.log(data);
  console.log(data2);
  // function DisplayData() {
  //   return <div>{vdata.name}</div>;  // Assuming data.json has a "name" key
  // }
  console.log(vdata[0].id);



  return (
    <div  className="data-container">
    <div className="data-scroll">
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>{rowdata++}</p>
            <p>{item.rowNumber}</p>
            <p>{item.id}</p>
            {/* <p>{item.title}</p> */}
            {/* <p>{data.name}</p>            */}
            <img src={item.url} height={50} width={50} alt={item.title}></img>
            <br/>
            <img src={item.thumbnailUrl} height={50} width={50} alt={item.id}></img>
            <br/>
            {expandedItems[item.id] && (
        <div>
          {/* Additional details */}
          <p>Description: {item.title}</p>
          <p>AlbumId: {item.albumId}</p>
          {/* Add more details as needed */}
        </div>
      )}
      <button onClick={() => toggleItemExpand(item.id)}>
        {expandedItems[item.id] ? 'Hide Details' : 'Show Details'}
      </button>
            {/* <video controls autoPlay>
              <source  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" alt="Not supported video">
              </source>
              your browser doesn't suport video.
            </video> */}
            {/* <p>{item.mobileNo}</p>
            <p>{item.emailId}</p>
            <p>{item.message}</p> */}
          </div>
        ))}
        {/* {
          data2 && data2.map((items) =>(
            <div key={items.id}>
              <p>{items.title}</p>
              
              </div>
          ))} */}

          <div>
            
          </div>
    </div>
    </div>
  );
};

export default Home;
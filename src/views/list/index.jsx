import Layout from "../../common/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from"../../components/Datepicker";
function Content() {
  const [currentTime, setCurrentTime] = useState("");
  const [selectedTimezones, setSelectedTimezones] = useState([]);
//   const [currentTime1, setCurrentTime1] = useState(new Date());
const handleTimezoneChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedTimezones([...selectedTimezones, value]);
    } else {
      setSelectedTimezones(selectedTimezones.filter(tz => tz !== value));
    }
  };
  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone/Europe/London")
      .then((response) => {
        setCurrentTime(response.data.datetime);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (

    <Layout
    
      views={
        <div className="container">
          <section className="content-con">
            <div className="content-l">
            <input 
        type="checkbox" 
        value="Asia/Tokyo" 
        onChange={handleTimezoneChange}
        checked={selectedTimezones.includes('Asia/Tokyo')} 
      />
      <input 
        type="checkbox" 
        value="Asia/Bangkok" 
        onChange={handleTimezoneChange}
        checked={selectedTimezones.includes('Asia/Bangkok')} 
      />
      <input 
        type="checkbox" 
        value="Europe/London" 
        onChange={handleTimezoneChange}
        checked={selectedTimezones.includes('Europe/London')} 
      />
      {selectedTimezones.map(timezone => (
        <DatePicker key={timezone} timezone={timezone} />
      ))}

            </div>
            <div className="content-r">
              {/* <h2>some title</h2> */}
              <h3>Current Time in London:</h3>
              <p>{currentTime}</p>
              {/* <input type="date" value={currentTime} onChange={(e) => setCurrentTime(e.target.value)} /> */}
            </div>
          </section>
          <section className="content-con">
            <div className="content-l">
              {/* <h1>Current Time in London:</h1>
              <p>{currentTime1.toLocaleTimeString()}</p> */}
            </div>
            <div className="content-r">
              {/* <img
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt=""
              /> */}
            </div>
          </section>

          <section className="content-con">
            <div className="content-l">
              <img
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />
            </div>
            <div className="content-r">
              <h2>some title</h2>
              <p>เอาน้อยหน่าไปกิน</p>
            </div>
          </section>
        </div>
      }
    />
    
  );
}

export default Content;

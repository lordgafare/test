import {useState, useEffect} from "react";
import axios from "axios";
function DatePicker (p){
    const [date, setDate] = useState("");
    console.log(p.timezone);
    // useEffect (() => {
    //     const interval = setInterval(() => {
    //         setDate(new Date());
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [] );
  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone/"+p.timezone)
      .then((response) => {
        const datetime = response.data.datetime;
        const formatDate = datetime.split('T')[1];
        const formatDate1 = formatDate.split('.')[0];
        setDate(formatDate1);
        // const timer = setInterval(() => {
        // setDate((prevTime) => new Date(prevTime.getTime()));
        // });
        // return () => clearInterval(timer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
    return (
        <div>
           
            <h1>{p.timezone}</h1>
            <h1>{date}</h1>
        </div>
    );

}

export default DatePicker;

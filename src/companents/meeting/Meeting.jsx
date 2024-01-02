
import { useEffect, useState } from 'react';
import { observer } from "mobx-react"
import MeetingStore from '../../store/MeetingStore';
import './Meeting.css'
import ServiceStore from '../../store/ServiceStore';
const Meeting = (observer(() => {

  const [isOpen, SetIsOpen] = useState(false);
  const getColr = (datetime) => {
    const today = new Date();
    const myDate = new Date(datetime);
    const x = myDate.getTime() - today.getTime()//datediff
    const diffDays = Math.ceil(x / (1000 * 3600 * 24));
    if (diffDays === 1)//today
      return 0
    if (diffDays <= 7)//this week
      return 1
    if (diffDays > 7)//future
      return 2
    // return -1
  }
  const foundNameServices = (serviceType) => {
    console.log("item.id===", serviceType)

    ServiceStore.serviceArr.forEach((item,i)=>{
      debugger
      console.log("item.id===", item.id)
      if(item.id==serviceType)
        return item.name;
    })
    // ServiceStore.serviceArr.map((item,i)=>(
    //   item.id==serviceType?
    //     {return item.name}
    // ))}
    return "shanot"
  }
  useEffect(() => {
    MeetingStore.getMeeting()
    console.log("inside use effect")
  }, []);
  return (
    <>
      <div>the meeting:  </div>
      {
        MeetingStore.meetingArr.map((x1, key) => (//איפה שמים את ה-key
          <>
            {console.log(x1)}
            {/* {z=getColr(x1.dateTime)} */}
            {/* key={x1.id} */}
            <div className={getColr(x1.dateTime)===0? `green` :getColr(x1.dateTime)===1? `orange` :`blue`}>
              <h2>id: {x1.id}</h2>
              <h2>serviceType: {x1.serviceType}</h2>
              <h2>serviceName: {foundNameServices(x1.serviceType)}</h2>

              <h3>dateTime: {x1.dateTime}</h3>
              <h3>clientName: {x1.clientName}</h3>
              <h3>clientPhone: {x1.clientPhone}</h3>
              <h3>clientEmail: {x1.clientEmail}</h3>
            </div>
          </>
        ))

      }
    </>
  )
}))
export default Meeting

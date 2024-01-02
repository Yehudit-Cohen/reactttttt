// import {number} from 'react'
import { observable, makeObservable, action } from 'mobx';
import Swal from 'sweetalert2'

class MeetingStore {

    constructor() {
        makeObservable(this, {
            meetingArr: observable,
            saveMeeting: action,
            getMeeting: action,
            countId: observable,
            addCountId: action
            // addMeeting:action
        })
    }
    countId = 0;
    addCountId = () => {
        this.countId = eval(this.countId + 1);
        console.log(this.countId)
    }
    meetingArr = [];
    getMeeting = async () => {
        const response1 = await fetch("http://localhost:8787/appointments", {
            method: "GET",

            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log("after get")

        this.meetingArr = await response1.json();

    }
    saveMeeting = async (x) => {
        // debugger
        // this.addCountId()
        // console.log("countid======= ", this.countId);

        console.log("meeting", x);
        console.log("meeting json", JSON.stringify(x));

        const response2 = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(x),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response2.status)
        const x1 = response2.status
        console.log("x1====", x1)
        console.log("728652x1===200", x1 === 200)

        //  this.addMeeting(x)
        // return  x1==="200"
        // debugger
        if (x1 === 200) {
            Swal.fire("success")
            this.getMeeting()
            console.log("true!!!!!!!!!!!!!!!!!!!!");
        }
        Swal.fire("the date is apear, please try again");

    }
    // addMeeting=(value)=>{
    //     this.meetingArr=[...this.meetingArr,{value}];
    // }

}
export default new MeetingStore();
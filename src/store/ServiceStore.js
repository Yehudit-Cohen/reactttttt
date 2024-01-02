import { observable, makeObservable, action } from 'mobx';
class ServiceStore{
    constructor() {
        makeObservable(this, {
            countId: observable,
            addCountId:action,
            getServices:action,
            serviceArr:observable,
            saveService:action,
            // addservice:action,
        })        
    }
    serviceArr=[]
    service={
        id: 1,
        name: "דמותג",
        description: "דמות שתלווה אותכם לכל אורך הדרך, בכל הווראיציות",
        price: 500,
        duration: 60,
    }
    countId=0;
    addCountId = () => {
        this.countId=eval( this.countId+1);
        console.log(this.countId)
    }
    getServices = async () => {
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(this.service),
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log("after post")

        const response1 = await fetch("http://localhost:8787/services", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log("after get")
        this.serviceArr = await response1.json();
    }

    saveService=async(x)=>{
        this.addCountId()
        console.log("countid======= ",this.countId);
        console.log("service",x);
        console.log("service json",JSON.stringify(x));

        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(x),
            headers: {
              "Content-Type": "application/json",
            },
          });
         console.log(response.status)
         this.getServices()
        //  this.addservice(x)
    }
    // addservice=(value)=>{
    //     this.serviceArr=[...this.servicesArr,{value}];
    // }
}
export default new ServiceStore();
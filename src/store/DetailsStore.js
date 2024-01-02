import { observable, makeObservable, action } from 'mobx';
// import logo from "../../assets/logo.jpg"

class DetailsStore {

    detailsEdit2 = {
        id: "123",
        name: "ציורים שמדברים",
        address: "Rothschild 60 Tel Aviv",
        phone: "0583299119",
        owner: "אתי ברקוביץ",
        logo: "https://coding-academy.org/images/ca_logo.png",
        description: "המקום שלך לציור מושלם",
    };
    detailsEdit = {
        id: '',
        name: '',
        address: '',
        phone: '',
        owner: '',
        logo: '',
        description: '',
    };
    constructor() {
        makeObservable(this, {
            detailsEdit: observable,
            // setEditDetails: action,
            setIsSave: action,
            isSave: observable,
            getDetails: action,
            saveDetails: action,
            isEditBefore: observable,
            setisEditBefore: action,
            initDetails: action,
            setEditDetails:action
        })

    }
    initDetails = async () => {
        // debugger
        const response2 = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify(this.detailsEdit),
            headers: {
                "Content-Type": "application/json"
            },
        });
        console.log("after post mydetails now   ", response2.status, "  detailsEditssss   ", this.detailsEdit)
        // debugger
        // const response1 = await fetch("http://localhost:8787/businessData", {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        // });
        // console.log("after get")

        // this.detailsEdit = await response1.json();
    }

    getDetails = async () => {
        // debugger
        // const response = await fetch("http://localhost:8787/businessData", {
        //     method: "POST",
        //     body: JSON.stringify(this.detailsEdit),
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        // });
        // console.log("after post details")
// debugger
        const response1 = await fetch("http://localhost:8787/businessData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        // debugger
        console.log("after get")
        const x = await response1.json();
        // debugger
        console.log("response1.json() ",x)
        this.setEditDetails(x)
        console.log("get03:15", this.detailsEdit.id)
        // if (this.detailsEdit.id === undefined) {
        //     console.log("tryyyyyyyyyyyyyyyy", this.detailsEdit.id)
        //     this.initDetails()
        // }
    }


    saveDetails = async (x) => {
        // debugger
        console.log("details", x);
        console.log("details json", JSON.stringify(x));
        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify(x),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.status)
        console.log("body", response.body)
        this.getDetails()
    }
    setEditDetails = (value) => {
        // debugger
        this.detailsEdit.id=value.id
        this.detailsEdit.address=value.address,
        this.detailsEdit.description=value.description,
        this.detailsEdit.logo=value.logo,
        this.detailsEdit.name=value.name,
        this.detailsEdit.owner=value.owner,
        this.detailsEdit.phone=value.phone
    }
    isEditBefore = false;
    isSave = false;
    setIsSave = (value) => {
        this.isSave = value;
    }
    setisEditBefore = (value) => {
        this.isEditBefore = value;
    }

}
export default new DetailsStore();

//Array of Object

var arrobj=[
    {
        fname:"Sumit",
        id:9,
        address:{
            area:'Ambegaon',
            pincode:411046
        },
        month:["Jan","Feb"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:55
            }
        ]
    },
    {
        fname:"Kiran",
        id:6,
        address:{
            area:'Karve nagar',
            pincode:411045
        },
        month:["Jan","Feb","March"],
        result:[
            {
                subj:"M1",
                marks:60
            },
            {
                subj:"M2",
                marks:75
            },
            {
                subj:"M3",
                marks:85
            }
        ]
    },
    {
        fname:"Spruha",
        id:3,
        address:{
            area:'FC Road',
            pincode:411056
        },
        month:["Jan","Feb","March","May"],
        result:[
            {
                subj:"M1",
                marks:42
            },
            {
                subj:"M2",
                marks:65
            },
            {
                subj:"M3",
                marks:85
            }
        ]
    }

];

for (let i = 0; i < arrobj.length; i++) {
   
    console.log(`
        First Name  ::${arrobj[i].fname}
        id          ::${arrobj[i].id}
        Address Area::${arrobj[i].address.area}
            Pincode ::${arrobj[i].address.pincode}
        Month       ::${arrobj[i].month.join(" ")}
    `)

    for (let j = 0; j < arrobj[i].result.length; j++) {
        console.log(`
        ------------Result---------------------
            Subject :: ${arrobj[i].result[j].subj}
            Marks   :: ${arrobj[i].result[j].marks}
        `)
        
    }



}
//Array of Object
var arrobj = [
    {
        fname: "Sumit",
        id: 9,
        address: {
            area: 'Ambegaon',
            pincode: 411046
        },
        month: ["Jan", "Feb"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 55
            }
        ]
    },
    {
        fname: "Kiran",
        id: 6,
        address: {
            area: 'Karve nagar',
            pincode: 411045
        },
        month: ["Jan", "Feb", "March"],
        result: [
            {
                subj: "M1",
                marks: 60
            },
            {
                subj: "M2",
                marks: 75
            },
            {
                subj: "M3",
                marks: 85
            }
        ]
    },
    {
        fname: "Spruha",
        id: 3,
        address: {
            area: 'FC Road',
            pincode: 411056
        },
        month: ["Jan", "Feb", "March", "May"],
        result: [
            {
                subj: "M1",
                marks: 42
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "M3",
                marks: 85
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        First Name  ::" + arrobj[i].fname + "\n        id          ::" + arrobj[i].id + "\n        Address Area::" + arrobj[i].address.area + "\n            Pincode ::" + arrobj[i].address.pincode + "\n        Month       ::" + arrobj[i].month.join(" ") + "\n    ");
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n        ------------Result---------------------\n            Subject :: " + arrobj[i].result[j].subj + "\n            Marks   :: " + arrobj[i].result[j].marks + "\n        ");
    }
}

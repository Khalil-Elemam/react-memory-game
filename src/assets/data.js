const data =  [
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-react",
        id: 1,
        wrongMatch: false
    },
    
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-angular",
        id: 2,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-vuejs",
        id: 3,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-node-js",
        id: 4,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-java",
        id: 5,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-golang",
        id: 6,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-rust",
        id: 7,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-python",
        id: 8,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-html5",
        id: 9,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-css3-alt",
        id: 10,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-react",
        id: 11,
        wrongMatch: false
    },
    
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-angular",
        id: 12,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-vuejs",
        id: 13,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-node-js",
        id: 14,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-java",
        id: 15,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-golang",
        id: 16,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-rust",
        id: 17,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-python",
        id: 18,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-html5",
        id: 19,
        wrongMatch: false
    },
    {
        isClicked: false,
        isDone: false,
        icon: "fa-brands fa-css3-alt",
        id: 20,
        wrongMatch: false
    }

]


function shuffle(array) {
    let length = array.length
    for(let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * length)
        let temp = array[i]
        array[i] = array[randomIndex]
        array[randomIndex] = temp
    }
    return array
}

export default shuffle(data)
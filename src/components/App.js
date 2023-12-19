import React, {useState} from "react";


let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]
const App = () => {

    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [relation, setRelation] = useState("");
    // const [btnClicked, setBtnClicked] = useState(false);

    function findRelation(event) {
        event.preventDefault();

        if(name1.trim() === "" || name2.trim() === ""){
            // setBtnClicked(false);
            setRelation("Please Enter Valid Names");
            return;
        }

        let str1 = name1
        let str2 = name2
        for(let ch of str1){
            if(str2.includes(ch)){
                str1 = str1.replace(ch, "");
                str2 = str2.replace(ch, "");
            }
        }
        setName1(str1);
        setName2(str2);
        // setBtnClicked(true);
        setRelation(arr[(str1.length + str2.length)%6]);
    }
    


    return(
        <div id="main">
            <form>
               <input data-testid="input1" type="text" placeholder="Enter First Name" name="name1"
               onChange={(event) => setName1(event.target.value)}
               value={name1} 
               />

               <input data-testid="input2" type="text" placeholder="Enter Second Name" name="name2"
               onChange={(event) => setName2(event.target.value)}
               value={name2} 
               />
               
               <button data-testid="calculate_relationship" type="submit"
               onClick={findRelation}>Calculate Relationship Future</button>
               
               <button data-testid="clear" type="reset" 
               onClick={() =>{
                setName1("")
                setName2("")
                setRelation("")
                // setBtnClicked(false)
               }}
               >Clear</button>
            </form>

            <h3 data-testid="answer">
                {
                    // btnClicked && (arr[(str1.length + str2.length)%6])
                    relation
                }
            </h3>
        </div>
    )
}


export default App;

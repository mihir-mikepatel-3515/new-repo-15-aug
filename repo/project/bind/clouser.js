function outer(){
        let username="mihirpatel";
        function inner(){
            let secret="abc123";
            console.log("inner",username);
        }
       
        function inner2(){
        
            console.log("inner2",username);
            // console.log(secret);
        }
         inner();
        inner2(); 
    }
    outer();
    // console.log("outer",username);
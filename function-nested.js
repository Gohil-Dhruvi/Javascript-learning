    // lexical scope

    //  function outerFun()
    //     {
    //         console.log("outer function is called...");
            
    //         function innerFun()
    //         {
    //             console.log("Inner function called...");
    //         }
    //         innerFun();
    //     }
        
        // clouser function

        // function outerFun()
        // {
        //     let outer=100;
        //     function innerFun()
        //     {
        //         let inner=50;
        //         console.log("Inner function called...",inner+outer);
        //     }
        //     innerFun();
        //     console.log("outer function is called...",inner-outer); 
        // }
        
        // function outerFun()
        // {
        //     let a=150;
        //     function innerFun()
        //     {
        //         let b=500;
        //         return a+b;
        //     }
        //     return innerFun;
        // }

        // let result = outerFun();
        
        // console.log("outer function result:",result());

        // Anonymous function

        // let a=function()
        // {
        //     console.log("function as variable...");
        // }
        // a();

        // let a = function(n1,n2,n2)
        // {
        //     console.log("function as variable...",n1+n2+n3);
        // }
        // let data=a(12,15,58);
        // console.log(data);
        
        // Arrow function 

        // function hello()
        // {
        //     console.log("Hello world...");
        // }
        // hello();

        let hello() =() => console.log("Hello World ");
        
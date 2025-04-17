import './App.css'
/*
 proxy vite.config.js jo client me hay usme add kiya jata hay

*/
function App() {
   // const { theme, toggleTheme } = useTheme();
   // const doit= async()=>{
   //    const formData={
   //      "name":"ravi",
   //       "email":"emai.com",
   //       "password":"password"
   //    }
      
   //    //insomniya ke bajaye ham yaha se data post kar rahe hayjo server ke paas ja 
   //     //rha hay 
   // const data=await fetch('/api/user',{///api chnage ho jayegs http://localhost:3000/ me jo proxy me likha gya hay:
   //     method:'POST',
   //     headers:{ 
   //       'Content-Type':'application/json'
   //      },
   //      body:JSON.stringify(formData),//body me json data rakha gya hay:
   // });

   const searchUsers = async (word) => {
      const res = await fetch(`/api/users/search?query=${word}`);
      const data = await res.json();
      console.log(data); // matched users
    };

      
   return(
      <>
       <button onClick={()=>searchUsers}>click</button>
        
      </>
      
   )

}


export default App

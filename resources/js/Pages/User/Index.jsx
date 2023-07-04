import NavBar from "@/Components/NavBar";
import Layout from "@/Layouts/Layout";



  const Index = (props) => {
    return(
      <>
    <h1>ユーザ一覧</h1>
    <ul>
          {props.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </> 
    )
  };
  
  
  Index.layout = (page) => <Layout children={page} />
  export default Index;
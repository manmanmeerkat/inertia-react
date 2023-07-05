import NavBar from "@/Components/NavBar";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";


  const Index = (props) => {
    return(
      <>
    <h1>ユーザ一覧</h1>
    <div>
      <Link href={route("user.create")} as="button" type="button">
        ユーザー登録
      </Link>
    </div>
    <ul>
          {props.users.map((user) => (
            <li
             key={user.id}
             style={{ display: "flex", alignItems: "center" }}
            >
              {user.avatar_file_path && (
                <img
                    src={user.avatar_file_path}
                    style={{ width: "30px" }}
                />
              )}
              <span>{user.name}</span>
              </li>
          ))}
        </ul>
      </> 
    )
  };
  
  
  Index.layout = (page) => <Layout children={page} />
  export default Index;
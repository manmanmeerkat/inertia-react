import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { router } from '@inertiajs/react'

const Create = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]:value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post('/user', values);
    }

    return (
        <>
            <Head title="ユーザーの登録"></Head>
            <h1>ユーザーの登録</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">名前:</label>
                    <input id="name" value={values.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">メールアドレス:</label>
                    <input 
                        id="email" 
                        value={values.email} 
                        onChange={handleChange} 
                    />
                </div>

                <div>
                    <label htmlFor="password">パスワード:</label>
                    <input 
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
          </div>
        </>
   );
};

Create.layout = (page) => <Layout children={page} />;

export default Create;
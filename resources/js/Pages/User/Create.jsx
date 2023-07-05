import Layout from "@/Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { router } from '@inertiajs/react'

const Create = () => {
   const { data, setData, post, errors, processing } = useForm({
        name: '',
        email: '',
        password: '',
        avatar: '',
    });

    function onSubmit(e) {
        e.preventDefault();
        post('/user');
    }

    return (
        <>
            <Head title="ユーザーの登録"></Head>
            <h1>ユーザーの登録</h1>
            <div>
                <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">名前:</label>
                    <input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="email">メールアドレス:</label>
                    <input 
                        id="email" 
                        value={data.email} 
                        onChange={(e) => setData('email', e.target.value)} />
                        {errors.name && <div>{errors.name}</div>}
                </div>

                <div>
                    <label htmlFor="password">パスワード:</label>
                    <input 
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div>
                    <label htmlFor="avatar">画像:</label>
                    <input type="file" onChange={(e) => setData("avatar", e.target.files[0]) } />
                    {errors.avatar &&
                    <div>{errors.avatar}</div>
                    }
                </div>
                <button type="submit" disabled={processing}>登録</button>
            </form>
          </div>
        </>
   );
};

Create.layout = (page) => <Layout children={page} />;

export default Create;
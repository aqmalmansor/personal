import { Button, Input } from '@mantine/core';
import Image from 'next/image';

import { auth } from '@/server/auth';
import { getUserList, login, logout } from '@/server/users';

const Home = async () => {
    const userList = await getUserList();

    const renderUserList = () => {
        if (!userList || !userList) return null;

        return userList.map((item) => {
            return (
                <div className='flex flex-row'>
                    {item.image && (
                        <Image src={item.image} alt={item.name ?? ''} width={50} height={50} />
                    )}
                    <div>{item.name}</div>
                </div>
            );
        });
    };

    const session = await auth();

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            {renderUserList()}
            <form action={session ? logout : login}>

                <Input
                    placeholder='Name'
                    name='name'
                    readOnly
                    value={session?.user.name ?? ''}
                />

                <Button type='submit' name='provider' value='google'>
                    {session ? 'Logout' : 'Login'}
                </Button>
            </form>

        </main>
    );
};

export default Home;

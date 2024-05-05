import { Button, Input } from '@mantine/core';

import { createUser, getUserList } from '@/server/users';

const Home = async () => {
    const userList = await getUserList();

    const renderUserList = () => {
        if (!userList || !userList) return null;

        return userList.map((item) => {
            return (
                <div>{item.name}</div>
            );
        });
    };

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            {renderUserList()}
            <form action={createUser}>

                <Input
                    placeholder='Name'
                    name='name'
                />

                <Button type='submit'>
                    Create
                </Button>
            </form>

        </main>
    );
};

export default Home;

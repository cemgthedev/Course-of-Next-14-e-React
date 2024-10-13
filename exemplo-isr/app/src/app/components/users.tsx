import { getUsers } from "../api/actions";

export async function Users() {
    const users = await getUsers();

    return (
        <ul>
            {
                users && users.length > 0 && users.map((user:{id: number, login: string}) => (
                    <li key={user.id}>{user.login}</li>
                ))
            }
        </ul>
    );
}
import React, {useEffect, useState} from 'react';
import axios from "axios";

import UserService from "../../services/UserService";

function UserList(props) {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const temp = UserService.getCurrentUser();

            let config = {
                headers: {
                    'Authorization': 'Bearer ' + temp.accessToken
                }
            }

            await axios.get(
                'https://secure-auth-api-paradocx96.herokuapp.com/api/auth/users',
                config
            ).then((response) => {
                setUsersList(response.data)
            }).catch((e) => {
                console.log(e.message)
            });
        }

        getUsers();
        console.log(usersList);
    }, []);


    return (
        <div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Username
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Email
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Contact No
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Role
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        usersList.length === 0 ?
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                </th>

                                <td className="py-4 px-6">
                                </td>

                                <td className="py-4 px-6">
                                </td>

                                <td className="py-4 px-6">
                                </td>

                                <td className="py-4 px-6 text-right">
                                </td>
                            </tr>
                            :
                            usersList.map((item) => (
                                <tr key={item.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <th scope="row"
                                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.username}
                                    </th>

                                    <td className="py-4 px-6">
                                        {item.email}
                                    </td>

                                    <td className="py-4 px-6">
                                        {item.contactNo}
                                    </td>

                                    <td className="py-4 px-6">
                                        {item.userType}
                                    </td>

                                    <td className="py-4 px-6 text-right">
                                        <a href="#"
                                           className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default UserList;

import { ApiService } from "@/services/apiService";
import { USER } from "@/types/user";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import UserForm from "./userForm";
import Loader from "./loader";
import Image from "next/image";
import deleteIcon from "../assets/images/delete.svg";
import editIcon from "../assets/images/edit.svg";
import { USERS } from "@/constants";
import Confirmation from "./confirmation";

const inter = Inter({ subsets: ["latin"] });

const Users = () => {
    let [users, setUsers]: any = useState([]);
    let [loading, setLoading] = useState(true);
    const [openUserModal, toggleUserModal] = useState(false);
    const [remove, setRemove] = useState(false);
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        setLoading(true);
        try {
            let res: any = await ApiService.listUsers();
            if (res?.success) {
                setUsers(res?.success?.data);
            } else {
                throw res;
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setUsers(USERS);
            setLoading(false);
        }
    };
    const createUser = async (data: USER) => {
        setLoading(true);
        try {
            let res: any = await ApiService.createUser(data);
            if (res?.success) {
                setUsers(res?.success?.data);
            } else {
                throw res;
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };
    const editUser = async (data: USER) => {
        setLoading(true);
        try {
            let res: any = await ApiService.editUser(data);
            if (res?.success) {
                setUsers(res?.success?.data);
            } else {
                throw res;
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };
    const deleteUser = async (data: USER) => {
        setLoading(true);
        try {
            let res: any = await ApiService.deleteUser(data);
            if (res?.success) {
                setUsers(res?.success?.data);
            } else {
                throw res;
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };
    const renderUsersTable = () => {
        return (
            <>
                <div className="bg-slate-100 sticky top-0">
                    <div className="flex items-center py-3 px-3 justify-between container mx-auto">
                        <h2 className="text-black text-[20px]">Users</h2>

                        <span className="inline-block bg-gray-500 hover:bg-gray-700 text-white py-2 px-5 rounded cursor-pointer" onClick={() => toggleUserModal(true)}>Create</span>
                    </div>
                </div>
                <div className="container mx-auto px-3">
                    {new Array(10).fill(0).map((val, index) => (
                        <div className="my-3 border bg-white overflow-hidden bg-opacity-50 rounded-md lg:text-[16px] text-[14px]">
                            <div className="bg-slate-100 flex text-black w-[100%] py-2 px-3 justify-end text-center">
                                <span className="cursor-pointer text-green-600" onClick={() => toggleUserModal(true)}>
                                    <Image width={20} src={editIcon} alt='Edit' />
                                </span>

                                <span className="ml-3 inline-block cursor-pointer text-red-600" onClick={() => setRemove(true)}>
                                    <Image width={20} src={deleteIcon} alt='Delete' />
                                </span>
                            </div>
                            <div className="p-4">
                                <div className="grid gap-x-4 gap-y-2 mb-2 md:grid-cols-2">
                                    <div className="flex">
                                        <span className="text-black md:w-[125px] w-[100px]">Email: </span>
                                        <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">test@email.com</p>
                                    </div>
                                    <div className="flex">
                                        <span className="text-black md:w-[125px] w-[100px]">Username: </span>
                                        <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">testw3</p>
                                    </div>
                                </div>

                                <h3 className="font-bold text-black mb-2 mt-4">Address</h3>
                                <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                                    <div className="flex">
                                        <span className="text-black md:w-[125px] w-[100px]">Street: </span>
                                        <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">121</p>
                                    </div>
                                    <div className="flex">
                                        <span className="text-black md:w-[125px] w-[100px]">City Name: </span>
                                        <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">City Name</p>
                                    </div>
                                    <div className="flex">
                                        <span className="text-black md:w-[125px] w-[100px]">Postal Code: </span>
                                        <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">122322</p>
                                    </div>
                                    <div className="flex">
                                        <span className="text-black md:w-[125px] w-[100px]">Country Code: </span>
                                        <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">+96</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {openUserModal && <UserForm toggleUserModal={toggleUserModal} userData={users[0]} />}
                {remove && <Confirmation setRemove={setRemove} title={'Confirmation'} discription={'Are you sure you want to delete?'} />}
            </>
        );
    };

    if (loading) {
        return <Loader />;
    }
    return (
        <main className={`${inter.className}`}>
            {renderUsersTable()}
        </main>
    );
};

export default Users;

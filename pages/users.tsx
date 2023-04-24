import { ApiService } from "@/services/apiService";
import { USER } from "@/types/user";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Users = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

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
      <table className="table-auto">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    );
  };

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {renderUsersTable()}
    </main>
  );
};

export default Users;

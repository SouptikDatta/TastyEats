import React from 'react'
import useMenu from '../../../hooks/useMenu'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import {Link} from 'react-router-dom'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu()
  const axiosSecure =  useAxiosSecure()

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this menu!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        console.log(`Attempting to delete item with ID: ${item._id}`);
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        refetch()
        Swal.fire({
          title: "Deleted!",
          text: "Menu has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
    <div className='w-full md:w-[870px] px-4 mx-auto'>
      <h2 className='text-2xl font-semibold my-4'>
        Manage all <span className='text-green'>Menu Items</span>
      </h2>

      {/* Menu item table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="bg-green text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {menu.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle w-12 h-12'>
                          <img src={item.image} alt='' />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashboard/update-menu/${item._id}`} >
                      <button className='btn btn-ghost btn-xs bg-blue-600 text-white'><FaEdit/></button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteItem(item)}
                      className='btn btn-ghost text-red'><FaTrashAlt/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageItems
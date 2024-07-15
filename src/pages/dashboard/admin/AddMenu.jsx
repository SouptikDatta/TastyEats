import React from 'react'
import { FaUtensils } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const AddMenu = () => {
    
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const {register, handleSubmit, reset} = useForm()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
    const image_hosting_api = `https://api.imgbb.com/1/upload?&key=${image_hosting_key}`

    const onSubmit = async (data) => {
        const imageFile = {image: data.image[0]}

        const hostingImg = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if(hostingImg.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: hostingImg.data.data.display_url
            }
            const postMenuItem = axiosSecure.post('/menu',menuItem);
            if(postMenuItem){
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your menu item has been added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

  return (
    <div className='w-full md:w-[870px] px-4 mx-auto'>
        <h2 className='text-2xl font-semibold my-4'>
            Upload a New <span className='text-green'>Menu Item</span>
        </h2>

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* 1st row */}
                <div className='form-control w-full'>
                    <label className='label-text'>Recipe Name*</label>
                    <input type='text' placeholder='Recipe name'
                        {...register('name', {required: true})}
                        className='input input-bordered w-full'
                    />
                </div>

                {/* 2nd row */}
                <div className='flex items-center gap-4'>
                    {/* categories */}
                    <div className='form-control w-full my-6'>
                        <label className='label-text'>
                            Category*
                        </label>
                        <select {...register('category', {required: true})} 
                            className='select select-bordered' defaultValue='default'>
                            <option disabled value='default'>
                                Select a category
                            </option>
                            <option value='salad'>Salad</option>
                            <option value='pizza'>Pizza</option>
                            <option value='soup'>Soup</option>
                            <option value='dessert'>Dessert</option>
                            <option value='drinks'>Drinks</option>
                            <option value='popular'>Popular</option>
                        </select>
                    </div>

                    {/* price */}
                    <div className='form-control w-full'>
                        <label className='label-text'>Price*</label>
                        <input type='number' placeholder='Price'
                            {...register('price', {required: true})}
                            className='input input-bordered w-full'
                        />
                    </div>
                </div>

                {/* 3rd row */}
                <div className='form-control'>
                    <label className='label-text'>Recipe Details*</label>
                    <textarea {...register('recipe', {required: true})}
                        className='textarea textarea-bordered h-24'
                        placeholder='Write details about this recipe'
                    >
                    </textarea>
                </div>

                {/* 4th row */}
                <div className='form-control w-full my-6'>
                    <input type='file' {...register('image', {required: true})}
                        className='file-input w-full max-w-xs'/>
                </div>

                <button className='btn bg-green text-white px-6'><FaUtensils/> Add Item</button>

            </form>
        </div>
    </div>
  )
}

export default AddMenu
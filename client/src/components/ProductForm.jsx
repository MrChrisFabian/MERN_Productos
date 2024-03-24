import React from 'react';
import axios from "axios";
import useForm from '../hooks/useForm';
import { useState } from 'react';


const ProductForm = () => {

    const initialValues = {
        nombre: '',
        precio: 0,
        description: ''
    }

    const { values: product, handleChange, clearData } = useForm(initialValues);

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/', product)
            .then(res => {
                console.log(res)
                clearData();
            })
            .catch(err => {
                setError(err.response.data.error.message)
            })
    }

    return (
        <div className='flex flex-col items-center content-center'>
            <div>
                <h1 className='mt-4'>Product Manager</h1>
            </div>
            <div>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input onChange={handleChange} name='nombre' value={product.nombre} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del producto" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                        <input onChange={handleChange} name='precio' value={product.precio} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                        <input onChange={handleChange} name='description' value={product.description} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripción del producto" required />
                    </div>
                    <div className="mb-4 text-sm  text-red-800 rounded-lg dark:text-red-400" >
                        <span className="font-medium bg-red-50 me-2 ml-0">{error}</span>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
                </form>
            </div>
        </div>
    )
}

export default ProductForm
import React from 'react'
import { useParams } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import axios from 'axios'

const ProductFormUpdate = () => {

    const { id } = useParams()

    const initialValues = {
        nombre: 'Cargando...',
        precio: 0,
        description: 'Cargando...'
    }

    const { values: Product, handleChange, setValues } = useForm(initialValues)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setValues({
                    nombre: res.data.Product.nombre,
                    precio: res.data.Product.precio,
                    description: res.data.Product.description
                })
            })
            .catch(err => console.log(err))
    }, [])

    const Navigate = useNavigate();

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, Product)
            .then(res => {
                Navigate('/admin')

            })
            .catch(err => {
                console.log(err.response.data)
            })
    }

    return (

        <div className='flex flex-col items-center content-center'>
            <div>
                <h1 className='mt-4'>Product Actualizar</h1>
            </div>
            <div>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input onChange={handleChange} name='nombre' value={Product.nombre} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del producto" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                        <input onChange={handleChange} name='precio' value={Product.precio} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
                        <input onChange={handleChange} name='description' value={Product.description} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripción del producto" required />
                    </div>
                    <div className="mb-4 text-sm  text-red-800 rounded-lg dark:text-red-400" >
                        <span className="font-medium bg-red-50 me-2 ml-0">{error}</span>
                    </div>
                    <div className='flex justify-between '>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar</button>
                        <Link to={'/admin'} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                            Return
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductFormUpdate
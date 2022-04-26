import React, { useEffect, useState } from 'react'
import CategoriesNavList from './CategoriesNavList'
import CategoriesList from './CategoriesList'

export default function MainContent() {
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true)
                const response = await fetch(
                    'https://delivery-server-rentateam.herokuapp.com/categories'
                )
                const categories = await response.json()
                setCategories(categories)
                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
        }
        fetchCategories()
    }, [])

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <CategoriesNavList categories={categories} />
                    <CategoriesList categories={categories} />
                </>
            )}
        </>
    )
}

import React, {useEffect, useState} from 'react'
import Sidebar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/TopBar'
import './listCategory.css'
import {TableContainer} from '@material-ui/core'
import { Navigate } from 'react-router-dom'
import authHelper from '../../helpers/auth.helper'
import axios from 'axios'
import ListTableCategories from '../../components/listTableCategories/listTableCategories'
 
export default function ListCategory() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        uptadateCategories()
    },[])

    const uptadateCategories = function(){
        axios.get(process.env.REACT_APP_API_URL+'category/',{
            headers: {
                'x-auth-token': authHelper.getToken()
            }
        })
        .then(res=>{
            console.log(res)
            setCategories(res.data.categories)
        })
        .catch(err=> console.log(err))
    }

    return (
        authHelper.getToken()?
        <div>
            <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="tableListCategory">
                    <h1 className="listCategoryTitle">Lista de Categorías</h1>
                    <TableContainer className="tableContainer">
                        <ListTableCategories categories={categories}/>
                    </TableContainer>
                </div>
            </div>
        </div>
        </div>:
        <Navigate to={'/'}/>
    )
}

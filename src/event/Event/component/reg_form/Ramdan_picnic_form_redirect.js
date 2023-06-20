import React from 'react'
import LU_E_Reg from './Ramdan_reg_lucc_form'
import NON_LU_E_Reg from './Ramdan_reg_form '
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom';


import LU_E_Reg_mem_4 from './LU member/member4'

export default function index_form_reg() {


    const token = window.localStorage.getItem('jwt_user_token_v2');
    const token_event = window.localStorage.getItem('jwt_user_token_event');

    return (
        <>
            {token?<LU_E_Reg  />:
            token_event?<NON_LU_E_Reg/> :
             <Redirect to={`/`} />
           
            
            }
        </>
    )
}

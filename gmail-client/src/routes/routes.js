// import Email from '../components/Email'
// import Main from '../pages/Main'

import {lazy} from 'react'

const Emails = lazy(()=> import('../components/Emails'))
const Main = lazy(()=> import('../pages/Main'))
const ViewEmail = lazy(()=> import('../components/ViewEmail'))

export const routes ={
    main:{
        path:'/',
        element: Main
    },
    email:{
        path: '/emails',
        element: Emails
    },
    view:{
        path:'/view',
        element:ViewEmail
    },
    invalid:{
        path: '/*',
        element: Emails
    },
    
}


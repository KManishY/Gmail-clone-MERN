// import Email from '../components/Email'
// import Main from '../pages/Main'

import {lazy} from 'react'

const Email = lazy(()=> import('../components/Email'))
const Main = lazy(()=> import('../pages/Main'))

export const routes ={
    main:{
        path:'/',
        element: Main
    },
    email:{
        path: '/email',
        element: Email
    },
    invalid:{
        path: '/*',
        element: Email
    },
    view:{
        path:'/view',
        element:Email
    }
}


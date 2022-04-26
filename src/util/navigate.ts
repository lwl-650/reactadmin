import React from 'react'

import {
    useNavigate,
 } from 'react-router-dom'


 const nav = useNavigate();
export default function navigates(path:string) {
    nav(path)
}


'use client'

import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function BreadCrumb() {
  return (
    <Breadcrumb className='sp-breadcrumb'>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Economy</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Finance</Breadcrumb.Item>
    </Breadcrumb>
  )
}

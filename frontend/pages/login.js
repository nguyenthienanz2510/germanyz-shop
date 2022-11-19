import React from 'react'
import MainLayout from '../components/layout/MainLayout'

export default function LoginPage() {
  return (
    <div>LoginScreen</div>
  )
}

LoginPage.getLayout = function getLayout(page) {
    return <MainLayout title="Login">{page}</MainLayout>
  }
import Footer from "../Footer";
import Header from "../Header";

import '../../styles/AuthLayout.css'
import HeaderAuth from "../HeaderAuth";
 
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
      <HeaderAuth />
        {children}
        
    </>
  )
}
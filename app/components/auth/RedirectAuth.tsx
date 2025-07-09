"use client"
import { useRouter } from 'next/router';

const RedirectAuth = () => {

    const router = useRouter();
    router.push('/'); 
    return(
        <>
            
        </>
    )
}

export default RedirectAuth
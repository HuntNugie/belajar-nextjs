import { useRouter } from "next/router"

export default function ProductDetail(){
    const {query} = useRouter();

    return (<>
        ini adalah halaman product : {query.product}
    </>)
}
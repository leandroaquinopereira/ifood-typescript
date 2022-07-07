import Link from "next/link";

export default function NavBar () {
    return(
        <nav className="h-28 bg-red-700 w-full flex items-center justify-between">
            <Link href={"/"}>
                <a className="text-2x1 font-extrabold ml-4">
                    Ichirako Rámen
                </a>
            </Link>
            <Link href={"/login"}>
                <a className="text-xl mr-16">
                    Login
                </a>
            </Link>
        </nav>
    );
}
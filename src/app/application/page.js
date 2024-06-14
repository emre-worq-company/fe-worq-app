import Link from "next/link";
import SignOut from "@/components/SignOut";

export default function Application() {
    return (
        <div>
            <p>Application page</p>
            <Link className="btn btn-outline" href="/admin/emre">
                Admin Page
            </Link>
            <SignOut />
        </div>
    );
}
"use client";

import { signOut } from "next-auth/react";

const SignOut = () => {
    return (
        <div>
            <button type="button" className="btn btn-outline" onClick={() => signOut()}>
            Sign Out
            </button>
        </div>
    )
}

export default SignOut;

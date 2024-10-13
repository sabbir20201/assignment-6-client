import Link from "next/link";

const DashboardNavbar = () => {
    return (
        <div>

            <div className="py-10 bg-slate-200">
                Dashboard
            </div>
            <div className="flex">
                <div className="w-3/12 border">
                <div><Link href="/dashboard">Dashboard</Link></div>
                <div><Link href="/dashboard/myRecipe">createRecipe</Link></div>
                <div><Link href="/dashboard/createRecipe">getAllRecipe</Link></div>
                <div><Link href="/dashboard/myProfile">profile</Link></div>
                </div>
                <div className="w-full">
                    b
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
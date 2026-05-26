import { mounts } from "@/app/data/mounts";

export default function Detailspage ({params}: any){
    const mount = mounts.find(
        (m) => m.slug === params.mountName
    );

    if(!mount) return <p>Mount not found</p>;

    return (
        <main className="p-6">
            <h1 className="text-2x1 font-bold">
                {mount.name}
            </h1>

            <p className="mt-4">
                {mount.description}
            </p>

            <p className="mt-2">
                <strong>
                    Obtain:
                </strong> 
                {mount.obtain}
            </p>
        </main>
    );
}
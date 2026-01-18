import MenuHelper from "@/src/utils/MenuHelper";
import NavBar from "@/src/components/menu/NavBar";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const menuHelper = new MenuHelper('/'); // TODO fetch current route

    return (
        <>
            <NavBar pages={menuHelper.routes} />

            <main id="main">
                {children}
            </main>
        </>
    );
}

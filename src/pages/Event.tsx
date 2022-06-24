import { Header } from "../componentes/Header";
import { Sidebar } from "../componentes/Sidebar";
import { Video } from "../componentes/Video";

type Props = {};
export function Event(props: Props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Video />
                <Sidebar />
            </main>
        </div>
    );
}

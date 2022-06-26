import { useParams } from "react-router-dom";
import { Header } from "../componentes/Header";
import { Sidebar } from "../componentes/Sidebar";
import { Video } from "../componentes/Video";

type Props = {};
export function Event(props: Props) {
    const { slug } = useParams<{ slug: string }>();
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ? (
                    <Video lessonSlug={slug} />
                ) : (
                    <div className="flex-1" />
                )}
                <Sidebar />
            </main>
        </div>
    );
}

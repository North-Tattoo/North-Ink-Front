import logo from "../../utils/assets/logo.svg";
import imagemFundo from "../../utils/assets/fundo-landing-page.png";
import NavBar from "@/components/navbar/NavBar";
import styles from "./Home.module.css";
import { Button } from "@/components/ui/button";

function Home() {
    return (
        <>
            <NavBar logoInicio={logo} />
            <div>

                <div className={styles["background-image"]}>
                    <img src={imagemFundo} alt="Imagem de fundo" />
                    <div className={styles["titulo"]}>
                        <div className="">
                            <h1 className="text-slate-50 font-bold">
                                ENCONTRE O SEU
                                <span className="text-purple-600 font-extrabold">TATUADOR</span>
                                IDEAL.
                            </h1>
                        </div>


                        <p className="text-lg text-slate-200 w-5/6 mt-2">
                            Na nossa plataforma, <span className="text-purple-600 font-extrabold">conectamos</span> você aos melhores tatuadores em minutos, prontos para transformar suas ideias em tinta.
                            Explore estilos únicos e faça da sua próxima tatuagem uma <span className="text-purple-600 font-extrabold">experiência</span> inesquecível.
                        </p>

                        <div className="flex justify-center items-center mt-12">
                            <Button className="bg-purple-600 text-white w--60 h-16 font-bold rounded-lg px-8 py-2 mr-24">Seja um Parceiro</Button>
                            <Button className="bg-zinc-600 text-white w--60 h-16 font-bold rounded-lg px-8 py-2">Buscar Profissionais</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
import Carrossel2 from '@/components/carrossel/carouselDetalhes';
import { Input } from '@/components/ui/input';
import { FaRegUserCircle } from "react-icons/fa";
import styles from './Detalhes.module.css';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer/footer';



function Detalhes() {
    return (
        <>
            <div className="container bg-slate-300">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <div className={styles["logo"]}>
                            <LogoImagem />
                        </div>

                        <div className="flex items-center">
                            <Input className="border-purple-700 w-80 bg-slate-50" type="text" placeholder="Encontre o tatuador mais perto" />
                            <Input className="border-purple-700 w-80 bg-slate-50 ml-4" type="text" placeholder="Onde ?" />
                        </div>

                        <div className="flex items-center">
                            <FaRegUserCircle className="size-8 text-purple-800" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <div className="w-5/6 flex justify-center">
                            <div className="flex">
                                <Carrossel2 />

                                <div className=" md:w-1/2 p-2">
                                    <div className="mb-4">
                                        <iframe
                                            className="rounded-lg"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.462918447232!2d-47.18023222222222!3d-23.552431199999998!2m3!1f0!2d-47.1795644!3d-23.5524333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1d-47.18023222222222!2d-23.552431199999998!5m2!1m1!1z13m1!2sBrasil"
                                            width="450"
                                            height="180"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                        ></iframe>
                                    </div>

                                    <div className="bg-purple-700 hover:bg-purple-600 p-4 rounded-lg">
                                        <h2 className="text-lg font-bold mb-2 text-zinc-200">Sobre nós:</h2>
                                        <p className="text-lm text-zinc-200 ">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus quia minima numquam maiores!
                                            Sapiente iste velit, beatae aliquam officiis quae in quas dolor cum quia quod! Officiis, voluptatibus
                                            tempora.iste velit, beatae aliquam officiis quae in quas dolor cum quia quod! Officiis, voluptatibus
                                            tempora.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="mt-14 container bg-slate-300 flex flex-col items-center">

                <h1 className="mt-6 mb-6 font-bold text-zinc-700 text-2xl">Serviços</h1>

                <div>
                    <div className="flex flex-wrap justify-center w-10/11">

                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                    
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-85 bg-violet-50 m-4 rounded-lg">
                            <div className="px-4 py-2 flex justify-center">
                                <h2 className="text-lg font-semibold text-gray-800">Tatuagem</h2>
                            </div>

                            <img className="w-54 h-44 mx-auto my-auto rounded-lg" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                            <div className="px-6 py-2 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 font-semibold">Preço</span>
                                    <span className="text-gray-900 font-bold">R$ XX,XX</span>
                                </div>
                                <div className="flex justify-center mt-2 mb-2">
                                    <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        Realizar Orçamento
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-6 container bg-gradient-to-tr from-slate-300 to-violet-50 flex flex-col items-center p-12">
                <h1 className="mt-2 mb-6 font-bold text-zinc-800 text-2xl">Veja nosso trabalho</h1>

                <div className="flex justify-center gap-6">
                    {/* Imagem maior na lateral esquerda */}
                    <div className="w-2/4 h-2/4 bg-purple-100 rounded-lg">
                        <img className="w-full h-full object-cover rounded-lg drop-shadow-2xl shadow-2xl" src="./src/utils/assets/ombro-comprimido.jpg" alt="Imagem" />
                    </div>

                    {/* Outras quatro imagens */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="flex justify-center items-center rounded-lg">
                                <img className="w-38 h-48 rounded-lg drop-shadow-2xl shadow-2xl" src="./src/utils/assets/ombro-comprimido.jpg" alt="Imagem" />
                            </div>
                        ))}
                    </div>
                </div>
                <Button className="mt-8 bg-purple-800 hover:bg-purple-600 text-semibold text-zinc-100">Ver Mais</Button>
            </div>


            <Footer className=""/>
        </>
    );
};

function LogoImagem() {
    return (
        <img src="\src\utils\assets\logo-branca.png" alt=""/>
    )
}


export default Detalhes;

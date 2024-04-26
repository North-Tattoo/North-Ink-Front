import logoBranca from '../../utils/assets/logo-branca.png';
import imagemTest from '../../utils/assets/logo-roxa-sem-nome.png';
import Footer from '@/components/footer/footer';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ImageGrid from "@/components/imageGrid/ImageGrid";
import { PiUserCircleLight } from "react-icons/pi";
import { AiOutlineLeft, AiOutlineShareAlt } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from '@/components/ui/input';

function Detalhes() {
    return (
        <>
            <section className="bg-gradient-to-b from-purple-800 to-gray-900">
                <header className="container flex justify-between items-center py-4">
                    <img src={logoBranca} alt="Logo Branca" className="w-60" />
                    <div className="flex items-center">
                        <PiUserCircleLight className="size-10 text-slate-900 mr-2" />
                        <a className="text-slate-900 text-1xl font-semibold">Login</a>
                    </div>
                </header>

                <h1 className="text-bold text-5xl text-white text-center mt-2 mb-8">
                    Conheça o <span className='text-slate-900'>artista</span>.
                </h1>
                <div className="flex mb-16">
                    <navbar className="ml-14 rounded-2xl bg-violet-100 text-violet-950 w-1/4 min-h-screen p-4 border-r border-gray-300">
                        <div className="flex justify-between mb-6">
                            <Button className="bg-violet-100 hover:bg-gray-400 text-violet-950 font-bold py-2 px-4 rounded-full">
                                <AiOutlineLeft className="text-xl" />
                            </Button>

                            <Button className="bg-violet-100 hover:bg-gray-400 text-violet-950 font-bold py-2 px-4 rounded-full">
                                <AiOutlineShareAlt className="text-xl" />
                            </Button>
                        </div>

                        <div className="flex flex-col items-start">
                            <div className="flex">
                                <img src={imagemTest} alt="Logo Branca" className="w-16 mb-4 rounded-full" />
                                <div className="ml-8 mt-2">
                                    <h2 className="text-lg font-bold">Jeremy Barcelos</h2>
                                    <div className="flex items-center">
                                        <span className="bg-green-500 rounded-full block w-3 h-3 mr-1"></span>
                                        <p className="text-sm">Disponivel</p>
                                    </div>
                                </div>
                            </div>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-purple-700 text-white mt-2 h-10">
                                        Entrar em Contato
                                    </Button>
                                </DialogTrigger>

                                <DialogContent>
                                    <h1 className="font-bold text-xl text-center text-zinc-700">
                                        Fale com o <span className="text-violet-950 font-bold">Jeremy</span>, <br></br> <span className="text-violet-950 font-bold">através </span>
                                        do Whatsapp.
                                    </h1> 
                                    <div className="flex flex-col items-center">
                                        <div className="flex justify-center gap-4">
                                            <Input placeholder='Nome' className="w-44 border-2 border-purple-200" />
                                            <Input placeholder='Telefone' className="w-48 border-2 border-purple-200" />
                                        </div>
                                        <Input placeholder='Mensagem' className="w-96 mt-4 border-2 border-purple-200"/>
                                    </div>

                                    <div className="flex justify-center mt-4">
                                        <Button className="w-48 bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                            Enviar mensagem<FaWhatsapp className="ml-2 size-7" />
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">Bio</h2>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequatur iste quisquam numquam sequi facere error!
                                </p>
                            </div>
                            <div className="mt-6">
                                <div className="flex space-x-44">
                                    <h2 className="text-ml font-bold">Instagram</h2>
                                    <img src={imagemTest} alt="Instagram" className="w-8" />
                                </div>
                                <p className="text-sm">@tatuador</p>
                            </div>

                            <p className="mt-4 border-t border-violet-800 text-violet-100">____________________________________________</p>

                            <div className="mt-2">
                                <h2 className="text-xl font-semibold">Estilos</h2>
                                <div className="grid grid-cols-3 gap-2 p-2">
                                    <Badge variant="default">Black Work</Badge>
                                    <Badge variant="default">Black Work</Badge>
                                    <Badge variant="default">Black Work</Badge>
                                    <Badge variant="default">Black Work</Badge>
                                </div>
                            </div>

                            <p className="mt-6 border-t border-violet-800 text-violet-100">____________________________________________</p>

                            <div className="mt-2">
                                <h2 className="text-xl font-semibold">Preços</h2>
                                <div className="flex gap-6 mt-4">
                                    <Button className="text-ml w-18 h-14 text-violet-950 font-bold shadow-xl border-1 border-violet-900 bg-gray-400 hover:bg-zinc-400 flex flex-col mx-auto">
                                        <span>Valor da hora</span>
                                        <span>R$100,00</span>
                                    </Button>
                                    <Button className="text-ml w-18 h-14 text-violet-950 font-bold shadow-xl border-1 border-violet-900 bg-gray-400 hover:bg-zinc-400 flex flex-col mx-auto">
                                        <span>Valor mínimo</span>
                                        <span>R$100,00</span>
                                    </Button>
                                </div>
                            </div>
                            <p className="mt-6 border-t border-violet-800 text-violet-100">____________________________________________</p>

                            <div className="">
                                <h2 className="text-xl font-semibold">Ambiente de Trabalho</h2>
                                <p className="text-ml font-semibold">Nome Studio</p>
                                <p className="text-sm font-medium">Endereço da rua, 123 - Consolação, São Paulo - SP</p>
                            </div>
                        </div>
                    </navbar>

                    <div className="flex">
                        <div className="w-1/6">
                            {/* Navbar content here */}
                        </div>
                        <div className="w-1/2">
                            <ImageGrid />
                        </div>
                    </div>

                </div>

                <Footer />

            </section>
        </>
    );
};


export default Detalhes;

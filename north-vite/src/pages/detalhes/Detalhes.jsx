import Carrossel2 from '@/components/carrossel/carouselDetalhes';
import { Input } from '@/components/ui/input';
import { FaRegUserCircle } from "react-icons/fa";
import styles from './Detalhes.module.css';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer/footer';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FaWhatsapp } from "react-icons/fa6";

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
                            <Sheet>
                                <SheetTrigger asChild>
                                    <FaRegUserCircle className="size-8 text-purple-800 cursor-pointer" />
                                </SheetTrigger>

                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Editar Perfil</SheetTitle>
                                        <SheetDescription>
                                            Aqui é aonde o tatuador vai poder editar seu perfil, podendo alterar informações como nome, email, senha e foto de perfil.
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="grid gap-4 py-4 flex justify-start">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">Nome</Label>
                                            <Input id="name" value="Renato Silva" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="email" className="text-right">Email</Label>
                                            <Input id="email" value="northink03@gmail.com" className="col-span-3" />
                                        </div>
                                    </div>
                                    <SheetFooter className="flex justify-center items-center">
                                        <SheetClose asChild>
                                            <Button type="submit" className="mt-2">Salvar alterações</Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <div className="w-5/6 flex justify-center">
                            <div className="flex gap-16">
                                <Carrossel2 />

                                <div className=" md:w-1/2 p-2">
                                    <div className="mb-4">
                                        <iframe
                                            className='rounded-lg shadow-2xl'
                                            width="500"
                                            height="250"
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"
                                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAbpa0IebAdWBRHj0g4NC_e1OcEktcVw3c">
                                        </iframe>
                                    </div>

                                    <div className="bg-purple-700 hover:bg-purple-600 p-4 rounded-lg shadow-2xl shadow-violet-800">
                                        <h2 className="text-lg font-bold mb-2 text-zinc-200">Sobre nós:</h2>
                                        <p className="text-lm text-zinc-200">
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
            <div className="mt-14 container bg-slate-300 flex flex-col items-center mb-16">

                <h1 className="mt-6 mb-6 font-bold text-zinc-700 text-2xl">Serviços</h1>

                <div>
                    <div className="flex flex-wrap justify-center w-10/11">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="w-80 h-85 bg-violet-50 m-4 rounded-lg shadow-2xl shadow-slate-500">
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
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button className="bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                                    Realizar Orçamento
                                                </Button>
                                            </DialogTrigger>

                                            <DialogContent>
                                                <h1 className="font-bold text-lg text-center text-zinc-700">Encontre seu orçamento</h1>

                                                <div className="flex gap-8 p-4">
                                                    <img className="w-54 h-44 mx-auto my-auto rounded-md" src="\src\utils\assets\ombro-comprimido.jpg" alt="Imagem" />

                                                    <div className="flex flex-col justify-center">
                                                        <span className="font-semibold text-base">Tatto 3D</span>

                                                        <ul className="list-disc mt-2">
                                                            <li>Tatuagem 3D de Borboleta</li>
                                                            <li>Tatto 30 Cm</li>
                                                            <li>É possível realizar alterações</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="flex justify-center mt-4">
                                                    <Button className="w-48 bg-purple-900 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                                        Fale com o Tatuador <FaWhatsapp className="ml-2 size-7" />
                                                    </Button>
                                                </div>
                                            </DialogContent>

                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                        ))}

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


            <Footer className="" />
        </>
    );
};

function LogoImagem() {
    return (
        <img src="\src\utils\assets\logo-branca.png" alt="" />
    )
}


export default Detalhes;

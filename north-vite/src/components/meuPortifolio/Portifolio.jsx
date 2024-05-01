import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Separator } from '../ui/separator';
import ImageUpload from '../imageUpload/ImageUpload';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function Portifolio() {
    const handleUpload = () => {
        // Lógica para enviar a imagem para o backend usando Axios
        // Exemplo: axios.post('/upload', { image: selectedImage });
    };

    return (
        <>
            <section className="mb-6">
                <h1 className="flex text-zinc-50 mb-6 justify-center">Crie sua <span className="text-slate-900">página</span>.</h1>

                <div className="flex ">
                    <div className="rounded-2xl bg-violet-100 text-violet-950 w-96 h-auto p-4 border-r border-gray-300">
                        <div className="flex flex-col">
                            <div className="flex">
                                <Avatar className="w-14 h-14">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>Jeremy</AvatarFallback>
                                </Avatar>
                                <div className="ml-4">
                                    <h2 className="text-lg font-bold">Jeremy Barcelos</h2>
                                    <div className="flex items-center">
                                        <span className="bg-green-500 rounded-full block w-3 h-3 mr-1"></span>
                                        <p className="text-sm">Disponivel</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">Bio</h2>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequatur iste quisquam numquam sequi facere error!
                                </p>
                            </div>

                            <Separator className="my-3 bg-violet-950" />

                            <div>
                                <div className="flex space-x-56">
                                    <span className="text-base font-semibold">
                                        Instagram
                                    </span>
                                    <Avatar className="w-9 h-9">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>Jeremy</AvatarFallback>
                                    </Avatar>
                                </div>
                                <p className="text-sm">@tatuador</p>
                            </div>

                            <Separator className="my-2 bg-violet-950" />

                            <div className="mt-2">
                                <h2 className="text-xl font-semibold">Estilos</h2>
                                <div className="grid grid-cols-3 gap-2 p-2">
                                    <Badge variant="default">Black Work</Badge>
                                    <Badge variant="default">Black Work</Badge>
                                    <Badge variant="default">Black Work</Badge>
                                    <Badge variant="default">Black Work</Badge>
                                    <Badge variant="default">Black Work</Badge>
                                </div>
                            </div>

                            <Separator className="my-4 bg-violet-950" />

                            <div className="">
                                <h2 className="text-xl font-semibold">Preços</h2>
                                <div className="flex gap-2 mt-3">
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
                        </div>
                    </div>

                    <div className="ml-6">
                        <ImageUpload />

                        <div className="flex justify-center mt-32">
                            {/* <Button className="w-48 rounded-sm bg-purple-900" >
                                Salvar
                            </Button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portifolio;
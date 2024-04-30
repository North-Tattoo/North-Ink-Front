import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

function Studio() {
    return (
        <div className="">
            <h1 className="text-white ml-34 mb-3">Meu<span className="text-slate-900"> Studio</span>.</h1>
            <div className="text-white text-2xl font-medium mb-4">Edite seu <span className="text-slate-950">Studio</span>.</div>
            <div className="flex flex-row mt-30 gap-8 my-2 p-2">
                <div className="flex flex-col">
                    <label htmlFor="nome" className="text-white text-sm">Nome</label>
                    <Input type="text" id="nome" name="nome" placeholder="seu nome"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900" />

                </div>
                <div className="flex flex-col">
                    <label htmlFor="sobrenome" className="text-white text-sm">Sobrenome</label>
                    <Input type="text" id="sobrenome" name="sobrenome" placeholder="seu sobrenome"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900" />
                </div>
            </div>
            <div className="flex flex-row gap-8 my-2 p-2">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-white text-sm">E-mail</label>
                    <Input placeholder="exemplo@email.com" type="text" id="email" name="email"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900" />
                </div>
            </div>
            <div className="flex flex-row gap-8 my-2 p-2">
                <div className="flex flex-col">
                    <label htmlFor="CPF" className="text-white text-sm">CPF</label>
                    <Input placeholder="123.456.789-09" type="text" id="CPF" name="CPF"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="celular" className="text-white text-sm">Celular</label>
                    <Input placeholder="(DDD) Celular" type="text" id="celular" name="celular"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900" />
                </div>
            </div>
            <div className="flex flex-row gap-8 p-2">
                <div className="flex flex-col">
                    <label htmlFor="senha" className="text-white text-sm">Senha</label>
                    <Input placeholder="Mínimo 6 caracteres" type="password" id="senha" name="senha"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="repita" className="text-white text-sm">Repita a senha</label>
                    <Input placeholder="Mínimo 6 caracteres" type="text" id="repita" name="repita"
                        className="bg-white w-72 h-10 rounded text-center text-zinc-900" />
                </div>
            </div>
            <Button className="w-80 h-12 bg-purple-900 text-white text-lg rounded-md ml-40">Salvar</Button>
        </div>
    );
}

export default Studio;
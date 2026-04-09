import { expect, it } from "vitest";
import { iniciaLista, getLista, limpaLista } from "./lista.js";

it("deve ter elementos iniciais", () => {
    iniciaLista();
    const lista1 = getLista();
    expect(lista1.length).toBe(3);
    lista1.push("quatro");
    const lista2 = getLista();
    expect(lista2.length).toBe(3);
});

it("deve limpar a lista", () => {
    const limpa = limpaLista();
    expect(limpa[0]).toBe(0);
})


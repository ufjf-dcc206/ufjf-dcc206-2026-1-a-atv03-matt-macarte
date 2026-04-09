import { expect, it } from "vitest";
import { getLista } from "./lista.js";

it("deve ter elementos iniciais", () => {
    const lista1 = getLista();
    expect(lista1.length).toBe(3);
    lista1.push("quatro");
    const lista2 = getLista();
    expect(lista2.length).toBe(3);
});


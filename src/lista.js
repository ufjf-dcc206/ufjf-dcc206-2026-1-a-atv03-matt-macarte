const lista = ["um", "dois", "tres"];

export function getLista(){
    return structuredClone(lista);
}
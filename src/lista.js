let lista = [];

export function iniciaLista(){
    lista = ["um", "dois", "tres"];
}

export function getLista(){
    
    return structuredClone(lista);
}

export function limpaLista(){
    lista.splice(0,3);
    return lista;
}
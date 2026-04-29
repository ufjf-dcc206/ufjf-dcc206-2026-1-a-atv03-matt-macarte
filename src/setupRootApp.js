import { getLista } from "./lista";

export function setupRootApp() {
  const divRoot = document.createElement("div");
  divRoot.append(criaTitulo());
  divRoot.append(criaLista());
  return divRoot;
}

function criaTitulo() {
  const h1 = document.createElement("h1");
  h1.textContent = "App de lista";
  return h1;
}

function criaLista() {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const btnAtualizar = document.createElement("button");

  input.id = "input";
  input.type = "text";
  input.placeholder = "digite um item...";
  div.append(input);

  btnAtualizar.id = "atualizar";
  btnAtualizar.textContent = "Atualizar";
  div.append(btnAtualizar);

  const ol = document.createElement("ol");
  div.append(ol);
  
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  ol.id = "lista";
  return div;
}

export function setupEvents(root){
  const btnAtualizar = root.querySelector("#atualizar");
  btnAtualizar.addEventListener("click", ()=> Atualizar(root));
}

function Atualizar(root){
  const input = root.querySelector("#input");
  if(input.value){
    const ol = root.querySelector("ol");
    const li = document.createElement("li");
    li.textContent = input.value;
    ol.append(li);
    input.value = ""
  }
}
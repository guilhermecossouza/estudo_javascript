document.querySelector("#btnAdicionarNovoCurso").addEventListener("click", (event) => {
    const text_input = document.querySelector("#nomeCurso").value.trim();
    if (text_input !== "") {     
        let quantidate_cursos = document.querySelectorAll(".curso").length;
        const nova_div = document.createElement("div");
        nova_div.setAttribute("id", "c"+quantidate_cursos+"");
        nova_div.setAttribute("class", "curso c1");
        nova_div.innerHTML = text_input;

        const novo_radio = document.createElement("input");
        novo_radio.setAttribute("type", "radio");
        novo_radio.setAttribute("name", "rb_curso");
        nova_div.appendChild(novo_radio);

        const div_caixaCursos = document.querySelector("#caixaCursos");
        div_caixaCursos.appendChild(nova_div);
        document.querySelector("#nomeCurso").value = "";
    }else {
        alert("Informe o curso.");
    }
});

const item_selecionado = () => {
    let parent = ""
    let item = [...document.querySelectorAll("input[type=radio]")];
    item.filter((ele) => {
        if (ele.checked) {
            parent = ele.parentNode
        }    
    });    
    return parent
}

document.querySelector("#btnRemoverCurso").addEventListener("click", (event) => {
    const div_caixaCursos = [...document.querySelectorAll("#caixaCursos")]
    div_caixaCursos.filter((ele) => {
        if(ele.children.length > 0) {
            console.log(ele.children.namedItem(""));
        }        
    })
    
});

document.querySelector("#btnCursoSelecionado").addEventListener("click", (event) => {
    let elemento_parent = item_selecionado();
    if (parent !== "") {
        alert("Curso seleconado foi "+elemento_parent.textContent+"");
    }else {
        alert("Selecione algum curso");
    }    
});
function contentSearch(s) {

    // tryck ned input till små bokstäver
    s = s.toLowerCase();

    // Hitta alla divar som har klassen content och spara i variabel med namn content
    const content = document.querySelectorAll(".content");

    for( let div of content){
        div.classList.remove("hidden");


        const title = div.children[0].innerText.toLowerCase();

        const text = div.children[1].innerText.toLowerCase();
        const className = div.classList[1];



        const result = title.search(s);
        const result2 = text.search(s);
        const result3 = className.search(s);


        // Gör de resultat som inte är intresanta osynliga..
        if(result<0 && result2<0 && result3<0){
            div.classList.add("hidden");
        }


    }



}
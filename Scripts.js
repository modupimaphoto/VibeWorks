function Filter(){
    const filter_value = document.getElementById("filter-value").value;

    const phones = document.getElementById("section-1");
    const laptops = document.getElementById("section-2");
    const headphones = document.getElementById("section-3");

    switch(filter_value){
        case "all":
            phones.style.display = "block";
            laptops.style.display = "block";
            headphones.style.display = "block";
            break;
        case "phones":
            phones.style.display = "block";

            laptops.style.display = "none";
            headphones.style.display = "none";
            break;
        case "laptops":
            laptops.style.display = "block";

            phones.style.display = "none";
            headphones.style.display = "none";
            break;
        case "headphones":
            headphones.style.display = "block";

            laptops.style.display = "none";
            phones.style.display = "none";
            
            break;
    }
}
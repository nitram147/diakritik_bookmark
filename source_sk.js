var text = prompt("Prosím zadajte text", "Nejaky text bez diakritiky");
        $.get("http://vasaweb.sk/priecinok_diakritik_api/?plugin=ano&text="+text, function(data, status){
            alert(data);
        });
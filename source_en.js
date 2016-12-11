var text = prompt("Please insert slovak text without diacritics", "Nejaky text bez diakritiky");
        $.get("http://yoursite.com/diacritic_api_directory/?plugin=ano&text="+text, function(data, status){
            alert(data);
        });
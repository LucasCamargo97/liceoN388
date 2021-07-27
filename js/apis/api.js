function getcountry(q){
        $.ajax({
            url:'https://restcountries.eu/rest/v2/name/'+q,
            success: function(res){ 
                document.getElementById('output').innerHTML="<h1>"+res[0].name+"</h1><br><img src='"+res[0].flag+"'width='500'></img><br><p>Region: "+res[0].region+
                "<br>Population: "+res[0].population+"<br>Currency: "+res[0].currencies[0].name+"<br>Currency code: "+res[0].currencies[0].code+"<br> Currency symbol: "
                +res[0].currencies[0].symbol+"<br>TLD: "+res[0].topLevelDomain[0]+"</p>";
            } 
        })
    }

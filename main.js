	const kultury_all = [
		"Aqoiczyk",
		"Begnak",
		"Hyan",
		"Kameeńczyk",
		"Vuryjczyk",
		"Wyspiarz Cideum",
		"Satyr górski",
		"Satyr leśny",
	];	
window.onload = function reset()
{ document.getElementById("race")[0].selected = true; 
 document.getElementById("occupation")[0].selected = true; 
}
	
function info_race()
{
	
	const rasa = document.getElementById("race").value;
	const h1 = ["Człowiek","Satyr",];	
	const text_info = [
	"Człowiek jako rasa, nie posiada żadnych modyfikatorów. <br> Uśredniony wynik atrybutu dla człowieka to 12.",
	"dd", 
	];
	document.querySelector('h1').innerHTML=h1[rasa];
	document.getElementById('text_info').innerHTML=text_info[rasa];

	if (rasa == 1)
	{
		for (i=0; i<2;i++)
		{
		document.getElementById('culture')[i].innerHTML=kultury_all[i+6];
		document.getElementById('culture')[i].value=6+i;
		}
		for (i=1; i<culture.length+5;i++)
		document.getElementById('culture')[2].remove();	
	}
	else if (rasa == 0)
	{
		if(culture.length>4)
		{
		for (i=1; i<4;i++)
		document.getElementById('culture')[2].remove();	
			
		}
		
		for (i=0; i<4;i++)
		{
		var option = document.createElement("option");
		option.text = "";
		option.value = 1;
		document.getElementById('culture').add(option);
		}
		
		for (i=0; i<7;i++)
		{
		document.getElementById('culture')[i].innerHTML=kultury_all[i];
		document.getElementById('culture')[i].value=i;
		}
	
	}
	
}
function info_culture()
{
	const kultura = document.getElementById("culture").value;
	const text_info = [
	  "Wycena +15<br>Ukrywanie się +10<br>Opieka nad zwierzętami +5<br>Religia +5", // Aqoiczyk
	  "Zahartowanie +15<br>Historia +10<br>Mocna głowa +5<br>Przetrwanie +5", // Begnak
	  "Żeglarstwo +15<br>Astronomia +10<br>Stolarstwo +5<br>Targowanie +5", // Hyan
	  "Mity i legendy +15<br>Maniery +10<br>Spostrzegawczość +5<br>Gotowanie +5", // Kameeńczyk
	  "Siła woli +15<br>Leczenie trucizn +10<br>Alchemia +5<br>Torturowanie +5", // Vuryjczyk
	  "Wiedza o roślinach +15<br>Wspinaczka +10<br>Krzepa +5<br>Kowalstwo +5", // Wyspiarz Cideum
	  "TO NA NIBY Wiedza o roślinach +15<br>Wspinaczka +10<br>Krzepa +5<br>Kowalstwo +5", // Wyspiarz Cideum
	  "TO NA NIBY Wiedza o roślinach +15<br>Wspinaczka +10<br>Krzepa +5<br>Kowalstwo +5", // Wyspiarz Cideum
	];
	document.querySelector('h1').innerHTML=kultury_all[kultura];
	document.getElementById('text_info').innerHTML=text_info[kultura];
}
function info_occupation()
{
	const profesja = document.getElementById("occupation").value;
	const h1 = ["Wojownik", "Tropiciel", "Dyplomata", "Mędrzec", "Rzemieślnik"];	
	const text_info = [
	"Wojownik to postać, która opiera się głównie na zdolnościach fizycznych, takich jak siła, zwinność czy wytrzymałość, oraz technikach walki. Specjalizuje się w używaniu broni, ochronie siebie i innych w boju, a także w wykonywaniu zadań wymagających dużej wytrzymałości i sprawności fizycznej.",
	"Tropiciel to archetyp postaci, która specjalizuje się w zdolnościach naturalnych, takich jak tropienie, przetrwanie i wiedza o przyrodzie. Dzięki swojej wszechstronności czerpie również w pewnym stopniu z innych zdolności, co pozwala mu radzić sobie w różnorodnych sytuacjach. Tropiciel to mistrz sztuki przetrwania i eksploracji, zdolny do dostosowania się do warunków w dziczy i miejskich środowiskach.",
	"Dyplomata to archetyp postaci, który koncentruje się przede wszystkim na zdolnościach społecznych. Dzięki umiejętnościom takim jak perswazja, empatia, czy wyczucie etykiety, doskonale odnajduje się w negocjacjach, nawiązywaniu sojuszy i rozwiązywaniu konfliktów bez walki. Dyplomata potrafi wpływać na innych, rozumie ich motywacje oraz skutecznie przekonuje do swoich racji, co czyni go kluczowym graczem w politycznych i społecznych sytuacjach.",
	"Mędrzec to archetyp postaci, który opiera się głównie na zdolnościach uczonych. Jest znawcą tajemnej wiedzy, historii, nauk ścisłych oraz rozumie zasady działania świata. Dzięki takiemu zapleczu intelektualnemu mędrzec doskonale sprawdza się jako doradca, badacz czy przewodnik w dziedzinach wymagających głębokiej wiedzy i analizy, oferując wsparcie oparte na wiedzy teoretycznej i praktycznej.",
	"Rzemieślnik to archetyp, który skupia się głównie na zdolnościach cechowych, wykorzystując swoje umiejętności praktyczne i precyzję, aby tworzyć i naprawiać przedmioty. Wyspecjalizowany w takich dziedzinach jak kowalstwo, ceramika czy krawiectwo, rzemieślnik posiada fachową wiedzę i zdolności manualne, pozwalające na przekształcanie surowców w funkcjonalne i estetyczne dzieła."

	];
	const main_0 = ["#4c3430","#304c44","#494c30","#30324c","#48304C" ];	
	const main_1 = ["#7d4247","#427d5f","#7d7542","#42547d","#67427D" ];	
	var r = document.querySelector(':root');
	r.style.setProperty('--main_0', main_0[profesja]);
	r.style.setProperty('--main_1', main_1[profesja]);
	
	
	document.querySelector('h1').innerHTML=h1[profesja];
	document.getElementById('text_info').innerHTML=text_info[profesja];
}
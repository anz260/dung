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
	
	const sub_prof = [
  "Kombatant",
  "Gladiator",
  "Poszukiwacz Przygód",
  "Awanturnik",
  "Gajowy",
  "Pirat",
  "Traper",
  "Myśliwy",
  "Szarlatan",
  "Kupiec",
  "Konsyliarz",
  "Wagabunda",
  "Akolita",
  "Botanik",
  "Wędrowiec",
  "Paser",
  "Wyrocznia",
  "Kramarz",
  "Opój",
  "Badacz"
	];	
window.onload = function reset()
{ document.getElementById("race")[0].selected = true; 
 document.getElementById("occupation")[0].selected = true; 
 	document.getElementById('heroname').disabled = true;
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
	  "Wiedza o roślinach +15<br>Wspinaczka +10<br>Krzepa +5<br>Kowalstwo +5",// Hyan
	  "Mity i legendy +15<br>Maniery +10<br>Spostrzegawczość +5<br>Gotowanie +5", // Kameeńczyk
	  "Siła woli +15<br>Leczenie trucizn +10<br>Alchemia +5<br>Torturowanie +5", // Vuryjczyk
	  "Żeglarstwo +15<br>Astronomia +10<br>Stolarstwo +5<br>Targowanie +5",  // Wyspiarz Cideum
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
	

	for (i=0;i<4;i++)
	document.getElementById('hero_spec_prof')[i].innerHTML=sub_prof[i+4*profesja];
	
	
}

function info_background()
{
	const backgroundh = document.getElementById("hero_background").value;
	const h1 = [
  "Pomocnik Myśliwego",
  "Dziecko Karczmarza",
  "Poganiacz Zwierząt",
  "Czeladnik Kowala",
  "Rybak z Przystani",
  "Złota Rączka",
  "Osoba od Brudnej Roboty",
  "Cmentarny Zbieracz"
	];	
	const text_info = [
  "Dorastałeś, pomagając myśliwemu – przygotowywałeś obozowiska, tropiłeś zwierzęta i przynosiłeś trofea z polowań. Dzięki temu znasz doskonale las, a instynkt podpowiada ci, gdzie szukać śladów i kryjówek zwierząt.  <br><br>Tropienie +5, Przetrwanie +5",
  
  "Dorastałeś, pomagając rodzinie w karczmie, wśród opowieści podróżników i plotek klientów. Szybko nauczyłeś się rozumieć, co naprawdę ludzie mają na myśli, a twój urok potrafi przekonać do siebie nawet ponurego wojaka.  <br><br>Empatia +5, Gadanina +5",
  
  "Pracowałeś w handlu bydłem i wołami. Spędzając dni w drodze ze zwierzętami, nauczyłeś się rozpoznawać ich choroby i odpowiednio się nimi opiekować. Twoje umiejętności pomogą przetrwać każdej wyprawie.  <br><br>Wiedza o zwierzętach +5, Opieka nad zwierzętami +5",
  
  "Od młodości pomagałeś kowalowi, który uczył cię podstaw rzemiosła. Codzienna praca przy kowadle dała ci siłę i zręczność, a doświadczenie w rzemiośle jest doceniane przez innych rzemieślników.  <br><br>Kowalstwo +5, Krzepa +5",
  
  "Całe życie spędziłeś nad wodą, zarzucając sieci i wypływając na połów. Dzięki latom praktyki potrafisz ocenić, kiedy warunki są odpowiednie do żeglugi, i doskonale radzisz sobie z linami i węzłami.  <br><br>Żeglarstwo +5, Liny i węzły +5",
  
  "Od zawsze lubiłeś naprawiać różne przedmioty – czy to popsute zamki, czy stare meble. Z czasem opanowałeś sztukę majsterkowania, potrafiąc przywrócić do życia nawet zniszczone rzeczy. <br><br> Mechanika +5, Otwieranie zamków +5",
  
  "Byłeś najemnikiem, który podejmował się zadań, których inni się bali – od ochrony szemranych osobistości po brudne porachunki. Masz wprawę w brutalnej walce i przetrwaniu tam, gdzie inni nie chcą się zapuszczać. <br><br> Broń kłuta +1, Krzepa +5",
  
  "Zajmowałeś się nocnym poszukiwaniem wartościowych rzeczy na zapomnianych grobach i opuszczonych cmentarzach. Dzięki temu wiesz, jak cicho się poruszać, dostrzegać szczegóły w ciemnościach i radzić sobie z ryzykiem. <br><br> Ukrywanie się +5, Spostrzegawczość +5"
];

	
	
	document.querySelector('h1').innerHTML=h1[backgroundh];
	document.getElementById('text_info').innerHTML=text_info[backgroundh];	
	
}



function info_spec_prof()
{
	const spec_profesja = document.getElementById("hero_spec_prof").value;
	const profesja = document.getElementById("occupation").value;
	var real_prof =parseInt(profesja*4)+parseInt(spec_profesja);
	const text_info = [
"<ul><li>Zdolności fizyczne X4</li><li>Zdolności społeczne X1</li><li>Zdolności naturalne X2</li><li>Zdolności uczone X1</li><li>Zdolności cechowe X1</li><li>Techniki walki X3</li></ul>",

"<ul><li>Zdolności fizyczne X4</li><li>Zdolności społeczne X0</li><li>Zdolności naturalne X3</li><li>Zdolności uczone X0</li><li>Zdolności cechowe X2</li><li>Techniki walki X3</li></ul>",

"<ul><li>Zdolności fizyczne X3</li><li>Zdolności społeczne X2</li><li>Zdolności naturalne X2</li><li>Zdolności uczone X1</li><li>Zdolności cechowe X2</li><li>Techniki walki X2</li></ul>",

"<ul><li>Zdolności fizyczne X6</li><li>Zdolności społeczne X2</li><li>Zdolności naturalne X2</li><li>Zdolności uczone X0</li><li>Zdolności cechowe X2</li><li>Techniki walki X1</li></ul>",



];

	document.querySelector('h1').innerHTML=sub_prof[real_prof];
	document.getElementById('text_info').innerHTML="Wartość Xn symbolizuje ile profesji możesz wybrać w zdolności"+text_info[real_prof];	
	
}



function info_exp()
{
	const doswiadczenie = document.getElementById("experience").value;

	const text_info = [
"2K6+7",
"K12+6",
"K10+6",
"K8+6",
"K6+6",



];

	document.querySelector('h1').innerHTML=document.getElementById("experience")[doswiadczenie].textContent;
	document.getElementById('text_info').innerHTML="Podczas tworzenia postaci, wyniki rzutów na atrybuty podstawowe są oparte o "+text_info[doswiadczenie]+'.';	
	
}


/*/
/*/
/*/
/*/

function losowanie()
{
	
	
	imiona();

}

function imiona()
{
	
	
	const n1 = 
	[
	  "Aeri", "Alka", "Arka", "Aster", "Drak", 
	  "Dyma", "Erythi", "Gala", "Kaian", "Kly", 
	  "Lyko", "Nyk", "Phok", "Pyro", "Sarpi", 
	  "Ther", "Theran", "Xan", "Zephi", "Zelor"
	];
	const n2 = [
	  "doros", "nor", "lon", "iades", "mynos", 
	  "rkos", "on", "kryn", "zos", "moros", 
	  "rion", "onis", "aris", "thon", "des", 
	  "diros", "toros", "theon", "rus", "medes"
	];

	
	var r1=Math.floor(Math.random()*20);
	var r2=Math.floor(Math.random()*20);
	
	document.getElementById('heroname').value=n1[r1]+n2[r2];
	document.getElementById('heroname').disabled = false;
	
	
}

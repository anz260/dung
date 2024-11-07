
function starter()
{
atrybuty() 	
whoami()	
specjalizacja()	
}

function atrybuty() 
{ 
	const collection = document.getElementsByClassName("atrybuty_p");

	
	const bonus = document.getElementById("bonusik").value;
	const zaawansowanie = document.getElementById("zaawansowanie").value;

	const atrybuty_table = [];
	

	
//TU jest losowana wartość do atrybutow		
	for (var i = 0; i < 7; i++)
	{
		atrybuty_table[i] = Math.floor(Math.random() * zaawansowanie) + 7;
		collection[i].value =atrybuty_table[i] ;
	}
	if (bonus !=8){
		atrybuty_table[bonus] =atrybuty_table[bonus]+1 ;
		collection[bonus].value =atrybuty_table[bonus] ;
	}
	
	
//OD TERAZ JEST PROBKA WYDZIELENIA	
zdolnosci_all()
}
function zdolnosci_all() 
{
	
	
	const collection = document.getElementsByClassName("atrybuty_p");
	const atrybuty_wynikowe = document.getElementsByClassName("atrybuty_w");
	const zdolnosci_speciall = document.getElementsByClassName("zdolnosci_speciall");
	const zdolnosci_fizyczne = document.getElementsByClassName("zdolnosci_f");
	const zdolnosci_spoleczne = document.getElementsByClassName("zdolnosci_s");
	const zdolnosci_naturalne = document.getElementsByClassName("zdolnosci_n");
	const zdolnosci_uczone = document.getElementsByClassName("zdolnosci_u");
	const zdolnosci_cechowe = document.getElementsByClassName("zdolnosci_c");
	const zaawansowanie = document.getElementById("zaawansowanie").value;

	const atrybuty_table = [];
	var suma=0;	
	for (var i = 0; i < 7; i++)
	{
	
		atrybuty_table[i] =parseInt(collection[i].value) ;
	}

	
	//Atrybuty wynikowe
	//zdrowie
	atrybuty_wynikowe[0].innerHTML =atrybuty_table[1]*2+5 ;
	
	//poczytalnosc
	
	//if (document.getElementById("klasyczek").value===4)
	//atrybuty_wynikowe[1].innerHTML =(atrybuty_table[0]+atrybuty_table[2]+atrybuty_table[3])*2 ;
	atrybuty_wynikowe[1].innerHTML =(document.getElementById("klasyczek").value ==3) 
	? 
	atrybuty_wynikowe[1].innerHTML =(atrybuty_table[0]+atrybuty_table[2]+atrybuty_table[3])*2 
	:
	atrybuty_wynikowe[1].innerHTML =atrybuty_table[0]+atrybuty_table[2]+atrybuty_table[3] ;
	
	//odpornosc
	atrybuty_wynikowe[2].innerHTML =Math.floor((2*atrybuty_table[1]+atrybuty_table[4])/6) ;
	//unik
	atrybuty_wynikowe[3].innerHTML =Math.floor((atrybuty_table[5])/2) ;	
	//inicjatywa
	atrybuty_wynikowe[4].innerHTML =Math.floor((2*atrybuty_table[2]+atrybuty_table[5])/2) ;
	
	for (var i = 0; i < 7; i++)
	{
		 suma +=atrybuty_table[i];
		
	}
	atrybuty_wynikowe[5].innerHTML =suma;



//Zdolnosci fizyczne


//Balans ciała 	
	
	zdolnosci_fizyczne[0].innerHTML =(zdolnosci_speciall[0].checked ===true) 
	? 
	atrybuty_table[6]*2+atrybuty_table[1]
	:
	Math.floor((atrybuty_table[6]*2+atrybuty_table[1])/2);
		
//Kieszonkostwo 
	
	zdolnosci_fizyczne[1].innerHTML =(zdolnosci_speciall[1].checked ===true) 
	? 
	atrybuty_table[2]+atrybuty_table[5]+atrybuty_table[6]
	:
	Math.floor((atrybuty_table[2]+atrybuty_table[5]+atrybuty_table[6])/2);
		
// Spostrzegawczość
zdolnosci_fizyczne[2].innerHTML = (zdolnosci_speciall[2].checked === true) 
    ? (atrybuty_table[3] * 2) + atrybuty_table[0]
    : Math.floor(((atrybuty_table[3] * 2) + atrybuty_table[0]) / 2);

// Tężyzna
zdolnosci_fizyczne[3].innerHTML = (zdolnosci_speciall[3].checked === true) 
    ? atrybuty_table[1] + (2 * atrybuty_table[4])
    : Math.floor((atrybuty_table[1] + (2 * atrybuty_table[4])) / 2);

// Ukrywanie się
zdolnosci_fizyczne[4].innerHTML = (zdolnosci_speciall[4].checked === true) 
    ? atrybuty_table[2] + atrybuty_table[0] + atrybuty_table[6]
    : Math.floor((atrybuty_table[2] + atrybuty_table[0] + atrybuty_table[6]) / 2);

// Wspinaczka
zdolnosci_fizyczne[5].innerHTML = (zdolnosci_speciall[5].checked === true) 
    ? atrybuty_table[3] + atrybuty_table[6] + atrybuty_table[1]
    : Math.floor((atrybuty_table[3] + atrybuty_table[6] + atrybuty_table[1]) / 2);

// Wstrzemięźliwość
zdolnosci_fizyczne[6].innerHTML = (zdolnosci_speciall[6].checked === true) 
    ? atrybuty_table[2] * 3
    : Math.floor((atrybuty_table[2] * 3) / 2);
	


//Zdolnosci społeczne

// Empatia
zdolnosci_spoleczne[0].innerHTML = (zdolnosci_speciall[7].checked === true) 
    ? (atrybuty_table[3] * 2) + atrybuty_table[0]
    : Math.floor(((atrybuty_table[3] * 2) + atrybuty_table[0]) / 2);

// Rozmowa
zdolnosci_spoleczne[1].innerHTML = (zdolnosci_speciall[8].checked === true) 
    ? atrybuty_table[2] + atrybuty_table[3] + atrybuty_table[0]
    : Math.floor((atrybuty_table[2] + atrybuty_table[3] + atrybuty_table[0]) / 2);

// Siła woli
zdolnosci_spoleczne[2].innerHTML = (zdolnosci_speciall[9].checked === true) 
    ? (atrybuty_table[2] * 2) + atrybuty_table[3]
    : Math.floor(((atrybuty_table[2] * 2) + atrybuty_table[3]) / 2);

		
			
		
//Zdolnosci naturalne

// Liny i węzły
zdolnosci_naturalne[0].innerHTML = (zdolnosci_speciall[10].checked === true) 
    ? atrybuty_table[3] + atrybuty_table[6] + atrybuty_table[4]
    : Math.floor((atrybuty_table[3] + atrybuty_table[6] + atrybuty_table[4]) / 2);

// Nawigacja
zdolnosci_naturalne[1].innerHTML = (zdolnosci_speciall[11].checked === true) 
    ? atrybuty_table[3] + (2 * atrybuty_table[0])
    : Math.floor((atrybuty_table[3] + (2 * atrybuty_table[0])) / 2);

// Przetrwanie
zdolnosci_naturalne[2].innerHTML = (zdolnosci_speciall[12].checked === true) 
    ? atrybuty_table[2] + atrybuty_table[6] + atrybuty_table[1]
    : Math.floor((atrybuty_table[2] + atrybuty_table[6] + atrybuty_table[1]) / 2);

// Tropienie
zdolnosci_naturalne[3].innerHTML = (zdolnosci_speciall[13].checked === true) 
    ? atrybuty_table[2] + atrybuty_table[0] + atrybuty_table[6]
    : Math.floor((atrybuty_table[2] + atrybuty_table[0] + atrybuty_table[6]) / 2);

// Wiedza o roślinach
zdolnosci_naturalne[4].innerHTML = (zdolnosci_speciall[14].checked === true) 
    ? atrybuty_table[3] + atrybuty_table[5] + atrybuty_table[4]
    : Math.floor((atrybuty_table[3] + atrybuty_table[5] + atrybuty_table[4]) / 2);

// Wiedza o zwierzętach
zdolnosci_naturalne[5].innerHTML = (zdolnosci_speciall[15].checked === true) 
    ? (atrybuty_table[3] * 2) + atrybuty_table[0]
    : Math.floor(((atrybuty_table[3] * 2) + atrybuty_table[0]) / 2);

//Zdolnosci uczone
// Astronomia
zdolnosci_uczone[0].innerHTML = (zdolnosci_speciall[16].checked === true)
    ? atrybuty_table[3] + atrybuty_table[6] + atrybuty_table[4]
    : Math.floor((atrybuty_table[3] + atrybuty_table[6] + atrybuty_table[4]) / 2);

// Historia
zdolnosci_uczone[1].innerHTML = (zdolnosci_speciall[17].checked === true)
    ? atrybuty_table[3] + (2 * atrybuty_table[0])
    : Math.floor((atrybuty_table[3] + (2 * atrybuty_table[0])) / 2);

// Mechanika
zdolnosci_uczone[2].innerHTML = (zdolnosci_speciall[18].checked === true)
    ? atrybuty_table[2] + atrybuty_table[6] + atrybuty_table[1]
    : Math.floor((atrybuty_table[2] + atrybuty_table[6] + atrybuty_table[1]) / 2);

// Mity i legendy
zdolnosci_uczone[3].innerHTML = (zdolnosci_speciall[19].checked === true)
    ? atrybuty_table[2] + atrybuty_table[0] + atrybuty_table[6]
    : Math.floor((atrybuty_table[2] + atrybuty_table[0] + atrybuty_table[6]) / 2);

// Prawa
zdolnosci_uczone[4].innerHTML = (zdolnosci_speciall[20].checked === true)
    ? atrybuty_table[3] + atrybuty_table[5] + atrybuty_table[4]
    : Math.floor((atrybuty_table[3] + atrybuty_table[5] + atrybuty_table[4]) / 2);

// Wiedza magiczna
zdolnosci_uczone[5].innerHTML = (zdolnosci_speciall[21].checked === true)
    ? (atrybuty_table[3] * 2) + atrybuty_table[0]
    : Math.floor(((atrybuty_table[3] * 2) + atrybuty_table[0]) / 2);

// Wiedza taktyczna
zdolnosci_uczone[6].innerHTML = (zdolnosci_speciall[22].checked === true)
    ? atrybuty_table[0] + atrybuty_table[2] + atrybuty_table[3]
    : Math.floor((atrybuty_table[0] + atrybuty_table[2] + atrybuty_table[3]) / 2);


		
//Zdolnosci cechowe


// Alchemia
zdolnosci_cechowe[0].innerHTML = (zdolnosci_speciall[23].checked === true)
    ? atrybuty_table[2] + atrybuty_table[3] + atrybuty_table[5]
    : Math.floor((atrybuty_table[2] + atrybuty_table[3] + atrybuty_table[5]) / 2);

// Gotowanie
zdolnosci_cechowe[1].innerHTML = (zdolnosci_speciall[24].checked === true)
    ? atrybuty_table[5] + (2 * atrybuty_table[0])
    : Math.floor((atrybuty_table[5] + (2 * atrybuty_table[0])) / 2);

// Leczenie chorób
zdolnosci_cechowe[2].innerHTML = (zdolnosci_speciall[25].checked === true)
    ? atrybuty_table[2] + atrybuty_table[3] + atrybuty_table[1]
    : Math.floor((atrybuty_table[2] + atrybuty_table[3] + atrybuty_table[1]) / 2);

// Leczenie duszy
zdolnosci_cechowe[3].innerHTML = (zdolnosci_speciall[26].checked === true)
    ? (2 * atrybuty_table[0]) + atrybuty_table[1]
    : Math.floor(((2 * atrybuty_table[0]) + atrybuty_table[1]) / 2);

// Leczenie ran
zdolnosci_cechowe[4].innerHTML = (zdolnosci_speciall[27].checked === true)
    ? atrybuty_table[3] + (2 * atrybuty_table[5])
    : Math.floor((atrybuty_table[3] + (2 * atrybuty_table[5])) / 2);

// Leczenie trucizn
zdolnosci_cechowe[5].innerHTML = (zdolnosci_speciall[28].checked === true)
    ? atrybuty_table[2] + atrybuty_table[3] + atrybuty_table[0]
    : Math.floor((atrybuty_table[2] + atrybuty_table[3] + atrybuty_table[0]) / 2);

// Otwieranie zamków
zdolnosci_cechowe[6].innerHTML = (zdolnosci_speciall[29].checked === true)
    ? (atrybuty_table[5] * 2) + atrybuty_table[0]
    : Math.floor(((atrybuty_table[5] * 2) + atrybuty_table[0]) / 2);

		


// Techniki walki

fun_techniki_w()

	
	
// Generejtor atuty i odluty 
//----------------- Generejtor atuty i odluty 
//---------------------------------- Generejtor atuty i odluty 

}
function whoami()
{
	const zaawansowanie = document.getElementById("zaawansowanie").value;
	const cechy_wygladu = document.getElementsByClassName("cechy_w");	

	var atuty_table=[
	 "Adaptacja społeczna", "Akrobata", "Aura dostrojona do żelaza", "Bogaty i-x", "Błogosławiony",
		"Czarodziej", "Dobry wygląd i-ii", "Inspiruj pewnością siebie", "Magiczne dostrojenie", "Mistyczny",
		"Naturalny mówca", "Nie potrzebuje snu (*)", "Nie wyróżniający się wygląd", "Nos krasnoluda", "Oburęczny",
		"Odporność na (chorobę)", "Odporność na (truciznę)", "Odporny na choroby i-ii", "Odporny na ciepło",
		"Odporny na starzenie (*)", "Odporny na truciznę i-ii", "Odporny na zimno", "Piękny głos", "Pragmatyczny",
		"Przyjemny zapach", "Szczęście i-iii", "Szlachetny i-iii", "Trudny do zaczarowania (*)", "Twardy wojownik",
		"Ukryta aura", "Ulepszona regeneracja", "Wewnętrzny zegar", "Widzenie w ciemności i-ii (*)",
		"Wyjątkowa umiejętność", "Wyjątkowy technika walka", "Wyjątkowy zmysł", "Zdolność",
		"Zdolność do posługiwania się bronią", "Zmysł kierunku", "Zmysł lisa", "Zmysł zasięgu", "Zwinny",
		"Zwiększona energia arkan", "Zwiększona wytrzymałość", "Zwiększone punkty karmy", "Zwiększone punkty życia",
		"Zwiększony duch", "Śpiewający dwugłosem (*)"
	];
	var wady_table = [
		"Problemy z adaptacją społeczną", "Niezgrabność", "Aura dostrojona do żelaza (negatywna)", "Biedny i-x", "Przeklęty",
		"Brak umiejętności magicznych", "Zły wygląd i-ii", "Inspiracja brakiem pewności siebie", "Magiczne zaburzenia", "Zwykły",
		"Słaby mówca", "Ciągła potrzeba snu (*)", "Wyróżniający się wygląd", "Brak nosa krasnoluda", "Jednoręczny",
		"Wrażliwość na (choroby)", "Wrażliwość na (trucizny)", "Wrażliwy na choroby i-ii", "Wrażliwy na ciepło",
		"Wrażliwy na starzenie (*)", "Wrażliwy na trucizny i-ii", "Wrażliwy na zimno", "Brzydki głos", "Niekreatywny",
		"Nieprzyjemny zapach", "Pełen pecha i-iii", "Nie-Szlachetny i-iii", "Łatwy do zaczarowania (*)", "Słaby wojownik",
		"Widoczna aura", "Utrudniona regeneracja", "Zaburzony wewnętrzny zegar", "Widzenie w ciemności (słabe) (*)",
		"Brak wyjątkowych umiejętności", "Zwykłe techniki walki", "Brak zmysłów", "Brak zdolności",
		"Brak zdolności do posługiwania się bronią", "Brak zmysłu kierunku", "Brak zmysłu lisa", "Brak zmysłu zasięgu", "Niezwiny",
		"Zredukowana energia arkan", "Zredukowana wytrzymałość", "Zredukowane punkty karmy", "Zredukowane punkty życia",
		"Zredukowany duch", "Niezdolność do śpiewu dwugłosem (*)"
	];


	var x = document.getElementById("atuty");
	var y = document.getElementById("wady");
	var placeholder = [];
	for (var i=0;i<Math.floor(zaawansowanie/2)-2;i++)
	{
		 let numbers; // Zmienna do przechowywania nowej liczby

		do {
			numbers = Math.floor(Math.random() * atuty_table.length); // Generuj nową losową liczbę
		} while (placeholder.includes(numbers)); // Powtarzaj, dopóki liczba już istnieje w tablicy

		placeholder[i] = "<li>"+atuty_table[numbers]+"</li>"; // Dodaj unikalną liczbę do tablicy
		x.innerHTML=placeholder.toString().replaceAll(",", '');
		
		
	}

	placeholder = [];
	for (var i=0;i<Math.abs(Math.floor(zaawansowanie/2-10))-2;i++)
	{
		 let numbers; // Zmienna do przechowywania nowej liczby

		do {
			numbers = Math.floor(Math.random() * wady_table.length); // Generuj nową losową liczbę
		} while (placeholder.includes(numbers)); // Powtarzaj, dopóki liczba już istnieje w tablicy

		placeholder[i] = "<li>"+wady_table[numbers]+"</li>"; // Dodaj unikalną liczbę do tablicy
		y.innerHTML=placeholder.toString().replaceAll(",", '');
	}

		

	//WYGLAD
	//-------------WYGLAD
	//--------------------------WYGLAD

	var naturalne_kolory_wlosow = [
		"Czarne",
		"Brązowe",
		"Jasny brąz",
		"Ciemny brąz",
		"Blond",
		"Rude",
		"Czerwone",
		"Miedziane",
		"Złoty blond",
		"Siwe",
		"Szare",
		"Kasztanowe",
		"Ciemny blond",
		"Ciemny rudy",
		"Ciemny czerwony",
		"Białe",
		"Orzechowe",
		"Jasny rudy",
		"Brak",
		"Ciepły brąz"
	];
	var kolory_oczu = [
		"Niebieske",
		"Zielone",
		"Brązowe",
		"Szare",
		"Czarne",
		"Bursztynowe",
		"Słoneczny brąz",
		"Orzechowe",
		"Zielono-brązowe",
		"Niebiesko-zielone",
		"Szaro-niebieske",
		"Szaro-zielone",
		"Ciemnozielone",
		"Ciemnoniebieske",
		"Zielono-żółte",
		"Złote",
		"Fioletowe",
		"Czerwone",
		"Piwne",
		"Karmelowe"
	];

	var size=150+Math.floor(Math.random() *20)+Math.floor(Math.random() *20)+2;
	var age=Math.floor(parseInt(zaawansowanie*2)+4+Math.floor(Math.random() *10));
	cechy_wygladu[0].innerHTML="Włosy: "+naturalne_kolory_wlosow[Math.floor(Math.random() * 20)];
	cechy_wygladu[1].innerHTML="Oczy: "+kolory_oczu[Math.floor(Math.random() * 20)];
	cechy_wygladu[2].innerHTML="Wzrost: "+size;
	cechy_wygladu[3].innerHTML="Waga: "+((size-100)+(Math.floor(Math.random() *20)+Math.floor(Math.random() *20)-20));
	cechy_wygladu[4].innerHTML="Wiek: "+age;



	var klasy_społeczne = [
		"Adoptowany przez Maga",
		"Arystokracja",
		"Artyści",
		"Kupcy",
		"Rodzina Chłopska",
		"Rodzina Kupiecka",
		"Niskiego Urodzenia",
		"Rodzina Pisarzy",
		"Rodzina Rzemieślnicza",
		"Rycerze",
		"Urodzeni w Niewoli",
		"Wysoki Kler"
	];

	cechy_wygladu[5].innerHTML="Klasa: "+klasy_społeczne[Math.floor(Math.random() * klasy_społeczne.length)];


	var eventy_all=[
	   "Jackpot",
		"Znalezienie Nauczyciela",
		"Dług Wdzięczności od Szlachcica",
		"Znalezienie Nauczyciela Walki",
		"Dług Wdzięczności od Wiedźmina",
		"Związałeś się z Bandycką Grupą",
		"Oswojenie Dzikiego Zwierzęcia",
		"Dług Wdzięczności od Maga",
		"Błogosławieństwo od Kapłana",
		"Pasowanie na Rycerza",
	//zle 
		"Dług",
		"Więzienie",
		"Uzależnienie",
		"Śmierć Bliskiej Osoby",
		"Fałszywe Oskarżenie",
		"Ścigany przez Prawo",
		"Zdrada",
		"Wypadek",
		"Upośledzenie Fizyczne lub Psychiczne",
		"Klątwa"


	];

	var eventy1=[];

	for(var i=0; i<Math.floor(age/10)+1;i++) {eventy1[i]="<li>"+eventy_all[Math.floor(Math.random()*eventy_all.length)]+"</li>";}

		cechy_wygladu[6].innerHTML="Wydarzenia: "+eventy1.toString().replaceAll(",", '');

		
	
}

/*
atrybuty_table[0]	Intuicja
atrybuty_table[1]	Kondycja
atrybuty_table[2]	Odwaga
atrybuty_table[3]	Rozsądek
atrybuty_table[4]	Siła
atrybuty_table[5]	Zręczność
atrybuty_table[6]	Zwinność 
*/


//TUTaj jest powtórzenie tego generowania technik

function fun_techniki_w()
{
	const techniki_walki = document.getElementsByClassName("techniki_w");
	const techniki_wbox = document.getElementsByClassName("techniki_wbox");
	const collection = document.getElementsByClassName("atrybuty_p");
	const atrybuty_table = [];
	for (var i = 0; i < 7; i++)
	{atrybuty_table[i]=parseInt(collection[i].value);}

	
	//luki i kusze
	
	
	techniki_walki[0].innerHTML =(techniki_wbox[0].checked ===true) 
	? 
	Math.max(0,Math.floor((atrybuty_table[5]-8)/3+atrybuty_table[5]))
	:
	Math.max(0,Math.floor(((atrybuty_table[5]-8)/3+atrybuty_table[5])/2));
	
	
	techniki_walki[1].innerHTML =(techniki_wbox[1].checked ===true) 
	? 
	Math.max(0,Math.floor((atrybuty_table[5]-8)/3+atrybuty_table[5]))
	:
	Math.max(0,Math.floor(((atrybuty_table[5]-8)/3+atrybuty_table[5])/2));
	
	//sztylety i szermiercze
	techniki_walki[2].innerHTML =(techniki_wbox[2].checked ===true) 
	? 
	Math.max(0,Math.floor((atrybuty_table[2]-8)/3+atrybuty_table[6]))
	:
	Math.max(0,Math.floor(((atrybuty_table[2]-8)/3+atrybuty_table[6])/2));
	
	techniki_walki[3].innerHTML =(techniki_wbox[3].checked ===true) 
	? 
	Math.max(0,Math.floor((atrybuty_table[2]-8)/3+atrybuty_table[6]))
	:
	Math.max(0,Math.floor(((atrybuty_table[2]-8)/3+atrybuty_table[6])/2));

	
	
	//uderzeniowe łańcuchowe i lance
	
	techniki_walki[4].innerHTML =(techniki_wbox[4].checked ===true) 
	? 
	Math.max(0,Math.floor((atrybuty_table[2]-8)/3+atrybuty_table[4]))	
	:
	Math.max(0,Math.floor(((atrybuty_table[2]-8)/3+atrybuty_table[4])/2));	
	
		
	techniki_walki[5].innerHTML =(techniki_wbox[5].checked ===true) 
	? 
	Math.max(0,Math.floor((atrybuty_table[2]-8)/3+atrybuty_table[4]))	
	:
	Math.max(0,Math.floor(((atrybuty_table[2]-8)/3+atrybuty_table[4])/2));	
	
			
	techniki_walki[6].innerHTML =(techniki_wbox[6].checked ===true) 
	? 
	Math.max(0,Math.floor((atrybuty_table[2]-8)/3+atrybuty_table[4]))	
	:
	Math.max(0,Math.floor(((atrybuty_table[2]-8)/3+atrybuty_table[4])/2));	
	
	
	//piesci i pary
				
	techniki_walki[7].innerHTML =(techniki_wbox[7].checked ===true) 
	? 
	Math.max(0,Math.floor((atrybuty_table[2]-8)/3))+Math.max(atrybuty_table[4],atrybuty_table[6])
	:
	Math.max(0,Math.floor(Math.floor((atrybuty_table[2]-8)/3)+Math.max(atrybuty_table[4]/2,atrybuty_table[6]/2)));
	
	
		techniki_walki[8].innerHTML =Math.floor(Math.max(0,Math.floor(((atrybuty_table[2]-8)/3))+Math.max(atrybuty_table[4]/2,atrybuty_table[6])/2));
	
	
}


function specjalizacja()
{
	
	const profesion = document.getElementById("klasyczek").value;
	const culture = document.getElementById("kulturka").value;
	const cechy_wygladu = document.getElementsByClassName("cechy_w");	
	
	var zprofes =[
	"Zdolnosci Fizyczne 2, Dowolne Zdolnosci 2, Techniki Walki 3",
	"Zdolnosci Społeczne 2, Dowolne Zdolnosci 4, Techniki Walki 1",
	"Zdolnosci Naturalne 3, Dowolne Zdolnosci 3, Techniki Walki 2",
	"Zdolnosci Uczone 4, Dowolne Zdolnosci 2, Techniki Walki 1, Poczytalność X2",
	"Zdolnosci Cechowe 3, Dowolne Zdolnosci 3, Techniki Walki 2",
	"Dowolne Zdolnosci 5, Techniki Walki 1"
	];	
	var zcultur =[
	"Zdolnosci Naturalne 1",
	"Zdolnosci Fizyczne 1",
	"Zdolnosci Uczone 1",
	"Zdolnosci Społeczne 1",
	"Zdolnosci Cechowe 1",
	"Brak",
	];
	
	cechy_wygladu[7].innerHTML=
	"Profesja :<br>"+zprofes[profesion]+
	"<br>Kultura :<br>"+zcultur[culture];

}
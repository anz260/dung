
function info_culture()
{
	const kultura = document.getElementById("culture").value;
	const h1 = [
		"Aqoiczyk",
		"Begnak",
		"Hyan",
		"Kameeńczyk",
		"Vuryjczyk",
		"Wyspiarz Cideum"
	];	const text_info = [
	  "Wycena +15<br>Ukrywanie się +10<br>Opieka nad zwierzętami +5<br>Religia +5", // Aqoiczyk
	  "Zahartowanie +15<br>Historia +10<br>Mocna głowa +5<br>Przetrwanie +5", // Begnak
	  "Żeglarstwo +15<br>Astronomia +10<br>Stolarstwo +5<br>Targowanie +5", // Hyan
	  "Mity i legendy +15<br>Maniery +10<br>Spostrzegawczość +5<br>Gotowanie +5", // Kameeńczyk
	  "Siła woli +15<br>Leczenie trucizn +10<br>Alchemia +5<br>Torturowanie +5", // Vuryjczyk
	  "Wiedza o roślinach +15<br>Wspinaczka +10<br>Krzepa +5<br>Kowalstwo +5" // Wyspiarz Cideum
	];
	document.querySelector('h1').innerHTML=h1[kultura];
	document.getElementById('text_info').innerHTML=text_info[kultura];
}
function info_occupation()
{
	const profesja = document.getElementById("occupation").value;
	const h1 = ["Wojownik", "Tropiciel", "Dyplomata", "Mędrzec", "Rzemieślnik"];	
	const text_info = [
	"Wojownik to postać, która opiera się głównie na zdolnościach fizycznych, takich jak siła, zwinność czy wytrzymałość, oraz technikach walki. Specjalizuje się w używaniu broni, ochronie siebie i innych w boju, a także w wykonywaniu zadań wymagających dużej wytrzymałości i sprawności fizycznej.",

	];
	const main_0 = ["#4c3430","#304c44","#494c30","#30324c","#48304C" ];	
	const main_1 = ["#7d4247","#427d5f","#7d7542","#42547d","#67427D" ];	
	var r = document.querySelector(':root');
	r.style.setProperty('--main_0', main_0[profesja]);
	r.style.setProperty('--main_1', main_1[profesja]);
	
	
	document.querySelector('h1').innerHTML=h1[profesja];
	document.getElementById('text_info').innerHTML=text_info[profesja];
}
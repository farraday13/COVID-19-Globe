
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<div> <table> <tr> <td>Company</td><td>Segafredo Zanetti</td></tr><tr> <td>Sector</td><td>Food/Beverages</td></tr><tr> <td>Country</td><td>Italy</td></tr><tr> <td>State/City</td><td>Emilia-Romagna</td></tr><tr> <td>Ransom($ Mil)</td><td>NA</td></tr><tr> <td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr> <td>Paid</td><td></td></tr><tr> <td>Impact Size(GB)</td><td>NA</td></tr></table></div>',
		location: { lat: 44.4939, lng: 11.3428 },
		month: 'feb',
	},
	{
		title : '<div><table> <tr> <td>Company</td><td>Ministerio de Economía y Finanzas de Ecuador (Ecuadors Ministry of Finance)</td></tr><tr> <td>Sector</td><td>Government/Government Facilities</td></tr><tr> <td>Country</td><td>Ecuador</td></tr><tr> <td>State/City</td><td>Quito</td></tr><tr> <td>Ransom($ Mil)</td><td>NA</td></tr><tr> <td>Strain of ransomware</td><td>Ronggolawe/Hotarus Corp</td></tr><tr> <td>Paid</td><td></td></tr><tr> <td>Impact Size(GB)</td><td>NA</td></tr></table></div>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Centrais Eletricas Brasileiras (Eletrobras)</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Rio de Janeiro</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -22.9083, lng: -43.1964 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Companhia Paranaense de Energia (Copel)</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Curitiba</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -25.4297, lng: -49.2719 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Rehoboth McKinley Christian Health Care Services</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Mexico</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.1053, lng: -106.6464 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Kia Motors</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>South Korea</td></tr><tr><td>State/City</td><td>Seoul</td></tr><tr><td>Ransom($ Mil)</td><td>$20.0</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.56, lng: 126.99 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Discount Car and Truck Rentals </td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Toronto</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7417, lng: -79.3733 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Standley Systems </td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Oklahama</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.4676, lng: -97.5136 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Capital Medical Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Oklahama</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.4676, lng: -97.5136 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Yuba County</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Carnegie Clean Energy</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Fremantle</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -32.0569, lng: 115.7439 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Newberry County Memorial Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>South Carolina</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.8153, lng: -79.9628 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Home Hardware Stores Ltd</td></tr><tr><td>Sector</td><td>Home Utility/Appliance</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>St. Jacobs, Ontario</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.2806, lng: -66.0761 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Guess</td></tr><tr><td>Sector</td><td>Luxury/Fashion</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>200</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Automatic Funds Transfer Services Inc. (vendor to State/City of Bainbridge Island)</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Cuba</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Nocona General Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Mutuelle Nationale des Hospitaliers (MNH)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Amilly (Loiret)</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.9731, lng: 2.7703 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Electrobras &amp; Copel</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>​Rio de Janeiro</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1000</td></tr></table>',
		location: { lat: -22.9083, lng: -43.1964 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>MNH</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Amilly, Loiret</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.9731, lng: 2.7703 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>ECU Worldwide</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Belgium</td></tr><tr><td>State/City</td><td>Antwerpen</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mount Locker</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.2211, lng: 4.3997 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Center Hospitalier de Dax-Côte d’Argent</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Dax, Landes</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.71, lng: -1.05 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Netherlands Organisation for Scientific Research (NWO)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>The Hague</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.08, lng: 4.31 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Cuyahoga Metropolitan Housing Authority</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Ohio</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.5425, lng: -80.0926 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Wolfe Eye Clinic</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Iowa</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.5725, lng: -93.6105 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>CD Projekt</td></tr><tr><td>Sector</td><td>Strain of ransomware/Game Developers</td></tr><tr><td>Country</td><td>Poland</td></tr><tr><td>State/City</td><td>Warsaw</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hellokitty/DeathKitty</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.23, lng: 21.0111 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Sturdy Memorial Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Central Piedmont Community College (CPCC)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>North Carolina</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.208, lng: -80.8304 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Midwest Transplant Network</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Kansas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.6896, lng: -97.3442 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Fugro</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Leidschendam</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.0883, lng: 4.3944 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Discount car and truck rentals</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>St. Jacobs, Ontario</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>120</td></tr></table>',
		location: { lat: 45.2806, lng: -66.0761 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Underwriters Laboratories (UL)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Villefranche-sur-Saône (Rhône) Hospital Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Villefranche-sur-Mer</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7042, lng: 7.3117 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Hawaii Payroll Services</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Hawaii</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 21.3294, lng: -157.846 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Kia Motors America (KMA)</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>ATFS</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Cuba</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>CaptureRx</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>San Antonio</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 29.4658, lng: -98.5253},
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Saginaw Township Community Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Michigan</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3834, lng: -83.1024 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Ticketcounter</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Amsterdam</td></tr><tr><td>Ransom($ Mil)</td><td>$3.4</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.3667, lng: 4.8833 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Gyrodata Incorporated</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Manutan</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>St. Margaret’s Health–Spring Valley</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>TietoEVRY</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Finland</td></tr><tr><td>State/City</td><td>Espoo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 60.21, lng: 24.66 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Allergy Partners</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>North Carolina</td></tr><tr><td>Ransom($ Mil)</td><td>$1.8</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.208, lng: -80.8304 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Affton School District  (Missouri)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>St. Louis</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.6358, lng: -90.2451 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Dutch Research Council</td></tr><tr><td>Sector</td><td>Pharmaceuticals/Research</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>The Hague</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.08, lng: 4.31 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Ecuadors Ministry of Finance</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Ecuador</td></tr><tr><td>State/City</td><td>Quito</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ronggolawe/Hotarus Corp</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Kaman</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Connecticut</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.1918, lng: -73.1953 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Kingman</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Arizona</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.5722, lng: -112.0891 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Compucom (MSP)</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Fort Mill</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.0062, lng: -80.9388 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>CompuCom</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>North Carolina</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.208, lng: -80.8304 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Prism HR</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Pimpri-Chinchwad</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Pune</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 18.5196, lng: 73.8553 },
		month: 'feb',
	},


];
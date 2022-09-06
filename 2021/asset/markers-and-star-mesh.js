
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [

	{
		title : '<div> <table> <tr> <td>Company :</td><td>Wentworth Golf Club</td></tr><tr> <td>Sector :</td><td>Commercial Facilities</td></tr><tr> <td>Country :</td><td>United Kingdom</td></tr><tr> <td>State/City :</td><td>Surrey</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 51.399611, lng: -0.589527 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>DSC Logistics</td></tr><tr> <td>Sector :</td><td>Transportation/Logistics</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Illinois</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 41.8373, lng: -87.6862  },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Granite Wellness Centers</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>California</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Gastroenterology Consultants</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Nevada</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>Mespinoza/Pysa </td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 37.8445, lng: -94.3492 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Cochise Eye and Laser</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Arizona</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 33.5722, lng: -112.0891 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>State/City of Montmagne</td></tr><tr> <td>Sector :</td><td>Government/Government Facilities</td></tr><tr> <td>Country :</td><td>Canada</td></tr><tr> <td>State/City :</td><td>Montmagne</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 46.9833 , lng: -70.55 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>FatFace</td></tr><tr> <td>Sector :</td><td>Retailer</td></tr><tr> <td>Country :</td><td>Canada</td></tr><tr> <td>State/City :</td><td>HampShire</td></tr><tr> <td>Cost $ Mil :</td><td>$2.0</td></tr><tr> <td>Strain of ransomware :</td><td>Conti/WizardSpider</td></tr><tr> <td>Paid :</td><td>Yes</td></tr><tr> <td>Impact Size (GB) :</td><td>200</td></tr></table></div>',
		location: { lat: 42.1124, lng: -88.5122 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Iobit</td></tr><tr> <td>Sector :</td><td>Information Technology</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>California</td></tr><tr> <td>Cost $ Mil :</td><td>$0.1</td></tr><tr> <td>Strain of ransomware :</td><td>DeroHE</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Chwapi</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>Belgium</td></tr><tr> <td>State/City :</td><td>Tournai</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>BitLocker</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>12500</td></tr></table></div>',
		location: { lat: 50.6, lng: 3.3833 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Kroger</td></tr><tr> <td>Sector :</td><td>Supermarket</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Ohio</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>Clop</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 40.5425, lng: -80.0926 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>WestRock Company</td></tr><tr> <td>Sector :</td><td>Critical Manufacturing</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Georgia</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 33.7627, lng: -84.4224 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Georgetown County</td></tr><tr> <td>Sector :</td><td>Government/Government Facilities</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>South Carolina</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>No</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 32.8153, lng: -79.9628 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Crisp Regional Health Services</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Maryland</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>No</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Personal Touch Holding Corp.</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>New York</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div><div> <table> <tr> <td>Company :</td><td>Victor Central School District</td></tr><tr> <td>Sector :</td><td>Education/Education Facilities</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>New York</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>UK Research and Innovation</td></tr><tr> <td>Sector :</td><td>Government/Government Facilities</td></tr><tr> <td>Country :</td><td>United Kingdom</td></tr><tr> <td>State/City :</td><td>Swindon</td></tr><tr> <td>Cost $ Mil :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>No</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 51.56, lng: -1.78 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company</td><td>Segafredo Zanetti</td></tr><tr> <td>Sector</td><td>Food/Beverages</td></tr><tr> <td>Country</td><td>Italy</td></tr><tr> <td>State/City</td><td>Emilia-Romagna</td></tr><tr> <td>cost $ Mil</td><td>NA</td></tr><tr> <td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr> <td>Paid</td><td></td></tr><tr> <td>Impact Size(GB)</td><td>NA</td></tr></table></div>',
		location: { lat: 44.4939, lng: 11.3428 },
		month: 'feb',
	},
	{
		title : '<div><table> <tr> <td>Company</td><td>Ministerio de Economía y Finanzas de Ecuador (Ecuadors Ministry of Finance)</td></tr><tr> <td>Sector</td><td>Government/Government Facilities</td></tr><tr> <td>Country</td><td>Ecuador</td></tr><tr> <td>State/City</td><td>Quito</td></tr><tr> <td>cost $ Mil</td><td>NA</td></tr><tr> <td>Strain of ransomware</td><td>Ronggolawe/Hotarus Corp</td></tr><tr> <td>Paid</td><td></td></tr><tr> <td>Impact Size(GB)</td><td>NA</td></tr></table></div>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Centrais Eletricas Brasileiras (Eletrobras)</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Rio de Janeiro</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -22.9083, lng: -43.1964 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Companhia Paranaense de Energia (Copel)</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Curitiba</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -25.4297, lng: -49.2719 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Rehoboth McKinley Christian Health Care Services</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Mexico</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.1053, lng: -106.6464 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Kia Motors</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>South Korea</td></tr><tr><td>State/City</td><td>Seoul</td></tr><tr><td>cost $ Mil</td><td>$20.0</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.56, lng: 126.99 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Discount Car and Truck Rentals </td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Toronto</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7417, lng: -79.3733 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Standley Systems </td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Oklahama</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.4676, lng: -97.5136 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Capital Medical Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Oklahama</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.4676, lng: -97.5136 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Yuba County</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Carnegie Clean Energy</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Fremantle</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -32.0569, lng: 115.7439 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Newberry County Memorial Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>South Carolina</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.8153, lng: -79.9628 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Home Hardware Stores Ltd</td></tr><tr><td>Sector</td><td>Home Utility/Appliance</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>St. Jacobs, Ontario</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.2806, lng: -66.0761 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Guess</td></tr><tr><td>Sector</td><td>Luxury/Fashion</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>200</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Automatic Funds Transfer Services Inc. (vendor to State/City of Bainbridge Island)</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Cuba</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Nocona General Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Mutuelle Nationale des Hospitaliers (MNH)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Amilly (Loiret)</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.9731, lng: 2.7703 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Electrobras &amp; Copel</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>​Rio de Janeiro</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1000</td></tr></table>',
		location: { lat: -22.9083, lng: -43.1964 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>MNH</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Amilly, Loiret</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.9731, lng: 2.7703 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>ECU Worldwide</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Belgium</td></tr><tr><td>State/City</td><td>Antwerpen</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mount Locker</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.2211, lng: 4.3997 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Center Hospitalier de Dax-Côte d’Argent</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Dax, Landes</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.71, lng: -1.05 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Netherlands Organisation for Scientific Research (NWO)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>The Hague</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.08, lng: 4.31 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Cuyahoga Metropolitan Housing Authority</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Ohio</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.5425, lng: -80.0926 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Wolfe Eye Clinic</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Iowa</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.5725, lng: -93.6105 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>CD Projekt</td></tr><tr><td>Sector</td><td>Strain of ransomware/Game Developers</td></tr><tr><td>Country</td><td>Poland</td></tr><tr><td>State/City</td><td>Warsaw</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hellokitty/DeathKitty</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.23, lng: 21.0111 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Sturdy Memorial Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Central Piedmont Community College (CPCC)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>North Carolina</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.208, lng: -80.8304 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Midwest Transplant Network</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Kansas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.6896, lng: -97.3442 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Fugro</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Leidschendam</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.0883, lng: 4.3944 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Discount car and truck rentals</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>St. Jacobs, Ontario</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>120</td></tr></table>',
		location: { lat: 45.2806, lng: -66.0761 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Underwriters Laboratories (UL)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Villefranche-sur-Saône (Rhône) Hospital Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Villefranche-sur-Mer</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7042, lng: 7.3117 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Hawaii Payroll Services</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Hawaii</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 21.3294, lng: -157.846 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Kia Motors America (KMA)</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>ATFS</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Cuba</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>CaptureRx</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>San Antonio</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 29.4658, lng: -98.5253},
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Saginaw Township Community Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Michigan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3834, lng: -83.1024 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Ticketcounter</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Amsterdam</td></tr><tr><td>cost $ Mil</td><td>$3.4</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.3667, lng: 4.8833 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Gyrodata Incorporated</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Manutan</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>St. Margaret’s Health–Spring Valley</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>TietoEVRY</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Finland</td></tr><tr><td>State/City</td><td>Espoo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 60.21, lng: 24.66 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Allergy Partners</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>North Carolina</td></tr><tr><td>cost $ Mil</td><td>$1.8</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.208, lng: -80.8304 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Affton School District  (Missouri)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>St. Louis</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.6358, lng: -90.2451 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Dutch Research Council</td></tr><tr><td>Sector</td><td>Pharmaceuticals/Research</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>The Hague</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.08, lng: 4.31 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Ecuadors Ministry of Finance</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Ecuador</td></tr><tr><td>State/City</td><td>Quito</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ronggolawe/Hotarus Corp</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Kaman</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Connecticut</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.1918, lng: -73.1953 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Kingman</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Arizona</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.5722, lng: -112.0891 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Compucom (MSP)</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Fort Mill</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.0062, lng: -80.9388 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>CompuCom</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>North Carolina</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.208, lng: -80.8304 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Prism HR</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Pimpri-Chinchwad</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Pune</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 18.5196, lng: 73.8553 },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Acer</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>cost $ Mil</td><td>$50.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862},
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>WOODHOLME GASTROENTEROLOGY</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Spains State Public Employment Service (SEPE)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Spain</td></tr><tr><td>State/City</td><td>Madrid</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.4167, lng: -3.7167 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Molson Coors</td></tr><tr><td>Sector</td><td>Food/Beverages</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Edsembli </td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Toronto</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7417, lng: -79.3733 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>South and State/City College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Birmingham</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.48, lng: -1.9025 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Broward County Public Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Broward County</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.7839, lng: -80.2102 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Azusa police department</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Transport for NSW</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Sydney</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865, lng: 151.2094 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Faxinating Solutions</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Montreal</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.5089, lng: -73.5617 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>CNA</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Phoenix CryptoLocker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Bose</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Hospital in Oloron-Sainte-Marie</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Oloron-Sainte</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 50.5933, lng: 2.9622 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>R. E. Gilmore Investments Corp.</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Ontario</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.0393, lng: -117.6064 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Buffalo Public Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Stratus Technologies</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Ireland</td></tr><tr><td>State/City</td><td>Dublin</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Carnival</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Panama</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 30.1995, lng: -85.6004 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Tightwrapz Printshop</td></tr><tr><td>Sector</td><td>Commercial Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Wichita</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.6896, lng: -97.3442 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Sierra Wireless</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Richmond</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.5295, lng: -77.4756 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Maharashtra Industrial Development Corporation (MIDC) IT systems</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Mumbai</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>SYNack</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 19.0758, lng: 72.8775 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>CNA Financial (Insurance Giant)</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Chicago</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Phoenix CryptoLocker</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Town of Didsbury</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Didsbury</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.6658, lng: -114.1311 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>University of Colorado</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Boulder</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0249, lng: -105.2523 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>University of Miami </td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Coral Gables</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.7037, lng: -80.2715 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Park School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Kansas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.6896, lng: -97.3442 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Gering Public Schools (Nebraska)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Gering</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8275, lng: -103.6649 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Nine Entertainment</td></tr><tr><td>Sector</td><td>Entertainment</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Sydney</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865, lng: 151.2094 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>The Harris Foundation</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072, lng: -0.1275 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>University of Maryland, Baltimore</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Baltimore</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Pierre Fabre</td></tr><tr><td>Sector</td><td>Pharmaceuticals/Research</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>cost $ Mil</td><td>$25.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.8566, lng:  2.3522},
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Boggi Milano</td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>Switzerland</td></tr><tr><td>State/City</td><td>Mendrisio</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ragnarok</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>40</td></tr></table>',
		location: { lat: 45.8667, lng: 8.9833 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>SC Johnson Brazil</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Rio de Janeiro</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -22.9083, lng: -43.1964 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Shell</td></tr><tr><td>Sector</td><td>Oil and Gas</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>$3.80</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072, lng: -0.1275 },
		month: 'mar',
	},
	{
		title : '<table><tr><td>Company</td><td>Asteelflash</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>cost $ Mil</td><td>$24.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>75</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Stanford Medicine</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>J&amp;B Importers</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Technological University Dublin (TU Dublin)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Ireland</td></tr><tr><td>State/City</td><td>Dublin</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Houston Rockets NBA Team</td></tr><tr><td>Sector</td><td>Sports/Sports Equipment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Houston</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Babuk Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 29.7863, lng: -95.3889 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Washington DC Metropolitan Police Department</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington, D.C.</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Babuk Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Santa Clara Valley Transportation Authority</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Santa Clara County, California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.1139, lng: -118.4068 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Merseyrail (Rail network)</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Liverpool State/City Region</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.4075, lng: -2.9919 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Mount Desert Sewage Treatment Plant</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Mount Desert, Maine</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.6773, lng: -70.2715 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Broward County Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Fort Lauderdale</td></tr><tr><td>cost $ Mil</td><td>$40.0</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 26.1412, lng: -80.1464 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Lawrence</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Lawrence, Kansas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.7003, lng: -71.1626 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Wrest Point and Launceston Country Club </td></tr><tr><td>Sector</td><td>Entertainment</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Launceston, Tasmania</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -41.4419, lng: 147.145 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>National College of Ireland (NCI)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Ireland</td></tr><tr><td>State/City</td><td>Dublin</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Consolidated High School District 230</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Orland Park, Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>10</td></tr></table>',
		location: { lat: 41.6074, lng: -87.8619 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Haverhill Public Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Haverhill</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>2.5</td></tr></table>',
		location: { lat: 42.7838, lng: -71.0871 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Hoya Vision Care US/Optical Labs</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>AstroLocker Team</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Reproductive Biology Associates (RBA)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Atlanta</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.7627, lng: -84.4224 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Bakker Logistiek</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Zeewolde</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hades/Hafnium</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.3333, lng: 5.5167 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Office of the Attorney General</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington DC</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Logansport Community School Corporation (Indiana)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Logansport, Indiana</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.7472, lng: -86.3519 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Logansport Community School Corporation (Indiana)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Logansport, Indiana</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.7472, lng: -86.3519 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>SmileDirect</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Nashville</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.1715, lng: -86.7843 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>NBA</td></tr><tr><td>Sector</td><td>Sports/Sports Equipment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Babuk Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>PracticeMax</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Scottsdale, Arizona</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.6872, lng: -111.8651 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Presque Isle Police Department</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Presque Isle, Maine</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 46.6868, lng: -67.9874 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Quanta Computer</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>Taipei</td></tr><tr><td>cost $ Mil</td><td>$50.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Eduro</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Utah</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>AstroLocker Team</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>40</td></tr></table>',
		location: { lat: 39.419220, lng: -111.950684 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>UnitingCare</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Brisbane</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -27.4678, lng: 153.0281 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Metropolitan Police Department</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Babuk Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>250</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Mandan, Hidatsa, and Arikara Nation tribes</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Town, North Dakota</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.1918, lng:  -73.1953 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazils Tribunal de Justiça do Estado do Rio Grande do Sul</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Porto Alegre</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -30.0328, lng: -51.23 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Navnit Group</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Mumbai</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>500</td></tr></table>',
		location: { lat: 19.0758, lng: 72.8775 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Pezzuto  Group</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Castromediano LE</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>100</td></tr></table>',
		location: { lat: 41.8931, lng: 12.4828 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazils Rio Grande do Sul court system</td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sau Paulo</td></tr><tr><td>cost $ Mil</td><td>$5.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.4669, lng: 9.19 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Resort Municipality of Whistler (RMOW)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Whistler, Vancouver</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.8333, lng: 14.25 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Veritas Logistics</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Lod, Lydda</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 31.95, lng: 34.9 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Upstox</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>New Delhi</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 28.6139, lng: 77.209 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Brenntag</td></tr><tr><td>Sector</td><td>Agriculture and Agricultural Products</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Berlin</td></tr><tr><td>cost $ Mil</td><td>$4.0</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>150</td></tr></table>',
		location: { lat: 52.5167, lng: 13.3833 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Coastal Family Health Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Mississippi</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>506</td></tr></table>',
		location: { lat: 32.3163, lng: -90.2124 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Colonial Pipeline</td></tr><tr><td>Sector</td><td>Oil and Gas</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Alpharetta, Georgia</td></tr><tr><td>cost $ Mil</td><td>$4.4</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.0704, lng: -84.2739 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Daihatsu Diesel Mfg. Co</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Osaka</td></tr><tr><td>State/City</td><td>Japan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.752, lng: 135.4582 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>GlobeMed</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Saudi Arabia</td></tr><tr><td>State/City</td><td>Evanston,Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>201</td></tr></table>',
		location: { lat: 42.0463, lng: -87.6942 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>OSF Healthcare</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Peoria, Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>112</td></tr></table>',
		location: { lat: 40.752, lng: -89.6153 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Scripps Health</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Gary</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Gary,Indiana</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.5906, lng: -87.3472 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Toshiba Tec</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.658581, lng: 139.745438},
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Service NSW</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>New South Wales</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865, lng: 151.2094 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>H&amp;M</td></tr><tr><td>Sector</td><td>Luxury/Fashion</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Tel aviv</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Networm</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>110</td></tr></table>',
		location: { lat: 32.08, lng: 34.78 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Bridgelux, Inc.</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Fremont,California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>1</td></tr></table>',
		location: { lat: 37.5265, lng: -121.9852 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Washoe Tribe</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Nevada</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>160</td></tr></table>',
		location: { lat: 37.8445, lng: -94.3492 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Gulfeagle Supply</td></tr><tr><td>Sector</td><td>Construction</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Harwich,Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>85</td></tr></table>',
		location: { lat: 51.934, lng: 1.266 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Tulsa</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Tulsa,Oklahama</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.1284, lng: -95.9042 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>One Call</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Walpole,Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.1465, lng: -71.2555 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>ExaGrid</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Marlborough,Massachusetts</td></tr><tr><td>cost $ Mil</td><td>$2.6</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>800</td></tr></table>',
		location: { lat: 51.42, lng: -1.73 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>CBN Logistic</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Turkey</td></tr><tr><td>State/City</td><td>Istanbul</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>90</td></tr></table>',
		location: { lat: 41.01, lng: 28.9603 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Ireland HSE</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Ireland</td></tr><tr><td>cost $ Mil</td><td>$20.0</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>700</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>LineStar</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>70</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Solen A.S</td></tr><tr><td>Sector</td><td>Food/Beverages</td></tr><tr><td>Country</td><td>Turkey</td></tr><tr><td>State/City</td><td>Gaziantep</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>90</td></tr></table>',
		location: { lat: 37.0667, lng: 37.3833 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Irelands Health Service Executive (HSE)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Ireland</td></tr><tr><td>State/City</td><td>Ireland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>AXA</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>3000</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Corporación Nacional de Telecomunicaciones, CNT EP</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>Ecuador</td></tr><tr><td>State/City</td><td>Pichincha</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>190</td></tr></table>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Sierra College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Rocklin,California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.8075, lng: -121.2488 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Waikato District Health</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>New Zealand</td></tr><tr><td>State/City</td><td>Hamilton</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Zeppelin/Buran/VegaLocker</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.2942, lng: -64.7839 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Florida Heart Associates</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Fort Myers,Florida</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 26.6195, lng: -81.8303 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Langs Building Supplies</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Queensland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Lorenz</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -27.4678, lng: 153.0281 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Desert Wells Family Medicine (Queen Creek Medical Center)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Queen creek, Arizona</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.2386, lng: -111.6343 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Eastern Hancock Community School Corportation</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>North Charlottesville,Indiana</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.7335, lng: -76.0435 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Pacific Market Research (PMR)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Renton,Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.4784, lng: -122.1919 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>ADATA</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>New Taipei State/City</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>700</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>T.I.S Group</td></tr><tr><td>Sector</td><td>Academic publishing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>102</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Clover Park School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>California State/City</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Bridgeport</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Bridgeport, Connecticut</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.1918, lng: -73.1953 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>JBS</td></tr><tr><td>Sector</td><td>Food/Beverages</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sao Paulo</td></tr><tr><td>cost $ Mil</td><td>$11</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>WSSC Water</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>UF Health-The Villages Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Florida</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -34.1, lng: -56.2167 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Rolle</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Switzerland</td></tr><tr><td>State/City</td><td>Canton of Vaud</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Vice-Society</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 46.4575, lng: 6.3317 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>One Call Insurance</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Doncaster</td></tr><tr><td>cost $ Mil</td><td>$21.0</td></tr><tr><td>Strain of ransomware</td><td>Vice-Society</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 46.4575, lng: 6.3317 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Sharafi Group Investments</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Arab Emirates</td></tr><tr><td>State/City</td><td>Dubai</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>140</td></tr></table>',
		location: { lat: 25.2697, lng: 55.3094 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td> Fujifilm</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.6839, lng: 139.7744 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>iConstituent</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Lucky Star Casinos </td></tr><tr><td>Sector</td><td>Entertainment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>El Reno, Oklahoma</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.543, lng: -97.966 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Whitehouse ISD</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Whitehouse, Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.2222, lng: -95.2217 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>AQUALUNG</td></tr><tr><td>Sector</td><td>Sports/Sports Equipment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>800</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Positive Promotions, Inc.</td></tr><tr><td>Sector</td><td>Entertainment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Tucson,Arizona</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>0.13</td></tr></table>',
		location: { lat: 32.1545, lng: -110.8782 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Steamship Authority</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Woods Hole, Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Greenwood Fabricating &amp; Plating</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Greenwood, South Carolina</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>10</td></tr></table>',
		location: { lat: 39.6019, lng: -86.1073 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Cox Media Group(CMG)</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Atlanta, Georgia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.7627, lng: -84.4224 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Des Moines Area Community College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Iowa</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.5725, lng: -93.6105 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Furniture Village</td></tr><tr><td>Sector</td><td>Home Utility/Appliance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Berkshire</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.401, lng: -1.323 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Town of Freeport</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Lancaster Independent School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Lancaster, Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0421, lng: -76.3012 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Edward Don</td></tr><tr><td>Sector</td><td>Home Utility/Appliance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Chicago</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Sol Oriens</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Albuquerque</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.1053, lng: -106.6464 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Altus</td></tr><tr><td>Sector</td><td>Real Estate</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Toronto</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7417, lng: -79.3733 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>SAC Wireless</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Chicago</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>St. Joseph’s/Candler Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Savannah,Georgia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.0281, lng: -81.1784 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Judson ISD</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Live Oak,Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.986, lng: -121.9804 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Grupo Fleury</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sao Paulo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>CarePointe ENT</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Merrillville, Indiana</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.4728, lng: -87.3197 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>University Medical Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Baltimore, Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Harris Federation</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Croydon, London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0911, lng: -74.8975 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Booneville School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Booneville, Mississippi</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
	 	location: { lat: 34.6643, lng: -88.5684 },
	 	month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Aramco</td></tr><tr><td>Sector</td><td>Oil and Gas</td></tr><tr><td>Country</td><td>Saudi Arabia</td></tr><tr><td>State/City</td><td>Dhahran</td></tr><tr><td>cost $ Mil</td><td>50</td></tr><tr><td>Strain of ransomware</td><td>Zerox296</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>1000</td></tr></table>',
		location: { lat: 26.2667, lng: 50.15 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Indoco Remedies</td></tr><tr><td>Sector</td><td>Pharmaceuticals/Research</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Mumbai</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>0.006</td></tr></table>',
		location: { lat: 19.0758, lng: 72.8775 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Wiregrass Electric Cooperative</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Hartford, Alabama</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.7661, lng: -72.6834 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Cloudstar</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Jacksonville, Florida</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 30.3322, lng: -81.6749 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Pionet</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Tel aviv</td></tr><tr><td>cost $ Mil</td><td>1.5</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.08, lng: 34.78 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Aoraki/Mount Cook (Department of Conservations search and rescue base)</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>New Zealand</td></tr><tr><td>State/City</td><td>Mount Cook </td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -41.2889, lng: 174.7772 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Limestone Sewage Treatment Plant</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Limestone, Florida</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.6773, lng: -70.2715 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Kaseya</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Miami,Florida</td></tr><tr><td>cost $ Mil</td><td>92</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.7839, lng: -80.2102 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Co-op</td></tr><tr><td>Sector</td><td>Supermarket</td></tr><tr><td>Country</td><td>Sweden</td></tr><tr><td>State/City</td><td>Stockholm</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 59.3294, lng: 18.0686 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>York Animal Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Sinclair Broadcast Group</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Cockeysville, Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.4793, lng: -76.63 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Comparis</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Switzerland</td></tr><tr><td>State/City</td><td>Zurich</td></tr><tr><td>cost $ Mil</td><td>4</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.3744, lng: 8.5411 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Joplin</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Joplin, Missouri</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.0758, lng: -94.5018 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Dia Sorin</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td> Saluggia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>200</td></tr></table>',
		location: { lat: 45.4669, lng: 9.19 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Clearfield</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Clearfield, Utah</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.103, lng: -112.0237 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Emma Willard School</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Troy, New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.5818, lng: -83.1457 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Corporación Nacional de Telecomunicación (CNT)</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>Ecuador</td></tr><tr><td>State/City</td><td>Quito</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Northern Trains</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.9651, lng: -76.7315 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Transnet SOC Ltd</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>South Africa</td></tr><tr><td>State/City</td><td>Braamfontein</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hellokitty/DeathKitty</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -29.1, lng: 26.2167 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Atalanta</td></tr><tr><td>Sector</td><td>Food/Beverages</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Jersey</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.2236, lng: -74.7641 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Accenture</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Dublin</td></tr><tr><td>cost $ Mil</td><td>50</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>6000</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Lazio Region in Italy</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Rome</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8931, lng: 12.4828 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Tokio Marine</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.6839, lng: 139.7744 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Zegna</td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Milan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>20.74</td></tr></table>',
		location: { lat: 45.4669, lng: 9.19 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Eskenazi Health</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Indianapolis Indiana</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.7771, lng: -86.1458 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>ERG</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Milan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.4669, lng: 9.19 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Gigabyte</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>New Taipei State/City</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>112</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Eye &amp; Retina Surgeons</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Singapore</td></tr><tr><td>State/City</td><td>Singapore</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 1.3, lng: 103.8 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Twin Falls County</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Twin Falls,Idaho</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.5645, lng: -114.4615 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Synology NAS&nbsp;</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>New Taipei State/City</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>eCh0raix</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Bar Ilan University</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Ramat Gan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.07, lng: 34.8235 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Memorial Health System</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Ohio</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.5425, lng: -80.0926 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazilian National Treasury</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sao Paulo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Bangkok Airways</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Thailand</td></tr><tr><td>State/City</td><td>Bangkok</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 13.75, lng: 100.5167 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Missouri Delta Medical Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Sikeston,Missouri</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.8865, lng: -89.587 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Boston Public Library</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Sault Ste. Marie, Ontario Police</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Ontario</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.0393, lng: -117.6064 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Barlow Respiratory Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Los Angeles, California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.1139, lng: -118.4068 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>United Health Centers</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Minnetonka, Minnesota</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Vice-Society</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 44.9322, lng: -93.4598 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Pottawatomie Co.</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Kansas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.6896, lng: -97.3442 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Weir Group</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Glasgow</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 55.8611, lng: -4.25 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Department of Justice and Constitutional Development</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>South Africa</td></tr><tr><td>State/City</td><td>Pretoria</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -25.7464, lng: 28.1881 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Manhasset Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Manhasset, New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.7884, lng: -73.6943 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td> Stor-a-file Limited</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Dagenham</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.4075, lng: -2.9919 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Howard University</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>JIPMER</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Puducherry</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 11.93, lng: 79.83 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Las Vegas Cancer Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Henderson, Nevada</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.0133, lng: -115.038 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Olympus</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.6839, lng: 139.7744 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>YMCA of Greater Charlotte</td></tr><tr><td>Sector</td><td>Commercial Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Charlotte, North Carolina</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.208, lng: -80.8304 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>TTEC</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Colorado</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -22.8378, lng: -51.9728 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Greensville County Public Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Emporia, Virginia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.4028, lng: -96.1924 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Tamil Nadu Public Department</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Chennai</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 13.0825, lng: 80.275 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Pottawatomie County</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Pottawatomie County, Kansas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.4676, lng: -97.5136 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>GSS</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072, lng: -0.1275 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Coos County Family Health Services</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Gorham, New Hampshire</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7034, lng: -70.4581 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>New Cooperative</td></tr><tr><td>Sector</td><td>Agriculture and Agricultural Products</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Iowa</td></tr><tr><td>cost $ Mil</td><td>$5.9</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1000</td></tr></table>',
		location: { lat: 41.5725, lng: -93.6105 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Marketron</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Idaho</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.6007, lng: -116.2312 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Giant Group/Giant Pay</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072, lng: -0.1275 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Crystal Valley</td></tr><tr><td>Sector</td><td>Agriculture and Agricultural Products</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Minnesota</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 44.9635, lng: -93.2678 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Lufkin ISF</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Lufkin, Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 31.3217, lng: -94.7277 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Stonington School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Stonington, Connecticut</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.3738, lng: -71.9034 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>Ronmor Holdings Real Estate</td></tr><tr><td>Sector</td><td>Real Estate</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Calgary</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.05, lng: -114.0667 },
		month: 'sept',
	},
	{
		title : '<table><tr><td>Company</td><td>JVCKenwood</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Yokohama</td></tr><tr><td>cost $ Mil</td><td>$7</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>2000</td></tr></table>',
		location: { lat: 35.4333, lng: 139.6333 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Valley Regional Transit</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Calgary</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.05, lng: -114.0667 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Washington Adventist University</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Takoma Park, Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.981, lng: -77.0028 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Marten Transport</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Mondovi, Wisconsin</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.0642, lng: -87.9673 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Allen ISD</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Allen, Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Dark Overlord</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.1088, lng: -96.6735 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Johnson Memorial</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington, D.C.</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Sandhills Global</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Lincoln, Nebraska</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.809, lng: -96.6788 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Ferrara Candy</td></tr><tr><td>Sector</td><td>Food/Beverages</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Planned Parenthood’s Los Angeles clinics</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Los Angeles</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.1139, lng: -118.4068 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Banco Pichincha</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Ecuador</td></tr><tr><td>State/City</td><td>Quito</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ronggolawe/Hotarus Corp</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Hillel Yaffe Medical Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Hadera</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Black Shadow</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.45, lng: 34.9167 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>9 Israeli Hospitals</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Tel Aviv</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.0853, lng: 34.7818 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Sinclair Broadcast Group</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Hunt Valley, Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Kemptville District Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td></td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.0393, lng: -117.6064 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Papua New Guineas Department of Finances Integrated Financial Management System (IFMS)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Papua New Guinea</td></tr><tr><td>State/City</td><td>Port Moresby</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -9.4789, lng: 147.1494 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Eberspächer Group </td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Esslingen am Neckar</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.445, lng: 8.6911 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>School District of Janesville</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Janesville, Wisconsin</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.6855, lng: -89.0136 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Toronto Transit Commission (TTC)</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Toronto</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7417, lng: -79.3733 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>UK Labour Party data manager supplier</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072, lng: -0.1275 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Newfoundland Health Care System</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>St. Johns, Newfoundland and Labrador</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.4817, lng: -52.7971 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Tokushima Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokushima Prefecture</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.0667, lng: 134.55 },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Swire Pacific Offshore (SPO)</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Singapore</td></tr><tr><td>State/City</td><td>Singapore</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 1.3, lng: 103.8 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Correos Express</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Spain</td></tr><tr><td>State/City</td><td>Madrid</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.4167, lng: -3.7167 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Volvo</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Warwick</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Snatch</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.7062, lng: -71.4334 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Cyberserve</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Tel Aviv</td></tr><tr><td>cost $ Mil</td><td>$1.00</td></tr><tr><td>Strain of ransomware</td><td>Pay2Key</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.08, lng: 34.78 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Electronic warfare associates</td></tr><tr><td>Sector</td><td>Defense Contractor</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Virginia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.5169, lng: -92.5128 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Delta-Montrose Electric Association (DMEA)</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Montrose, Colorado</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.469, lng: -107.859 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazils Court System</td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sau Paulo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>MediaMarkt</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Munich</td></tr><tr><td>cost $ Mil</td><td>$240.0</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.1375, lng: 11.575 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Mediatixx</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Eltville am Rhein</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.5947, lng: 7.6108 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Kisters AG</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Aachen</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 50.7762, lng: 6.0838 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Frontier Strain of ransomware</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Melbourne</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -37.8136, lng: 144.9631 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Supernus Pharmaceuticals</td></tr><tr><td>Sector</td><td>Pharmaceuticals/Research</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Vestas</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Denmark</td></tr><tr><td>State/City</td><td>Aarhus</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 56.1572, lng: 10.2107 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Lewis and CLark Community College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Godfrey, Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9577, lng: -90.2156 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Butler County Community College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Butler, Pennsylvania</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.8616, lng: -79.8962 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>CS Energy</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Brisbane</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -27.4678, lng: 153.0281 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Conseil des écoles publiques de l’Est de l’Ontario (School District)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Ottawa</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.4247, lng: -75.695 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Moncler Group </td></tr><tr><td>Sector</td><td>Luxury/Fashion</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Monestier-de-Clermont</td></tr><tr><td>cost $ Mil</td><td>$3</td></tr><tr><td>Strain of ransomware</td><td>ALPHV/BlackCat</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.8333, lng: 14.25 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Oahu Transit Services</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Honolulu, Hawai</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 21.3294, lng: -157.846 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Bank Indonesia</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Indonesia</td></tr><tr><td>State/City</td><td>Central Jakarta</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -6.2146, lng: 106.8451 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Pembroke Pines</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Pembroke Pines, Florida</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 26.0128, lng: -80.3382 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Nordic Choice Hotels</td></tr><tr><td>Sector</td><td>Commercial Facilities</td></tr><tr><td>Country</td><td>Scandinavia</td></tr><tr><td>State/City</td><td>Oslo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 59.9111, lng: 10.7528 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Riverhead Central School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Suffolk County, New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Maryland Department of Health website</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Baltimore</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Abiom</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Denmark</td></tr><tr><td>State/City</td><td>Wijchen</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.8067, lng: 5.7211 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>SPAR</td></tr><tr><td>Sector</td><td>Supermarket</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072, lng: -0.1275 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Pellissippi State Community College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Hardin Valley, Tennessee</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.1715, lng: -86.7843 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Saskatoon John Diefenbaker International Airport</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Saskatoon</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.1333, lng: -106.6833 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Hellmann Worldwide</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Osnabrück</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.2789, lng: 8.0431 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazilian Ministry of Health</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Federal District (Brazil)</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Lapsus$</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Virginias Division of Legislative Automated Systems (DLAS)</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Richmond, Virginia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.5295, lng: -77.4756 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Kronos</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Superior Plus</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>North America</td></tr><tr><td>State/City</td><td>Toronto</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7417, lng: -79.3733 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>McMenamins </td></tr><tr><td>Sector</td><td>Alcohol/Beverages</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Coombe Women and Infants University Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Ireland</td></tr><tr><td>State/City</td><td>Dublin</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Inetum</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Poland</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>ALPHV/BlackCat</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>CompuGroup Medical</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Arizona</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.5722, lng: -112.0891 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Moncler</td></tr><tr><td>Sector</td><td>Commercial Facilities</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Monestier-de-Clermont</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>ALPHV/BlackCat</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.8333, lng: 14.25 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Crawford County</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Crawford County, Pennsylvania</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.7627, lng: -84.4224 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>RR Donnelly</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Chicago</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>2.5</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Shutterfly</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Redwood State/City, California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.5026, lng: -122.2252 },
		month: 'dec',
	}

];
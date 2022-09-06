
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<table><tr><td>Company</td><td>Asteelflash</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>Ransom($ Mil)</td><td>$24.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>75</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Stanford Medicine</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>J&amp;B Importers</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Technological University Dublin (TU Dublin)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Ireland</td></tr><tr><td>State/City</td><td>Dublin</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Houston Rockets NBA Team</td></tr><tr><td>Sector</td><td>Sports/Sports Equipment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Houston</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Babuk Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 29.7863, lng: -95.3889 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Washington DC Metropolitan Police Department</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington, D.C.</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Babuk Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Santa Clara Valley Transportation Authority</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Santa Clara County, California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.1139, lng: -118.4068 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Merseyrail (Rail network)</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Liverpool State/City Region</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.4075, lng: -2.9919 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Mount Desert Sewage Treatment Plant</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Mount Desert, Maine</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.6773, lng: -70.2715 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Broward County Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Fort Lauderdale</td></tr><tr><td>Ransom($ Mil)</td><td>$40.0</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 26.1412, lng: -80.1464 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Lawrence</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Lawrence, Kansas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.7003, lng: -71.1626 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Wrest Point and Launceston Country Club </td></tr><tr><td>Sector</td><td>Entertainment</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Launceston, Tasmania</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -41.4419, lng: 147.145 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>National College of Ireland (NCI)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Ireland</td></tr><tr><td>State/City</td><td>Dublin</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Consolidated High School District 230</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Orland Park, Illinois</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>10</td></tr></table>',
		location: { lat: 41.6074, lng: -87.8619 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Haverhill Public Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Haverhill</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>2.5</td></tr></table>',
		location: { lat: 42.7838, lng: -71.0871 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Hoya Vision Care US/Optical Labs</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>AstroLocker Team</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Reproductive Biology Associates (RBA)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Atlanta</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.7627, lng: -84.4224 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Bakker Logistiek</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Zeewolde</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hades/Hafnium</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.3333, lng: 5.5167 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Office of the Attorney General</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington DC</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Logansport Community School Corporation (Indiana)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Logansport, Indiana</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.7472, lng: -86.3519 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Logansport Community School Corporation (Indiana)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Logansport, Indiana</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.7472, lng: -86.3519 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>SmileDirect</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Nashville</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.1715, lng: -86.7843 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>NBA</td></tr><tr><td>Sector</td><td>Sports/Sports Equipment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Babuk Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>PracticeMax</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Scottsdale, Arizona</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.6872, lng: -111.8651 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Presque Isle Police Department</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Presque Isle, Maine</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 46.6868, lng: -67.9874 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Quanta Computer</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>Taipei</td></tr><tr><td>Ransom($ Mil)</td><td>$50.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Eduro</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Utah</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>AstroLocker Team</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>40</td></tr></table>',
		location: { lat: 39.419220, lng: -111.950684 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>UnitingCare</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Brisbane</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -27.4678, lng: 153.0281 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Metropolitan Police Department</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Babuk Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>250</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Mandan, Hidatsa, and Arikara Nation tribes</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Town, North Dakota</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.1918, lng:  -73.1953 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazils Tribunal de Justiça do Estado do Rio Grande do Sul</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Porto Alegre</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -30.0328, lng: -51.23 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Navnit Group</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Mumbai</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>500</td></tr></table>',
		location: { lat: 19.0758, lng: 72.8775 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Pezzuto  Group</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Castromediano LE</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>100</td></tr></table>',
		location: { lat: 41.8931, lng: 12.4828 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazils Rio Grande do Sul court system</td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sau Paulo</td></tr><tr><td>Ransom($ Mil)</td><td>$5.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.4669, lng: 9.19 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Resort Municipality of Whistler (RMOW)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Whistler, Vancouver</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.8333, lng: 14.25 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Veritas Logistics</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Lod, Lydda</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 31.95, lng: 34.9 },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Upstox</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>New Delhi</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 28.6139, lng: 77.209 },
		month: 'april',
	},

];
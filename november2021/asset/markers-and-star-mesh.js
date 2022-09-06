
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<table><tr><td>Company</td><td>Swire Pacific Offshore (SPO)</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Singapore</td></tr><tr><td>State/City</td><td>Singapore</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 1.3, lng: 103.8 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Correos Express</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Spain</td></tr><tr><td>State/City</td><td>Madrid</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.4167, lng: -3.7167 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Volvo</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Warwick</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Snatch</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.7062, lng: -71.4334 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Cyberserve</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Tel Aviv</td></tr><tr><td>Ransom($ Mil)</td><td>$1.00</td></tr><tr><td>Strain of ransomware</td><td>Pay2Key</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.08, lng: 34.78 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Electronic warfare associates</td></tr><tr><td>Sector</td><td>Defense Contractor</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Virginia</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.5169, lng: -92.5128 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Delta-Montrose Electric Association (DMEA)</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Montrose, Colorado</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.469, lng: -107.859 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazils Court System</td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sau Paulo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>MediaMarkt</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Munich</td></tr><tr><td>Ransom($ Mil)</td><td>$240.0</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.1375, lng: 11.575 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Mediatixx</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Eltville am Rhein</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.5947, lng: 7.6108 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Kisters AG</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Aachen</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 50.7762, lng: 6.0838 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Frontier Strain of ransomware</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Melbourne</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -37.8136, lng: 144.9631 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Supernus Pharmaceuticals</td></tr><tr><td>Sector</td><td>Pharmaceuticals/Research</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Maryland</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Vestas</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Denmark</td></tr><tr><td>State/City</td><td>Aarhus</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 56.1572, lng: 10.2107 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Lewis and CLark Community College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Godfrey, Illinois</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9577, lng: -90.2156 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Butler County Community College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Butler, Pennsylvania</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.8616, lng: -79.8962 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>CS Energy</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Brisbane</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -27.4678, lng: 153.0281 },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Conseil des écoles publiques de l’Est de l’Ontario (School District)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Ottawa</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.4247, lng: -75.695 },
		month: 'nov',
	},

];
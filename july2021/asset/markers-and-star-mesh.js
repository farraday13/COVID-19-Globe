
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<table><tr><td>Company</td><td>Aramco</td></tr><tr><td>Sector</td><td>Oil and Gas</td></tr><tr><td>Country</td><td>Saudi Arabia</td></tr><tr><td>State/City</td><td>Dhahran</td></tr><tr><td>Ransom($ Mil)</td><td>50</td></tr><tr><td>Strain of ransomware</td><td>Zerox296</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>1000</td></tr></table>',
		location: { lat: 26.2667, lng: 50.15 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Indoco Remedies</td></tr><tr><td>Sector</td><td>Pharmaceuticals/Research</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Mumbai</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>0.006</td></tr></table>',
		location: { lat: 19.0758, lng: 72.8775 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Wiregrass Electric Cooperative</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Hartford, Alabama</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.7661, lng: -72.6834 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Cloudstar</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Jacksonville, Florida</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 30.3322, lng: -81.6749 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Pionet</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Tel aviv</td></tr><tr><td>Ransom($ Mil)</td><td>1.5</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.08, lng: 34.78 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Aoraki/Mount Cook (Department of Conservations search and rescue base)</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>New Zealand</td></tr><tr><td>State/City</td><td>Mount Cook </td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -41.2889, lng: 174.7772 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Limestone Sewage Treatment Plant</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Limestone, Florida</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.6773, lng: -70.2715 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Kaseya</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Miami,Florida</td></tr><tr><td>Ransom($ Mil)</td><td>92</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.7839, lng: -80.2102 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Co-op</td></tr><tr><td>Sector</td><td>Supermarket</td></tr><tr><td>Country</td><td>Sweden</td></tr><tr><td>State/City</td><td>Stockholm</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 59.3294, lng: 18.0686 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>York Animal Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Sinclair Broadcast Group</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Cockeysville, Maryland</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.4793, lng: -76.63 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Comparis</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Switzerland</td></tr><tr><td>State/City</td><td>Zurich</td></tr><tr><td>Ransom($ Mil)</td><td>4</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.3744, lng: 8.5411 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Joplin</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Joplin, Missouri</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.0758, lng: -94.5018 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Dia Sorin</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td> Saluggia</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>200</td></tr></table>',
		location: { lat: 45.4669, lng: 9.19 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Clearfield</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Clearfield, Utah</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.103, lng: -112.0237 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Emma Willard School</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Troy, New York</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.5818, lng: -83.1457 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Corporación Nacional de Telecomunicación (CNT)</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>Ecuador</td></tr><tr><td>State/City</td><td>Quito</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Northern Trains</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>York</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.9651, lng: -76.7315 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Transnet SOC Ltd</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>South Africa</td></tr><tr><td>State/City</td><td>Braamfontein</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hellokitty/DeathKitty</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -29.1, lng: 26.2167 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Atalanta</td></tr><tr><td>Sector</td><td>Food/Beverages</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Jersey</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.2236, lng: -74.7641 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Accenture</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Dublin</td></tr><tr><td>Ransom($ Mil)</td><td>50</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>6000</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Lazio Region in Italy</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Rome</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8931, lng: 12.4828 },
		month: 'july',
	},

];
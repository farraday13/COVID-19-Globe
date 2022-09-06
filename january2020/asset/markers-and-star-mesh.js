
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [

	{
		title : '<table><tr><td>Company</td><td>Artech Information Systems</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Jersey</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>0.337</td></tr></table>',
		location: { lat: 40.4173, lng: -74.7641 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Travelex</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Peterborough</td></tr><tr><td>Ransom($ Mil)</td><td>$6.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>5</td></tr></table>',
		location: { lat: 52.5725, lng: -0.2431 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Dairy Farm Group</td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>China</td></tr><tr><td>State/City</td><td>Hong Kong</td></tr><tr><td>Ransom($ Mil)</td><td>$30.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 22.3069, lng: 114.1831 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Town of Colonie</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>Ransom($ Mil)</td><td>$4.0</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943 , lng: -73.9249  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Potsdam</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Brandenburg</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.4117 , lng: 12.5561  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Gedia Automotive Group</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>North Rhine Westphalia&nbsp;</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>50</td></tr></table>',
		location: { lat: 51.4833 , lng: 7.2167  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Palfinger</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Austria</td></tr><tr><td>State/City</td><td>Salzburg</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.7972 , lng: 13.0477  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Bouygues</td></tr><tr><td>Sector</td><td>Construction</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1000000</td></tr></table>',
		location: { lat: 48.8566 , lng: 2.3522  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Temple Har Shalom</td></tr><tr><td>Sector</td><td>Charity/Social Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Warren</td></tr><tr><td>Ransom($ Mil)</td><td>$0.50</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.4934 , lng: -83.027  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Albany International Airport</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943 , lng: -73.9249  },
		month: 'jan',	
	},

];

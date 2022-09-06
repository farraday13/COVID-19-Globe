
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<table><tr><td>Company</td><td>Fisher and Paykel Appliances</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>New Zealand</td></tr><tr><td>State/City</td><td>East Tamaki</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -36.85  , lng: 174.7833  },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>LG Electronics</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>South Korea</td></tr><tr><td>State/City</td><td>Seoul</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.56  , lng: 126.99   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Mitsubishi</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.658581  , lng: 139.745438   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>DMI</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Maryland</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051  , lng: -76.6144   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Florence</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Alabama</td></tr><tr><td>Ransom($ Mil)</td><td>$3.0</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.5277  , lng: -86.7987   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Collabera</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Jersey</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.2236  , lng: -74.7641   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Enel</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Rome</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Snake</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8931  , lng: 12.4828  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Honda</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Snake</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.6839  , lng: 139.7744  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Columbia College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373  , lng: -87.6862   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Xerox</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Connecticut</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>100</td></tr></table>',
		location: { lat: 41.1918  , lng: -73.1953   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Lion</td></tr><tr><td>Sector</td><td>Alcohol/Beverages</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Brisbane</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865  , lng: 151.2094  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Muskingum Valley Health Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Ohio</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.5425  , lng: -80.0926   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>ST Engineering Aerospace</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Singapore</td></tr><tr><td>State/City</td><td>Singapore</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1500</td></tr></table>',
		location: { lat: 1.3  , lng: 103.8  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>UC San Francisco</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Oakland</td></tr><tr><td>Ransom($ Mil)</td><td>$1.40</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.7903  , lng: -122.2165   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Vard</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Norway</td></tr><tr><td>State/City</td><td>Ålesund</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 62.4723  , lng: 6.1549   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Westech International</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Albuquerque</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.1053  , lng: -106.6464  },
		month: 'june',	
	},

];

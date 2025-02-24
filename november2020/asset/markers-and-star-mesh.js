
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<table><tr><td>Company</td><td>Campari Group</td></tr><tr><td>Sector</td><td>Alcohol/Beverages</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Milan</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.4669  , lng: 9.19   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Capcom</td></tr><tr><td>Sector</td><td>Strain of ransomware/Game Developers</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Osaka</td></tr><tr><td>Ransom($ Mil)</td><td>$11.0</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1000</td></tr></table>',
		location: { lat: 34.752  , lng: 135.4582   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>GEO Group</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Florida</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 27.994402  , lng: -81.760254   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazilian Superior Electoral Court</td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sau Paulo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504  , lng: -46.6339   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Compal</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>Taipei</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478  , lng: 121.5319   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Cencosud</td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047  , lng: -77.0163   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Americold</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Georgia</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.7627 , lng: -84.4224   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Advantech</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>China</td></tr><tr><td>State/City</td><td>Taiwan</td></tr><tr><td>Ransom($ Mil)</td><td>$14.0</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>3.03</td></tr></table>',
		location: { lat: 25.0478 , lng: 121.5319   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Embraer</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>São Paulo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504  , lng: -46.6339   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Endemol Shine</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Amsterdam</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.3667  , lng: 4.8833   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Delaware County</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Pennsylvania</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0077  , lng: -75.1339  },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Foxconn</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>Taipei</td></tr><tr><td>Ransom($ Mil)</td><td>$34.0</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478  , lng: 121.5319   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Managed.com</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Nebraska</td></tr><tr><td>Ransom($ Mil)</td><td>$0.5</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943  , lng: -73.9249  },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Manchester United</td></tr><tr><td>Sector</td><td>Sports/Sports Equipment</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Manchester</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.4794  , lng: -2.2453  },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>SeaChange International</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188  , lng:  -71.0846  },
		month: 'nov',
	},

];

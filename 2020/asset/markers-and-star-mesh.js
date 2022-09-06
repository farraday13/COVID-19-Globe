
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [

	{
		title : '<table><tr><td>Company</td><td>Artech Information Systems</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Jersey</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>0.337</td></tr></table>',
		location: { lat: 40.4173, lng: -74.7641 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Travelex</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Peterborough</td></tr><tr><td>cost $ Mil</td><td>$6.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>5</td></tr></table>',
		location: { lat: 52.5725, lng: -0.2431 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Dairy Farm Group</td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>China</td></tr><tr><td>State/City</td><td>Hong Kong</td></tr><tr><td>cost $ Mil</td><td>$30.0</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 22.3069, lng: 114.1831 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Town of Colonie</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>$4.0</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943 , lng: -73.9249  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Potsdam</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Brandenburg</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.4117 , lng: 12.5561  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Gedia Automotive Group</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>North Rhine Westphalia&nbsp;</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>50</td></tr></table>',
		location: { lat: 51.4833 , lng: 7.2167  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Palfinger</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Austria</td></tr><tr><td>State/City</td><td>Salzburg</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.7972 , lng: 13.0477  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Bouygues</td></tr><tr><td>Sector</td><td>Construction</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1000000</td></tr></table>',
		location: { lat: 48.8566 , lng: 2.3522  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Temple Har Shalom</td></tr><tr><td>Sector</td><td>Charity/Social Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Warren</td></tr><tr><td>cost $ Mil</td><td>$0.50</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.4934 , lng: -83.027  },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Albany International Airport</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943 , lng: -73.9249  },
		month: 'jan',	
	},
	{
		title : '<table><tr><td>Company</td><td>Visser Precision</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Colorado</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.846127 , lng: -104.800644  },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Toll Group</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Sydney</td></tr><tr><td>cost $ Mil</td><td>$0.0</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865 , lng: 151.2094  },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>INA Group</td></tr><tr><td>Sector</td><td>Oil and Gas</td></tr><tr><td>Country</td><td>Croatia</td></tr><tr><td>State/City</td><td>Zagreb</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.8131 , lng: 15.9772  },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>ISS World</td></tr><tr><td>Sector</td><td>Commercial Facilities</td></tr><tr><td>Country</td><td>Denmark</td></tr><tr><td>State/City</td><td>Soborg</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 55.6805 , lng: 12.5615  },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>PEI Government</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Prince Edward Island</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>200</td></tr></table>',
		location: { lat: 46.2403 , lng: -63.1347  },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Redcar &amp; Cleveland Council</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Cleveland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.4767 , lng: -81.6804  },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Talman</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Sydney</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865 , lng: 151.2094  },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>Kenneth Cole </td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943 , lng: -73.9249  },
		month: 'feb',
	},
	{
		title : '<table><tr><td>Company</td><td>LTI Power Systems</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Ohio</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.5425 , lng: -80.0926  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>Epiq Global</td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943 , lng: -73.9249  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>Kimchuk</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Connecticut</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.1918 , lng: -73.1953  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>CPI</td></tr><tr><td>Sector</td><td>Defense Contractor</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>$5.0</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969 , lng: -76.4949  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>Evraz</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072 , lng: -0.1275  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>ExecuPharm</td></tr><tr><td>Sector</td><td>Pharmaceuticals/Research</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Pennslyvania </td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0077 , lng: -75.1339  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>Brooks International</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Florida</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>12</td></tr></table>',
		location: { lat: 27.994402 , lng: -81.760254  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>Finastra</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072 , lng: -0.1275  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>Hammersmith Medicines Research</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072 , lng: -0.1275  },
		month: 'march',
	},
	{
		title : '<table><tr><td>Company</td><td>Magellan Health</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Arizona</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.5722 , lng: -112.0891  },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>EDP</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Portugal</td></tr><tr><td>State/City</td><td>Lisbon</td></tr><tr><td>cost $ Mil</td><td>$10.0</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>10000</td></tr></table>',
		location: { lat: 38.708 , lng: -9.139  },
		month: 'april',
	},
	{
		title : '<table><tr><td>Company</td><td>Cognizant</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Jersey</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.2236 , lng: -74.7641 },
		month: 'april',		
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Torrance</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>$6.8</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>200</td></tr></table>',
		location: { lat: 38.2969 , lng: -76.4949 },
		month: 'april',	
	},
	{
		title : '<table><tr><td>Company</td><td>Blackbaud</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>South Carolina</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Pay2Key</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.8153  , lng: -79.9628  },
		month: 'may',	
	},
	{
		title : '<table><tr><td>Company</td><td>Toll Group</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Sydney</td></tr><tr><td>cost $ Mil</td><td>$0.0</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865  , lng: 151.2094  },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Fresenius Medical Care</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Bad Homberg</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Snake</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.55  , lng: 10    },
		month: 'may',	
	},
	{
		title : '<table><tr><td>Company</td><td>Grubman Shire Meiselas &amp; Sacks </td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>$42</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>756</td></tr></table>',
		location: { lat: 40.6943  , lng: -73.9249   },
		month: 'may',	
	},
	{
		title : '<table><tr><td>Company</td><td>Texas Office of Court Administration (OCA)</td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936  , lng: -96.7662   },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Elexon</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072  , lng: -0.1275   },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Texas Department of Transportation(TxDOT)</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936  , lng: -96.7662   },
		month: 'may',	
	},
	{
		title : '<table><tr><td>Company</td><td>Michigan State University</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Michigan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3834  , lng: -83.1024   },
		month: 'may',	
	},
	{
		title : '<table><tr><td>Company</td><td>Conduent</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Jersey</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>1</td></tr></table>',
		location: { lat: 40.2236  , lng: -74.7641   },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>NAFO</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Nova Scotia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 44.6475  , lng: -63.5906  },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Ruhr University</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Bochum</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.4833  , lng: 7.2167  },
		month: 'may',	
	},
	{
		title : '<table><tr><td>Company</td><td>Stadler</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Switzerland</td></tr><tr><td>State/City</td><td>Bussnang</td></tr><tr><td>cost $ Mil</td><td>$6.00</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.3744  , lng: 8.5411   },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Fisher and Paykel Appliances</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>New Zealand</td></tr><tr><td>State/City</td><td>East Tamaki</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -36.85  , lng: 174.7833  },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>LG Electronics</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>South Korea</td></tr><tr><td>State/City</td><td>Seoul</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.56  , lng: 126.99   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Mitsubishi</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.658581  , lng: 139.745438   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>DMI</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051  , lng: -76.6144   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Florence</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Alabama</td></tr><tr><td>cost $ Mil</td><td>$3.0</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.5277  , lng: -86.7987   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Collabera</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New Jersey</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.2236  , lng: -74.7641   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Enel</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Rome</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Snake</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8931  , lng: 12.4828  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Honda</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Snake</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.6839  , lng: 139.7744  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Columbia College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373  , lng: -87.6862   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Xerox</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Connecticut</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>100</td></tr></table>',
		location: { lat: 41.1918  , lng: -73.1953   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Lion</td></tr><tr><td>Sector</td><td>Alcohol/Beverages</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Brisbane</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865  , lng: 151.2094  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Muskingum Valley Health Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Ohio</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.5425  , lng: -80.0926   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>ST Engineering Aerospace</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Singapore</td></tr><tr><td>State/City</td><td>Singapore</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1500</td></tr></table>',
		location: { lat: 1.3  , lng: 103.8  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>UC San Francisco</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Oakland</td></tr><tr><td>cost $ Mil</td><td>$1.40</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.7903  , lng: -122.2165   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Vard</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Norway</td></tr><tr><td>State/City</td><td>Ålesund</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 62.4723  , lng: 6.1549   },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Westech International</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Albuquerque</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.1053  , lng: -106.6464  },
		month: 'june',	
	},
	{
		title : '<table><tr><td>Company</td><td>Orange</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>339</td></tr></table>',
		location: { lat: 48.8239  , lng: 2.27   },
		month: 'july',	
	},
	{
		title : '<table><tr><td>Company</td><td>Garmin</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Kansas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.6896  , lng: -97.3442   },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Konica Minolta</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.6839  , lng: 139.7744  },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Cooke County</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936  , lng: -96.7662  },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>CWT</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Minnesota</td></tr><tr><td>cost $ Mil</td><td>$4.5</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>2000</td></tr></table>',
		location: { lat: 44.9635  , lng: -93.2678   },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Mattel</td></tr><tr><td>Sector</td><td>Home Utility/Appliance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Los Angeles </td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.1139  , lng: -118.276802  },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>The Dussmann Group</td></tr><tr><td>Sector</td><td>Facility Management</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Berlin</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>14</td></tr></table>',
		location: { lat: 52.5167 , lng: 13.3833   },
		month: 'july',
	},
	{
		title : '<table><tr><td>Company</td><td>Sheldon ISD </td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936  , lng: -96.7662   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>R1 RCM Inc.</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Utah</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.7777  , lng: -111.9306   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>University of Utah</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Utah</td></tr><tr><td>cost $ Mil</td><td>$4.5</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.7777 , lng: -111.9306   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>Canon</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943  , lng: -73.9249  },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Lafayette</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Colorado</td></tr><tr><td>cost $ Mil</td><td>$0.5</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.113014  , lng: -105.358887  },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>Carnival</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Panama</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 30.1995  , lng: -85.6004   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>Ma Labs</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969  , lng:  -76.4949   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>Brookfield Residential</td></tr><tr><td>Sector</td><td>Real Estate</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Calgary</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>200</td></tr></table>',
		location: { lat: 51.05 , lng: -114.0667   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>Newcastle University</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Newcastle upon Tyne</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 55.0077  , lng: -1.6578   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>Regis Healthcare</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Armadale</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 55.8978  , lng: -3.7047   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>Brown Forman </td></tr><tr><td>Sector</td><td>Alcohol/Beverages</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Kentucky</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>125</td></tr></table>',
		location: { lat: 38.1663  , lng: -85.6485   },
		month: 'aug',
	},
	{
		title : '<table><tr><td>Company</td><td>Haberdashers’ Monmouth Schools</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Monmouth</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 44.8505  , lng: -123.2283   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>SoftServe</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936  , lng:  -96.7662   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Argentinian Government(immigration)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>South America</td></tr><tr><td>State/City</td><td>Argentina</td></tr><tr><td>cost $ Mil</td><td>$4.0</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -34.5997  , lng: -58.3819   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Equinix</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969  , lng: -76.4949   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Development Bank of Seychelles</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Seychelles </td></tr><tr><td>State/City</td><td>Victoria</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.4283  , lng: -123.3647   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>K-Electric</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Pakistan</td></tr><tr><td>State/City</td><td>Karachi</td></tr><tr><td>cost $ Mil</td><td>$3.9</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>8.5</td></tr></table>',
		location: { lat: 24.86  , lng: 67.0011   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Dusseldorf University Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Düsseldorf</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.2311  , lng: 6.7724   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Banco Estado</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Chile</td></tr><tr><td>State/City</td><td>Santiago</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.45  , lng: -70.6667   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>District Court of Louisiana</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Louisiana</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 30.0687  , lng: -89.9288   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>IPG Photonics</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusets</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188  , lng: -71.0846   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>US Fertility</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Maryland</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051  , lng: -76.6144   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>University Hospital Düsseldorf (UKD)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Düsseldorf</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.2311  , lng: 6.7724  },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Anglicare</td></tr><tr><td>Sector</td><td>Charity/Social Services</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Sydney</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>17</td></tr></table>',
		location: { lat: -33.865  , lng: 151.2094   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Tyler Technologies</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936  , lng: -96.7662   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>GenRx Pharmacy&nbsp;</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Arizona</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.5722  , lng: -112.0891  },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Ardonagh Group</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.5072  , lng: -0.1275   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Cygilant</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Belfast</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NetWalker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 54.5964  , lng: -5.93   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>SK Hynix</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>South Korea</td></tr><tr><td>State/City</td><td>Icheon</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>11</td></tr></table>',
		location: { lat: 37.56  , lng: 126.99  },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>UHS</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>King of Prussia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ryuk</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0963  , lng: -75.382   },
		month: 'sep',
	},
	{
		title : '<table><tr><td>Company</td><td>Crytek</td></tr><tr><td>Sector</td><td>Strain of ransomware/Game Developers</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Frankfurt</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 50.1136  , lng: 8.6797   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Ubisoft</td></tr><tr><td>Sector</td><td>Strain of ransomware/Game Developers</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Saint-Mandé, Paris</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.8422  , lng: 2.4186   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Strain of ransomware AG</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Darmstadt</td></tr><tr><td>cost $ Mil</td><td>$23.0</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 49.8667  , lng: 8.65  },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>ERT</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Philadelphia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0077 , lng: -75.1339  },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Barnes and Noble</td></tr><tr><td>Sector</td><td>Academic publishing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943  , lng: -73.9249  },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Boyne Resorts</td></tr><tr><td>Sector</td><td>Commercial Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Michigan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>WastedLocker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3834  , lng: -83.1024   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Sopra Steria</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Maze</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.8566  , lng: 2.3522   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Yazoo County School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Mississippi</td></tr><tr><td>cost $ Mil</td><td>$3.0</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.3163  , lng: -90.2124   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Winters Independent School District (Texas)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.7936  , lng: -96.7662   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Press Trust of India</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>New Delhi</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 28.6139  , lng: 77.209   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Vastaamo</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Finland</td></tr><tr><td>State/City</td><td>Helsinki</td></tr><tr><td>cost $ Mil</td><td>$5.0</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>10</td></tr></table>',
		location: { lat: 60.1756  , lng: 24.9342  },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Dr.Reddys Laboratories</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>Hyderabad</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 17.3617  , lng: 78.4747   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Miltenyi Biotec</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Bergisch Gladbach</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>150</td></tr></table>',
		location: { lat: 50.9917  , lng: 7.1367   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>PTI</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>India</td></tr><tr><td>State/City</td><td>New Delhi</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 28.6139  , lng: 77.209  },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Steelcase</td></tr><tr><td>Sector</td><td>Home Utility/Appliance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Michigan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>WastedLocker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3834  , lng: -83.1024   },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>STM</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Montreal</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.5089 , lng: -73.5617  },
		month: 'oct',
	},
	{
		title : '<table><tr><td>Company</td><td>Campari Group</td></tr><tr><td>Sector</td><td>Alcohol/Beverages</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Milan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.4669  , lng: 9.19   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Capcom</td></tr><tr><td>Sector</td><td>Strain of ransomware/Game Developers</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Osaka</td></tr><tr><td>cost $ Mil</td><td>$11.0</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>1000</td></tr></table>',
		location: { lat: 34.752  , lng: 135.4582   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>GEO Group</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Florida</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 27.994402  , lng: -81.760254   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazilian Superior Electoral Court</td></tr><tr><td>Sector</td><td>Legal/Law Firm</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sau Paulo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504  , lng: -46.6339   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Compal</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>Taipei</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478  , lng: 121.5319   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Cencosud</td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047  , lng: -77.0163   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Americold</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Georgia</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.7627 , lng: -84.4224   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Advantech</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>China</td></tr><tr><td>State/City</td><td>Taiwan</td></tr><tr><td>cost $ Mil</td><td>$14.0</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>3.03</td></tr></table>',
		location: { lat: 25.0478 , lng: 121.5319   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Embraer</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>São Paulo</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504  , lng: -46.6339   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Endemol Shine</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Amsterdam</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.3667  , lng: 4.8833   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Delaware County</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Pennsylvania</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0077  , lng: -75.1339  },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Foxconn</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>Taipei</td></tr><tr><td>cost $ Mil</td><td>$34.0</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478  , lng: 121.5319   },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Managed.com</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Nebraska</td></tr><tr><td>cost $ Mil</td><td>$0.5</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943  , lng: -73.9249  },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Manchester United</td></tr><tr><td>Sector</td><td>Sports/Sports Equipment</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Manchester</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.4794  , lng: -2.2453  },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>SeaChange International</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188  , lng:  -71.0846  },
		month: 'nov',
	},
	{
		title : '<table><tr><td>Company</td><td>Brookfield Public Schools (Connecticut)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Connecticut</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.1918 , lng: -73.1953   },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Whirlpool</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Michigan</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Neflim</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3834  , lng: -83.1024   },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Accelion FTA</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969  , lng: -76.4949  },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>E-Land</td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>South Korea</td></tr><tr><td>State/City</td><td>Seoul</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 37.56  , lng: 126.99   },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Palos Community Consolidated School District 118 (Illinois)</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Illinois</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373  , lng: -87.6862  },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Habana Labs</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969  , lng: -76.4949   },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Trafford bin collection/Amey PLC</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Manchester</td></tr><tr><td>cost $ Mil</td><td>$2.0</td></tr><tr><td>Strain of ransomware</td><td>Mount Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>286</td></tr></table>',
		location: { lat: 53.4794  , lng: -2.2453   },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>SEPA</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>STIRLING</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>1.2</td></tr></table>',
		location: { lat: 56.116600  , lng: -3.936900   },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>QIMR Berghofer</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Brisbane</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -27.4678 , lng: 153.0281  },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>NY Airport Systems</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943  , lng: -73.9249  },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Randstad</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Netherlands</td></tr><tr><td>State/City</td><td>Diemen</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 52.3439  , lng: 4.9625  },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Shirbit Insurance</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Netanya</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Black Shadow</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.3328  , lng: 34.86   },
		month: 'Dec',
	},
	{
		title : '<table><tr><td>Company</td><td>Symrise</td></tr><tr><td>Sector</td><td>Luxury/Fashion</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Holzminden</td></tr><tr><td>cost $ Mil</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Clop</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>500</td></tr></table>',
		location: { lat: 51.8297  , lng: 9.4483   },
		month: 'Dec',
	}

];

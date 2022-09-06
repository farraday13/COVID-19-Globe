
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<table><tr><td>Company</td><td>Brenntag</td></tr><tr><td>Sector</td><td>Agriculture and Agricultural Products</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Berlin</td></tr><tr><td>Ransom($ Mil)</td><td>$4.0</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>150</td></tr></table>',
		location: { lat: 52.5167, lng: 13.3833 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Coastal Family Health Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Mississippi</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>506</td></tr></table>',
		location: { lat: 32.3163, lng: -90.2124 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Colonial Pipeline</td></tr><tr><td>Sector</td><td>Oil and Gas</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Alpharetta, Georgia</td></tr><tr><td>Ransom($ Mil)</td><td>$4.4</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.0704, lng: -84.2739 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Daihatsu Diesel Mfg. Co</td></tr><tr><td>Sector</td><td>Automobile Manufacturing/Rental</td></tr><tr><td>Country</td><td>Osaka</td></tr><tr><td>State/City</td><td>Japan</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.752, lng: 135.4582 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>GlobeMed</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Saudi Arabia</td></tr><tr><td>State/City</td><td>Evanston,Illinois</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>201</td></tr></table>',
		location: { lat: 42.0463, lng: -87.6942 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>OSF Healthcare</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Peoria, Illinois</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>112</td></tr></table>',
		location: { lat: 40.752, lng: -89.6153 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Scripps Health</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Gary</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Gary,Indiana</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.5906, lng: -87.3472 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Toshiba Tec</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>London</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.658581, lng: 139.745438},
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Service NSW</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>New South Wales</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -33.865, lng: 151.2094 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>H&amp;M</td></tr><tr><td>Sector</td><td>Luxury/Fashion</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Tel aviv</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Networm</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>110</td></tr></table>',
		location: { lat: 32.08, lng: 34.78 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Bridgelux, Inc.</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Fremont,California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>1</td></tr></table>',
		location: { lat: 37.5265, lng: -121.9852 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Washoe Tribe</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Nevada</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>160</td></tr></table>',
		location: { lat: 37.8445, lng: -94.3492 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Gulfeagle Supply</td></tr><tr><td>Sector</td><td>Construction</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Harwich,Massachusetts</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>85</td></tr></table>',
		location: { lat: 51.934, lng: 1.266 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Tulsa</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Tulsa,Oklahama</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.1284, lng: -95.9042 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>One Call</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Walpole,Massachusetts</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Darkside/BlackMatter</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.1465, lng: -71.2555 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>ExaGrid</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Marlborough,Massachusetts</td></tr><tr><td>Ransom($ Mil)</td><td>$2.6</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>800</td></tr></table>',
		location: { lat: 51.42, lng: -1.73 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>CBN Logistic</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Turkey</td></tr><tr><td>State/City</td><td>Istanbul</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>90</td></tr></table>',
		location: { lat: 41.01, lng: 28.9603 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Ireland HSE</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Ireland</td></tr><tr><td>Ransom($ Mil)</td><td>$20.0</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>700</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>LineStar</td></tr><tr><td>Sector</td><td>Airport/Cruise/Travel Services</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Texas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>70</td></tr></table>',
		location: { lat: 32.7936, lng: -96.7662 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Solen A.S</td></tr><tr><td>Sector</td><td>Food/Beverages</td></tr><tr><td>Country</td><td>Turkey</td></tr><tr><td>State/City</td><td>Gaziantep</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>90</td></tr></table>',
		location: { lat: 37.0667, lng: 37.3833 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Irelands Health Service Executive (HSE)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Ireland</td></tr><tr><td>State/City</td><td>Ireland</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.3497, lng: -6.2603 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>AXA</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>3000</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Corporación Nacional de Telecomunicaciones, CNT EP</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>Ecuador</td></tr><tr><td>State/City</td><td>Pichincha</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>190</td></tr></table>',
		location: { lat: -0.22, lng: -78.5125 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Sierra College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Rocklin,California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.8075, lng: -121.2488 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Waikato District Health</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>New Zealand</td></tr><tr><td>State/City</td><td>Hamilton</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Zeppelin/Buran/VegaLocker</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.2942, lng: -64.7839 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Florida Heart Associates</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Fort Myers,Florida</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 26.6195, lng: -81.8303 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Langs Building Supplies</td></tr><tr><td>Sector</td><td>Critical Manufacturing</td></tr><tr><td>Country</td><td>Australia</td></tr><tr><td>State/City</td><td>Queensland</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Lorenz</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -27.4678, lng: 153.0281 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Desert Wells Family Medicine (Queen Creek Medical Center)</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Queen creek, Arizona</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.2386, lng: -111.6343 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Eastern Hancock Community School Corportation</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>North Charlottesville,Indiana</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.7335, lng: -76.0435 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Pacific Market Research (PMR)</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Renton,Washington</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 47.4784, lng: -122.1919 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>ADATA</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>New Taipei State/City</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Ragnar Locker</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>700</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>T.I.S Group</td></tr><tr><td>Sector</td><td>Academic publishing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>New York</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>102</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>Clover Park School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Washington</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>California State/City</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Bridgeport</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Bridgeport, Connecticut</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.1918, lng: -73.1953 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>JBS</td></tr><tr><td>Sector</td><td>Food/Beverages</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sao Paulo</td></tr><tr><td>Ransom($ Mil)</td><td>$11</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>WSSC Water</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Maryland</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>UF Health-The Villages Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Florida</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -34.1, lng: -56.2167 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>State/City of Rolle</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Switzerland</td></tr><tr><td>State/City</td><td>Canton of Vaud</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Vice-Society</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 46.4575, lng: 6.3317 },
		month: 'may',
	},
	{
		title : '<table><tr><td>Company</td><td>One Call Insurance</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>State/City</td><td>Doncaster</td></tr><tr><td>Ransom($ Mil)</td><td>$21.0</td></tr><tr><td>Strain of ransomware</td><td>Vice-Society</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 46.4575, lng: 6.3317 },
		month: 'may',
	},

];
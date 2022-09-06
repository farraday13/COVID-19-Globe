
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<table><tr><td>Company</td><td>Sharafi Group Investments</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>United Arab Emirates</td></tr><tr><td>City</td><td>Dubai</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>140</td></tr></table>',
		location: { lat: 25.2697, lng: 55.3094 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td> Fujifilm</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>City</td><td>Tokyo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.6839, lng: 139.7744 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>iConstituent</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Washington</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 38.9047, lng: -77.0163 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Lucky Star Casinos </td></tr><tr><td>Sector</td><td>Entertainment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>El Reno, Oklahoma</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.543, lng: -97.966 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Whitehouse ISD</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Whitehouse, Texas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.2222, lng: -95.2217 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>AQUALUNG</td></tr><tr><td>Sector</td><td>Sports/Sports Equipment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>800</td></tr></table>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Positive Promotions, Inc.</td></tr><tr><td>Sector</td><td>Entertainment</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Tucson,Arizona</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>0.13</td></tr></table>',
		location: { lat: 32.1545, lng: -110.8782 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Steamship Authority</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Woods Hole, Massachusetts</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Greenwood Fabricating &amp; Plating</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Greenwood, South Carolina</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Xing Locker</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>10</td></tr></table>',
		location: { lat: 39.6019, lng: -86.1073 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Cox Media Group(CMG)</td></tr><tr><td>Sector</td><td>Media/Marketing</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Atlanta, Georgia</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 33.7627, lng: -84.4224 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Des Moines Area Community College</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Iowa</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.5725, lng: -93.6105 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Furniture Village</td></tr><tr><td>Sector</td><td>Home Utility/Appliance</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>City</td><td>Berkshire</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 51.401, lng: -1.323 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Town of Freeport</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>New York</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Avaddon</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Lancaster Independent School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Lancaster, Texas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0421, lng: -76.3012 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Edward Don</td></tr><tr><td>Sector</td><td>Home Utility/Appliance</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Chicago</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Egregor</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Sol Oriens</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Albuquerque</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.1053, lng: -106.6464 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Altus</td></tr><tr><td>Sector</td><td>Real Estate</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>City</td><td>Toronto</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 43.7417, lng: -79.3733 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>SAC Wireless</td></tr><tr><td>Sector</td><td>Telecommunication</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Chicago</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.8373, lng: -87.6862 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>St. Joseph’s/Candler Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Savannah,Georgia</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.0281, lng: -81.1784 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Judson ISD</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Live Oak,Texas</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.986, lng: -121.9804 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Grupo Fleury</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>City</td><td>Sao Paulo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>CarePointe ENT</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Merrillville, Indiana</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 41.4728, lng: -87.3197 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>University Medical Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Baltimore, Maryland</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>REvil/Sodinokibi</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Harris Federation</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United Kingdom</td></tr><tr><td>City</td><td>Croydon, London</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Mespinoza/Pysa </td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.0911, lng: -74.8975 },
		month: 'june',
	},
	{
		title : '<table><tr><td>Company</td><td>Booneville School District</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>City</td><td>Booneville, Mississippi</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>DoppelPaymer/Grief</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
	 	location: { lat: 34.6643, lng: -88.5684 },
	 	month: 'june',
	},

];
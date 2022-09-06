
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [


	{
		title : '<table><tr><td>Company</td><td>Tokio Marine</td></tr><tr><td>Sector</td><td>Banking/Finance/Insurance</td></tr><tr><td>Country</td><td>Japan</td></tr><tr><td>State/City</td><td>Tokyo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 35.6839, lng: 139.7744 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Zegna</td></tr><tr><td>Sector</td><td>Retailer</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Milan</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>20.74</td></tr></table>',
		location: { lat: 45.4669, lng: 9.19 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Eskenazi Health</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Indianapolis Indiana</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 39.7771, lng: -86.1458 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>ERG</td></tr><tr><td>Sector</td><td>Nuclear Plants/Energy</td></tr><tr><td>Country</td><td>Italy</td></tr><tr><td>State/City</td><td>Milan</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 45.4669, lng: 9.19 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Gigabyte</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>New Taipei State/City</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>RansomExx/defray</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>112</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Eye &amp; Retina Surgeons</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>Singapore</td></tr><tr><td>State/City</td><td>Singapore</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 1.3, lng: 103.8 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Twin Falls County</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Twin Falls,Idaho</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.5645, lng: -114.4615 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Synology NAS&nbsp;</td></tr><tr><td>Sector</td><td>Information Technology</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>New Taipei State/City</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>eCh0raix</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Bar Ilan University</td></tr><tr><td>Sector</td><td>Education/Education Facilities</td></tr><tr><td>Country</td><td>Israel</td></tr><tr><td>State/City</td><td>Ramat Gan</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 32.07, lng: 34.8235 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Memorial Health System</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Ohio</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 40.5425, lng: -80.0926 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Brazilian National Treasury</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>Brazil</td></tr><tr><td>State/City</td><td>Sao Paulo</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: -23.5504, lng: -46.6339 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Bangkok Airways</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>Thailand</td></tr><tr><td>State/City</td><td>Bangkok</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 13.75, lng: 100.5167 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Missouri Delta Medical Center</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Sikeston,Missouri</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Hive</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 36.8865, lng: -89.587 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Boston Public Library</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Massachusetts</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 42.3188, lng: -71.0846 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Sault Ste. Marie, Ontario Police</td></tr><tr><td>Sector</td><td>Critical Infrastructure</td></tr><tr><td>Country</td><td>Canada</td></tr><tr><td>State/City</td><td>Ontario</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.0393, lng: -117.6064 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>Barlow Respiratory Hospital</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Los Angeles, California</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>NA</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 34.1139, lng: -118.4068 },
		month: 'august',
	},
	{
		title : '<table><tr><td>Company</td><td>United Health Centers</td></tr><tr><td>Sector</td><td>Healthcare/Public Health/Hospital</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Minnetonka, Minnesota</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Vice-Society</td></tr><tr><td>Paid</td><td></td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 44.9322, lng: -93.4598 },
		month: 'august',
	},

];
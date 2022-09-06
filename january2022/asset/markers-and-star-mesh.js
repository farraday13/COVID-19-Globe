
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [

	{
		title : '<table><tr><td>Company</td><td>Delta Electronics</td></tr><tr><td>Sector</td><td>Electronics</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>New Taipei State/City</td></tr><tr><td>Ransom($ Mil)</td><td>$15</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>Yes</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478, lng: 121.5319 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>France’s Ministry of Justice</td></tr><tr><td>Sector</td><td>Government/Government Facilities</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Paris</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>GmbH Group</td></tr><tr><td>Sector</td><td>Oil and Gas</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Munich</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>ALPHV/BlackCat</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.1375, lng: 11.575 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Mabanaft</td></tr><tr><td>Sector</td><td>Oil and Gas</td></tr><tr><td>Country</td><td>Germany</td></tr><tr><td>State/City</td><td>Hamburg</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>ALPHV/BlackCat</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 53.55, lng: 10 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>QNAP</td></tr><tr><td>Sector</td><td>Strain of ransomware/Game Developers</td></tr><tr><td>Country</td><td>Taiwan</td></tr><tr><td>State/City</td><td>New Taipei State/City</td></tr><tr><td>Ransom($ Mil)</td><td>$1.9</td></tr><tr><td>Strain of ransomware</td><td>Deadbolt</td></tr><tr><td>Paid</td><td>NA</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 25.0478, lng: 121.597366 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Thales Group</td></tr><tr><td>Sector</td><td>Defense Contractor</td></tr><tr><td>Country</td><td>France</td></tr><tr><td>State/City</td><td>Weybridge</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>LockBit 2.0</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 48.8566, lng: 2.3522 },
		month: 'jan',
	},
	{
		title : '<table><tr><td>Company</td><td>Minnesotas Bay &amp; Bay</td></tr><tr><td>Sector</td><td>Transportation/Logistics</td></tr><tr><td>Country</td><td>United States</td></tr><tr><td>State/City</td><td>Minnesota</td></tr><tr><td>Ransom($ Mil)</td><td>NA</td></tr><tr><td>Strain of ransomware</td><td>Conti/WizardSpider</td></tr><tr><td>Paid</td><td>No</td></tr><tr><td>Impact Size(GB)</td><td>NA</td></tr></table>',
		location: { lat: 44.9635, lng: -93.2678 },
		month: 'jan',
	}

];
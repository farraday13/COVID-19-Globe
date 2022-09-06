
// star mesh

star_mesh = 'o Star\nv 0.169 0.000 0.087\nv 0.442 0.000 -0.111\nv 0.104 0.000 -0.111\nv -0.000 0.000 -0.433\nv -0.104 0.000 -0.111\nv -0.443 0.000 -0.111\nv -0.169 0.000 0.087\nv -0.274 0.000 0.409\nv -0.000 0.000 0.210\nv 0.273 0.000 0.409\nv 0.115 0.104 0.070\nv 0.303 0.104 -0.065\nv 0.071 0.104 -0.065\nv -0.000 0.104 -0.286\nv -0.071 0.104 -0.065\nv -0.303 0.104 -0.065\nv -0.116 0.104 0.070\nv -0.187 0.104 0.290\nv -0.000 0.104 0.154\nv 0.187 0.104 0.290\nvn 0.00 -1.00 0.00\nvn 0.00 1.00 -0.00\nvn 0.00 0.99 -0.02\nvn 0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn 0.00 0.39 -0.91\nvn -0.87 0.39 -0.28\nvn -0.87 0.39 -0.28\nvn -0.53 0.39 0.74\nvn 0.87 0.39 -0.28\nvn -0.53 0.39 0.74\ns off\nf 8//1 1//1 9//1\nf 15//2 13//2 14//2\nf 17//2 15//2 16//2\nf 17//2 13//2 15//2\nf 17//2 12//2 13//2\nf 17//2 11//2 12//2\nf 18//2 11//2 17//2\nf 18//3 19//3 11//3\nf 19//2 20//2 11//2\nf 9//4 18//4 8//4\nf 1//5 20//5 10//5\nf 3//6 12//6 2//6\nf 7//7 18//7 17//7\nf 5//8 14//8 4//8\nf 5//6 16//6 15//6\nf 7//9 16//9 6//9\nf 1//4 12//4 11//4\nf 3//10 14//10 13//10\nf 9//11 20//11 19//11\nf 9//4 19//4 18//4\nf 1//5 11//5 20//5\nf 3//6 13//6 12//6\nf 7//7 8//7 18//7\nf 5//8 15//8 14//8\nf 5//6 6//6 16//6\nf 7//9 17//9 16//9\nf 1//4 2//4 12//4\nf 3//10 4//10 14//10\nf 9//11 10//11 20//11\n';


// marker data

markers = [

	{
		title : '<div> <table> <tr> <td>Company :</td><td>Wentworth Golf Club</td></tr><tr> <td>Sector :</td><td>Commercial Facilities</td></tr><tr> <td>Country :</td><td>United Kingdom</td></tr><tr> <td>State/City :</td><td>Surrey</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 51.399611, lng: -0.589527 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>DSC Logistics</td></tr><tr> <td>Sector :</td><td>Transportation/Logistics</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Illinois</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 41.8373, lng: -87.6862  },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Granite Wellness Centers</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>California</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Gastroenterology Consultants</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Nevada</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>Mespinoza/Pysa </td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 37.8445, lng: -94.3492 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Cochise Eye and Laser</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Arizona</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 33.5722, lng: -112.0891 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>State/City of Montmagne</td></tr><tr> <td>Sector :</td><td>Government/Government Facilities</td></tr><tr> <td>Country :</td><td>Canada</td></tr><tr> <td>State/City :</td><td>Montmagne</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 46.9833 , lng: -70.55 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>FatFace</td></tr><tr> <td>Sector :</td><td>Retailer</td></tr><tr> <td>Country :</td><td>Canada</td></tr><tr> <td>State/City :</td><td>HampShire</td></tr><tr> <td>Ransom($ Mil) :</td><td>$2.0</td></tr><tr> <td>Strain of ransomware :</td><td>Conti/WizardSpider</td></tr><tr> <td>Paid :</td><td>Yes</td></tr><tr> <td>Impact Size (GB) :</td><td>200</td></tr></table></div>',
		location: { lat: 42.1124, lng: -88.5122 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Iobit</td></tr><tr> <td>Sector :</td><td>Information Technology</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>California</td></tr><tr> <td>Ransom($ Mil) :</td><td>$0.1</td></tr><tr> <td>Strain of ransomware :</td><td>DeroHE</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 38.2969, lng: -76.4949 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Chwapi</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>Belgium</td></tr><tr> <td>State/City :</td><td>Tournai</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>BitLocker</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>12500</td></tr></table></div>',
		location: { lat: 50.6, lng: 3.3833 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Kroger</td></tr><tr> <td>Sector :</td><td>Supermarket</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Ohio</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>Clop</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 40.5425, lng: -80.0926 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>WestRock Company</td></tr><tr> <td>Sector :</td><td>Critical Manufacturing</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Georgia</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 33.7627, lng: -84.4224 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Georgetown County</td></tr><tr> <td>Sector :</td><td>Government/Government Facilities</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>South Carolina</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>No</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 32.8153, lng: -79.9628 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Crisp Regional Health Services</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>Maryland</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>No</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 39.3051, lng: -76.6144 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>Personal Touch Holding Corp.</td></tr><tr> <td>Sector :</td><td>Healthcare/Public Health/Hospital</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>New York</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div><div> <table> <tr> <td>Company :</td><td>Victor Central School District</td></tr><tr> <td>Sector :</td><td>Education/Education Facilities</td></tr><tr> <td>Country :</td><td>United States</td></tr><tr> <td>State/City :</td><td>New York</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>NA</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 40.6943, lng: -73.9249 },
		month: 'jan',
	},
	{
		title : '<div> <table> <tr> <td>Company :</td><td>UK Research and Innovation</td></tr><tr> <td>Sector :</td><td>Government/Government Facilities</td></tr><tr> <td>Country :</td><td>United Kingdom</td></tr><tr> <td>State/City :</td><td>Swindon</td></tr><tr> <td>Ransom($ Mil) :</td><td>NA</td></tr><tr> <td>Strain of ransomware :</td><td>NA</td></tr><tr> <td>Paid :</td><td>No</td></tr><tr> <td>Impact Size (GB) :</td><td>NA</td></tr></table></div>',
		location: { lat: 51.56, lng: -1.78 },
		month: 'jan',
	},

];
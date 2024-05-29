// //String Methods
// let name1='Vidya'
// console.log(name1.charAt(4));                           //a
// console.log(name1.endsWith('a'));                       //true
// console.log(name1.startsWith('k'));                     //false
// console.log(name1.length);                              //5
// console.log(name1[3]);                                  //y
// name1='dhanya';                                         //rename           
// console.log("name1:",name1);                            //name1: dhanya

// let boy1 = "Pramod";
// let boy2 = "Raj";
// let sentence = `${boy2} is a friend of ${boy1}`;      
// console.log(sentence);                                 //Raj is a friend of Pramod
// console.log(sentence.toUpperCase());                  //RAJ IS A FRIEND OF PRAMOD
// console.log(sentence.toLowerCase());                  //raj is a friend of pramod
// console.log(sentence.slice(1,10));                    //aj is a f
// console.log(sentence.slice(4));                      //is a friend of Pramod
// console.log(boy1.includes(boy2));


// let name2='Harray bhabu';
// let rename_name2=name2.replace('bhabu','bhai')
// console.log(rename_name2);                             //Harray bhai

// let n1='dhanya'
// let n2='Karkera'
// let n3=n1.concat(n2)
// console.log(n3);                       //dhanyaKarkera

// let num1='  Dhanyashree '
// console.log(num1.trim());              //remove whitespace

// let name_1='Dhanya'
// console.log(name_1[0]);       //D
// console.log(name_1[1]);       //h
// console.log(name_1[3]);       //n
// name_1['Dhanya']='Joyce';
// console.log(name_1);          //Joyce


// //Array Methods

// let n4=[2,4,6.,8,10];
// console.log(n4.toString());             //2,4,6,8,10

// let a=[6,8,8,9,4,87];
// console.log(a.join('--'));              //6--8--8--9--4--87

// let b=[8,80,64,35];
// console.log(b.pop());                   //[ 8, 80, 64 ]
// console.log(b);

// let c=[8,80,64,35];
// console.log(c.push(76));               //[ 8, 80, 64, 35, 76 ]
// console.log(c);

// let d=[6,9,6,98,45];
// d.shift()                   //remove the first element
// console.log(d);

// let e=[8,9,54,35,79];       
// e.unshift(45)               //add first element
// console.log(e);

// let f=[8,9,10,65,34,23]
// delete f[1]
// console.log(f);                //[ 8, <1 empty item>, 10, 65, 34, 23 ]

// let a1=[2,4,6,8]
// let a2=[10,12,16]
// let a3=[18,20,24]                      
// console.log(a1.concat(a2,a3));        // [  2,  4,  6,  8, 10,12, 16, 18, 20, 24]

// let g=[24,54,94,34,64]
// console.log(g.sort());                   // [ 24, 34, 54, 64, 94 ]

// let h=[21,45,86,92,13]
// console.log(h.sort());                      //[ 13, 21, 45, 86, 92 ]
// console.log(h.reverse());                   //[ 92, 86, 45, 21, 13 ]

//splice
const I=[21,34,67,86,32]
console.log(I.splice(2,1,23,24));  
/*
1-position to add
2-no of elements to remove
3-elements to be added
*/

//slice
const j=[78,31,52,86,30]
console.log(j.slice(1));                         //[ 31, 52, 86, 30 ]
console.log(j.slice(0,3));                       //[ 78, 31, 52 ]



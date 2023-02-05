	// let array=[8,9,2,5,4,5,6]
	// let b=[]
	// let j=0;
	// for(i=0;i<array.length;i++){
	// if(i!=0){
	// b[j++]=array[i];
	
	// }
	// }
	
	// console.log(b)
	
	
	
	//get even number from array using filter 
			// const fil=[1,2,3,4,5,6,7,8,9,10];
			// let array=fil.filter(function(filt){
			
			// return filt%2==0;
			
			// });
		
			// console.log(array);
			
			
			
			
			
			
			 // let add=['a','b','c','d','e','f','g','h','i','j','k','l','n','m','o','p','q','r','s','t','v','u','y','x','z'];
			 // let array=['a','f','g','h','i','k'];
			 // let store=[];
			  // for (i=0; i<add.length;i++){
			  
                // if (array.indexOf(add[i])!==-1)
				// {
				// store.push(i+1);
				// }
			  
			    // }
				// console.log(store)
				
				
			// using reduce adding method	
			// var a=[5.3, 3.4,3.4,2.4,4.3]	
			// var a=[1,2,3,4,5,6,7,,8,9]
			// var b=a.reduce(function (div,range){
			// return div-range;	
			// });
			// console.log(b)
			
			
			// madouls array meth0d
			// let a=[11,12,21,22,23,33,34,40,44]
			// let b=[];
			// let c=0
			// for (i=0;i<=a.length;i++){
			   // if(a[i]%11==0){
			   // b[c++]=a[i]
			   // }
			// }
			// console.log(b)
			
			
			
			
			
			// var a=[5,10,"ram",20,"bala",40,"anand"];
			// var b="";
			// var c=[];
			// var d=0;
			// for(i=0 ; i<a.length;i++){
			   // if (typeof (b)===typeof(a[i])){
			   
			   // c[d++]=a[i];
			   
			   // }
			// }
			// console.log(c);
			
			
			// var a=[2,8,5,9,14,66,3,22,1]
			// var d=[]
			// let j = 0;
			// for( i=0;i<a.length; i++){
			// if(a[i]>9){
			 // d[j++] = a[i];
			 
			  // }
			  
			// }
			// console.log(d);
			 
			 
			 // var a=[0,1,2,3,10,20,30]
			// a.sort()
			// console.log(a) sa7
			let student = {marish:[["tamil",70],["eng",50],["math",59],["sci",70],["soc",80]]}
			let avg = 0
			for(let i=0;i<student.marish.length;i++){
				avg += student.marish[i][1];
			}
			avg = avg/student.marish.length;
			console.log("Avarage mark = ",avg);
			if(avg >= 90){
				console.log("Grade = A");
			}
			else if(avg > 80){
				console.log("Grade = B");
			}
			else if(avg > 70){
				console.log("Grade = C");
			}
			else if(avg >= 60){
				console.log("Grade = D");
			}
			else if(avg < 60) {
				console.log("Grade = F");
			}
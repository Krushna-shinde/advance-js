// User Full Name
// Given an object user . Return the full name of the user.

// Example 1:
// Input:
// { "name":{ "firstName":"Almabetter", "lastName":"Courses" } }

// Output:
// Almabetter Courses
function fullName(user){

    return user.name.firstName+" "+user.name.lastName;
}
let user={ "name":{ "firstName":"Almabetter", "lastName":"Courses" } }
console.log(fullName(user));

// Nested Objects using map()
// Given an array user having multiple object . Return full name as Name along with the subject marks as Marks for each students as an array of objects.User and subject name will be passed as argument and subject name will be taken as input.

// user = [ { "firstName":"Raghu", "lastName":"Anand", "marks":{ "Maths":98, "Science":64, "Hindi":90 } }, { "firstName":"Ram", "lastName":"Singh", "marks":{ "Maths":99, "Science":72, "Hindi":94 } }, { "firstName":"Shayam", "lastName":"Sharma", "marks":{ "Maths":80, "Science":80, "Hindi":70 } } ]

// Example 1:
// Input:
// Maths

// Output:
// [ { Name: 'Raghu Anand', Marks: 98 }, { Name: 'Ram Singh', Marks: 99 }, { Name: 'Shayam Sharma', Marks: 80 } ]
function subjectMarks(user,subject){
  return user.map((item)=>{
    return{ 
      "Name": item.firstName+" "+item.lastName,
      "Marks":item.marks[subject]
    };
  });
}
function main() {
	let user = [
  {
    "firstName":"Raghu",
    "lastName":"Anand",
     "marks":{
      "Maths":98,
      "Science":64,
      "Hindi":90
    }
  },
   {
    "firstName":"Ram",
    "lastName":"Singh",
     "marks":{
      "Maths":99,
      "Science":72,
      "Hindi":94
    }
  },
   {
    "firstName":"Shayam",
    "lastName":"Sharma",
     "marks":{
      "Maths":80,
      "Science":80,
      "Hindi":70
    }
  }
]
let str=readLine();
console.log(subjectMarks(user,str));  
}

// Destructuring Syntax
// Hard
// Given an object below. Return the full name of user as Name along with maximum marks in subjects as Max marks and find total marks then divide it by given numbers. Input will be the number and passed as argument along with object.

// let user = [ { "firstName": "Raghu", "lastName": "Anand", "subjects": [ { "name":"Maths","marks":94}, { "name":"Science","marks":67}, { "name":"Hindi","marks":64} ] }, { "firstName": "Ram", "lastName": "Singh", "subjects": [ { "name":"Maths","marks":84}, { "name":"Science","marks":84}, { "name":"Hindi","marks":91} ] } ]

// Example 1:
// Input:
// 2

// Output:
// [ { Name: 'Raghu Anand', 'Total Marks': 112.5, 'Max marks': 94 }, { Name: 'Ram Singh', 'Total Marks': 129.5, 'Max marks': 91 } ]

function subjectMarks(user,num){
    return user.map((item)=>{
        let fullName= item.firstName+" "+item.lastName;
        let totalMarks=item.subjects.reduce((sum,obj)=>{
          return sum+obj.marks;
        },0);
        let maxMarks= Math.max.apply(Math, item.subjects.map(function(o) { 
          return o.marks; 
        })); 
      return{ 
        "Name":fullName,
        "Total Marks":totalMarks/num,
        "Max marks": maxMarks
      };
    });
  }
  
  function main() {
      let user = [
      {
          "firstName": "Raghu",
          "lastName": "Anand",
          "subjects": [
              { "name":"Maths","marks":94},
              { "name":"Science","marks":67},
              { "name":"Hindi","marks":64}
          ]
      },
      {
          "firstName": "Ram",
          "lastName": "Singh",
          "subjects": [
              { "name":"Maths","marks":84},
              { "name":"Science","marks":84},
              { "name":"Hindi","marks":91}
          ]
      }
  ]
      let n=parseInt(readLine());
      console.log(subjectMarks(user,n));
  }
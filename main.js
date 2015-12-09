import Customers from './Customers.js'
import newCustomers from './newCustomers.js'

function count (arr){
  let i = 0;
  while (arr[i] != undefined){
	  i++
  }
  return i
  
}

function getCustomersByGender(customers, gender){
	let genderPicked = []
	customers.forEach(function(customer){
		if (customer.sex === gender){
			genderPicked.push(customer)
		}
	})
	return genderPicked
}

let maleCustomers = getCustomersByGender(Customers, 'M');
let femaleCustomers = getCustomersByGender(Customers, 'F');


function anonCustomers(list){
	let anonList = []
	let newId = 1
	list.forEach(function(customer){
		delete customer.first_name;
		delete customer.last_name;
		customer._id = newId
		newId++
		anonList.push(customer)
	})
	return anonList
}

function generateCategoryList (list, preference){
	preference = preference.toLowerCase()
	let prefList = []
	list.forEach(function(user){
		var index = prefList.indexOf(user.preferences[preference])
		if (index === -1){
			prefList.push(user.preferences[preference])
			
		}
	})

	return prefList
}

function transformCustomers (list){
	
	function Customer (firstName, lastName, age, choices) {
		this.first_name = firstName;
		this.last_name = lastName;
		this.age = age;
		this.preferences = (function (choices){
			let prefObj = {}
			choices.forEach(function(choice){
				prefObj[choice.type] = choice.value;
			})
			return prefObj
		})(choices)			
	}
	
	var transformedCustomers = [];
	list.forEach(function(customer){
		var person = new Customer (customer.FirstName, customer.LastName, customer.Age, customer.Choices);
		transformedCustomers.push(person)
	})
	
	return transformedCustomers
	
}




// console.log(transformCustomers(newCustomers))

// console.log(generateCategoryList(Customers, "Protection"))
// console.log(anonCustomers(femaleCustomers))

// console.log(getCustomersByGender(Customers, 'M'))








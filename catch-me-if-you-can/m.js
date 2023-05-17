function sum(x, y){
    if (typeof num1=== 'number'&& typeof num2=== 'number') {
        return x + y;
    }else throw new Error ('Hey im broken!')
        
  }

  try{
    sum('1', '2')
  } catch (err) {
    console.log(err)
  }

var user = {username: "sam", password: "123abc"};

function login(username, password){
  if (username === "sam" && password === "123abc"){
    return console.log("login successful!")
  } else throw new Error ('password not accepted, please try again')
}

try {
    login('sam', '123abc')
} catch (err) {
    console.log(err)
}
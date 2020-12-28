function morningPerson() {
  let $greeting = document.getElementById("greeting");
  let time = new Date();
  let hour = time.getHours()
  let text = ""
  if( hour < 12){
    text = "Morning"
  }
  else if(hour >= 12 && hour < 18){
    text = "Afternoon"
  }
  else if(hour >= 18){
    text = "Night"
  }
  else{
    console.log(hour)
    text = "umm"
  }
  $greeting.innerHTML = `Good ${text} Preston`
}

function main(){
  morningPerson();
}

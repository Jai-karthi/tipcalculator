const  billinput = document.getElementById('billTotalInput')
const tipinput = document.getElementById('tipInput')
const numberofpeoplediv = document.getElementById('numberOfPeople')
const persontotaldiv = document.getElementById('perPersonTotal')

let numberofpeople = Number(numberofpeoplediv.innerText)

const calculateBill = () => {
 
  const bill = Number(billinput.value)
  const tippercent = Number(tipinput.value)/100
  const tipamount = bill * tippercent
  const total = tipamount + bill
  const perpersontotal = total /numberofpeople
  persontotaldiv.innerText = `Rs:${perpersontotal.toFixed(2)}`

}

const increasePeople = () => {
  numberofpeople += 1
  numberofpeoplediv.innerText = numberofpeople
  calculateBill()
}


const decreasePeople = () => {
  if (numberofpeople <= 1){
    return 
  }
  numberofpeople -=1
  numberofpeoplediv.innerText = numberofpeople
  calculateBill()
}


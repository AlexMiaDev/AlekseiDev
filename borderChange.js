const borderChange = document.getElementById('MyPhoto')

borderChange.addEventListener('mouseenter', () => {
    borderChange.style.border = '5px solid #f4cab1'; 
})

borderChange.addEventListener('mouseout', () =>{
    borderChange.style.border = '5px solid #646464'
})

// Suponiendo que tienes una función delUser definida así:
export function delUser(id){
    fetch('http://localhost:3000/users/' + id,{
        method: 'DELETE',
    })
 
}
  



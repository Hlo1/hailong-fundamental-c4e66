context = {
    data : null
}

const getData = async ()=>{
    let api = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    console.log(api)
    let data = await api.json()
    context.data = data.data
    console.log(context.datas)
}


const viewData = async ()=>{
    await getData()
    console.log(context.data)
    let root = document.getElementById("root")
    context.data.forEach((value,i) => {
    let html = `
    <div id='employee_salary-${i}'>
        <li> ID : ${value.id} </li>
        <li> Name : ${value.employee_name} </li>
        <li > Age : ${value.employee_age}</li>
        <li class="unview"> salary : ${value.employee_salary}
    </div>
    <br>`
    root.innerHTML += html
})
}

const showDetailInfo = async () => {
    await viewData()
    for(let i = 0; i < context.data.length ; i ++){
        let employeeinfo = document.getElementById(`employee_salary-${i}`)
        employeeinfo.addEventListener('mouseover', () => {
            console.log(employeeinfo.children[3])
            employeeinfo.children[3].classList.toggle('view')
        })
    }
}

showDetailInfo()


const routes = {
    '/login': {
        templateId: 'login'
    },
    '/dashboard': {
        templateId: 'dashboard'
    },
    '/credits': {
        templateId: 'credits'
    }
}
function updateRoute(){
    const path = window.location.pathname
    const route = routes[path]
    if(!route){
        return navigate('/login')
    }
    const template = document.getElementById(route.templateId)
    const view = template.content.cloneNode(true)
    const app = document.getElementById('app')
    app.innerHTML = ''
    app.appendChild(view)
}

function navigate(path){
    window.history.pushState({}, path, path)
    updateRoute()
}

function onLinkClick(event){
    event.preventDefault()
    navigate(event.target.href)
}

window.onpopstate = () => updateRoute()
updateRoute()

async function register(){
    const registerForm = document.getElementById('registerForm')
    const formData = new FormData(registerForm)
    const data = Object.fromEntries(formData)
    const jsonData = JSON.stringify(data)
    const result = await createAccount(jsonData)
    if(result.error){
        return console.log('An Error Occured', result.error);
    }
    console.log('Account Created!', result);
}
async function createAccount(account){
    try {
        const response = await fetch('//localhost:3000/api/accounts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: account
        })
        return await response.json()
    } catch (error){
        return{error: error.message || 'Unknown error'}
    }
    
}
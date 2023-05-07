let index
const addList=()=>{
    let li= document.createElement('li')
    let innerText= document.getElementById('addText').value
    if(innerText!==''&&innerText!==null){
        li.innerHTML= innerText
        const editButton= li.appendChild(document.createElement('button'))
        editButton.classList.add('border-solid', 'border-black','mx-1','p-1','border-2')
        const deleteButton= li.appendChild(document.createElement('button'))
        deleteButton.classList.add('border-solid', 'border-black', 'mx-1','p-1','border-2')
        editButton.innerHTML= 'edit'
        editButton.setAttribute('onclick',`editList(this)`)
        deleteButton.innerHTML='delete'
        console.log(li);
        deleteButton.setAttribute('onclick',`deleteList(this)`)
        document.getElementById('listContainer').appendChild(li)
        document.getElementById('addText').value=''
    }else{
        window.alert('empty todo not allowed')
    }
}
const deleteList=(ele)=>{
    let deleteParentElement=ele.parentNode
    console.log('deleting list',ele,deleteParentElement);
    deleteParentElement.remove()
}
const editList=(ele)=>{
    let editParentElement=ele.parentNode
    let editLiParentElement=editParentElement.parentNode
    index= Array.prototype.indexOf.call(editLiParentElement.children,editParentElement)
    console.log(index);
    document.getElementById('addText').value=editLiParentElement.children[index].firstChild.data
    console.log(editLiParentElement.children[index].firstChild.data);
    document.getElementById('edit').classList.remove('hide')
    document.getElementById('add').classList.add('hide')

}   
const editText=()=>{
    document.getElementById('listContainer').children[index].firstChild.data=document.getElementById('addText').value
    document.getElementById('addText').value=''
    document.getElementById('edit').classList.add('hide')
    document.getElementById('add').classList.remove('hide')
}

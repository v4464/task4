/*Make the 3rd element in the list have yellow background color.

2. Make all the elements in the list have bold font.*/

const listEle=document.getElementsByClassName('fruit')
for(let i=0;i<listEle.length;i++)
{
    listEle[i].style.fontWeight='bold';
}
listEle[2].style.backgroundColor='yellow';
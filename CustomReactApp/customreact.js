function customRender(reactElement,continer)
{
// const domElement=document.createElement(reactElement.type);
// domElement.innerHTML=reactElement.Children;
// domElement.setAttribute('href',reactElement.props.href);
// domElement.setAttribute('target',reactElement.props.target);
// continer.appendChild(domElement)



const domElement=document.createElement(reactElement.type);
domElement.innerHTML=reactElement.Children;
for (const prop in reactElement.props) {
   if(prop==='children')continue;
   domElement.setAttribute(prop,reactElement.props[prop])
}
continer.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://www.linkedin.com/in/rahul-gote-66148620b/',
        target:'_blank'
    },
    Children:'Click me to visit my LinkedIn Profile '
}


const maincontiner=document.getElementById('root');
customRender(reactElement,maincontiner);
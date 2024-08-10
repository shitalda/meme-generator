const generateBtn = document.querySelector('.generate')
const memeTitle = document.querySelector('.meme-title')
const memeImg = document.querySelector('.meme-img')
const authorOutput = document.querySelector('.author')

function getMeme(){
    fetch(' https://meme-api.com/gimme/wholesomememes')
    .then((res)=> res.json())
    .then((data)=>{
        const {author, title, url} = data
        memeTitle.innerText = title
        memeImg.src = url
        authorOutput.innerText =`Meme by : ${author}` 
        console.log(author, title, url);
    })
}
getMeme()
generateBtn.addEventListener('click',()=>{
    getMeme()
})
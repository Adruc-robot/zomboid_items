//initial variables
const sourceLoc = 'txtFiles/'
const dataHolder = []
let itemCount = 0
let domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
}

domReady(function() {
    main()    
    

})
async function getThings(path) {
    let theObject = await fetch(path)
    let theString = await theObject.text()
    return theString
}
async function main() {
    let folderString = await (await getThings(sourceLoc)).toLowerCase()
    let fileArray = folderString.substring(folderString.indexOf('href="/'), folderString.length).split('href="/')
    let attribList = ''
    for (let i = 0; i < fileArray.length; i++) {
        let el = fileArray[i]
        if (el.includes('.txt')) {
            let filePath = el.substring(el.indexOf(sourceLoc.toLowerCase()), el.indexOf('"'))
            let fileText = await getThings(filePath)
            let tempArr = fileText.split(/\s+item\s+/)
            if (tempArr.length > 1) {
                tempArr.forEach(item => {
                    //console.log(itemName)
                    //console.log(tmpAttrArr)
                    if (item.includes('=')) {
                        itemCount++
                        let itemName = item.substring(0,item.indexOf('{')).trim()
                        let itemHolder = document.createElement('div')
                        itemHolder.classList.add('item')
                        let itemNameHolder = document.createElement('span')
                        itemNameHolder.innerHTML = `<h3>${itemName}</h3>`
                        itemHolder.appendChild(itemNameHolder)
                        let itemAttribHolder = document.createElement('div')
                        let tempAttrArr = item.substring(item.indexOf('{')+1, item.indexOf('}')).trim().split(',')
                        tempAttrArr.forEach(attr => {
                            let things = attr.split('=')
                            if (things.length == 2) {
                                if (!things[0].includes('*/') && !things[0].includes('/*')) {
                                    let attribHolder = document.createElement('div')
                                    let attribNameHolder = document.createElement('span')
                                    attribNameHolder.innerText = `${things[0].trim()}: `
                                    attribNameHolder.classList.add('keyPair')
                                    attribHolder.classList.add(things[0].trim())
                                    if (!attribList.includes(`${things[0].trim()}|`)) {
                                        attribList = attribList + `${things[0].trim()}|`
                                    }
                                    attribHolder.appendChild(attribNameHolder)
                                    if (things[0].trim() == 'Icon') {

                                        //itemNameHolder.innerHTML = itemNameHolder.innerHTML + `<img src="img/WItem_${things[1].trim()}.png">`
                                    }
                                    let attribValueHolder = document.createElement('span')
                                    attribValueHolder.innerText = things[1].trim()
                                    attribValueHolder.classList.add('valuePair')
                                    attribHolder.appendChild(attribValueHolder)
                                    itemAttribHolder.appendChild(attribHolder)
                                }   
                            }
                        })
                        itemHolder.appendChild(itemAttribHolder)
                        //document.getElementbappendChild(itemHolder)
                        document.getElementById('inhere').appendChild(itemHolder)
                    }
                })
            }
        }
    }
    let attribArr = attribList.split('|')
    attribArr.sort()
    filter_things()
    let uniqueValues = gather_unique('.BodyLocation')
    console.log(uniqueValues)
    //console.log(attribArr)
    //console.log(itemCount)
    //console.log(dataHolder)
}
function populate_dropdowns() {

}
function filter_things() {
    let items = document.querySelectorAll('.item')
    //console.log(items)
    items.forEach(item => {
        //console.log(item.querySelectorAll('.DisplayCategory'))
        if (item.querySelectorAll('.DisplayCategory .valuePair').length > 0 && item.querySelectorAll('.DisplayCategory .valuePair')[0].innerText !== 'Clothing') {
            item.classList.add('noShow')
        }
    })
}
function gather_unique(selector) {
    let items = document.querySelectorAll(selector)
    let theString = ''
    items.forEach(item => {
        //console.log(item.parentElement.parentElement)
        let value = item.querySelectorAll('.valuePair')[0].innerText
        //console.log(value)
        if (!theString.includes(value) && !item.parentElement.parentElement.classList.contains('noShow')) {
            theString = theString + value + '|'
        }
    })
    let theArray = theString.split('|').sort()
    return theArray
}
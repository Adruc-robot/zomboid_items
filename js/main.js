//initial variables
const sourceLoc = 'txtFiles/'
const dataHolder = []
const bodyLocations = []
bodyLocations['FullSuitHead'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|Groin|LeftThigh|RightThigh|LeftShin|RightShin|'
bodyLocations['FullTop'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|Neck|'
bodyLocations['FullSuit'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|Groin|LeftThigh|RightThigh|LeftShin|RightShin|'
bodyLocations['FullHelmet'] = '|Head|'
bodyLocations['FullHat'] = '|Head|'
bodyLocations['BathRobe'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|Groin|LeftThigh|RightThigh|LeftShin|RightShin|'
bodyLocations['SweaterHat'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|'
bodyLocations['JacketHat'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|'
bodyLocations['Hat'] = '|Head|'
bodyLocations['Dress'] = '|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|Groin|LeftThigh|RightThigh|'
bodyLocations['Mask'] = '|Head|'
bodyLocations['MaskFull'] = '|Head|'
bodyLocations['Sweater'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|Neck|'
bodyLocations['MaskEyes'] = '|Head|'
bodyLocations['Jacket'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|Neck|'
bodyLocations['TorsoExtra'] = '|UpperTorso|LowerTorso|LeftThigh|RightThigh|'
bodyLocations['Skirt'] = '|Groin|LeftThigh|RightThigh|'
bodyLocations['Pants'] = '|Groin|LeftThigh|RightThigh|LeftShin|RightShin|'
bodyLocations['Hands'] = '|LeftHand|RightHand|'
bodyLocations['ShortSleeveShirt'] = '|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|'
bodyLocations['Torso1Legs1'] = '|LeftForearm|RightForearm|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|Groin|LeftThigh|RightThigh|LeftShin|RightShin|'
bodyLocations['Legs1'] = '|Groin|LeftThigh|RightThigh|LeftShin|RightShin|'
bodyLocations['Shoes'] = '|LeftFoot|RightFoot|'
bodyLocations['Tshirt'] = '|LeftUpperArm|RightUpperArm|UpperTorso|LowerTorso|'
bodyLocations['Scarf'] = '|Neck|'
bodyLocations['Socks'] = '|LeftFoot|RightFoot|'
bodyLocations['TankTop'] = '|UpperTorso|LowerTorso|'
const okStack = []
okStack['TorsoExtra'] = '|TorsoExtra|BathRobe|FullTop|FullSuitHead|FullSuit|'
okStack['BathRobe'] = '|TorsoExtra|BathRobe|Sweater|FullTop|FullSuitHead|SweaterHat|JacketHat|FullSuit|Jacket|'
okStack['FullHelmet'] = '|FullHelmet|MaskEyes|FullTop|FullSuitHead|Hat|FullHat|Mask|MaskFull|'
okStack['Sweater'] = '|BathRobe|Sweater|FullTop|FullSuitHead|SweaterHat|FullSuit|'
okStack['Hands'] = '|Hands|FullSuitHead|'
okStack['MaskEyes'] = '|FullHelmet|MaskEyes|FullSuitHead|FullHat|Mask|MaskFull|'
okStack['FullTop'] = '|TorsoExtra|BathRobe|FullHelmet|Sweater|FullTop|FullSuitHead|SweaterHat|Dress|Hat|FullHat|Mask|JacketHat|FullSuit|Jacket|'
okStack['FullSuitHead'] = '|TorsoExtra|BathRobe|FullHelmet|Sweater|Hands|MaskEyes|FullTop|FullSuitHead|SweaterHat|Dress|Skirt|Pants|Hat|FullHat|Mask|JacketHat|FullSuit|Jacket|MaskFull|'
okStack['SweaterHat'] = '|BathRobe|Sweater|FullTop|FullSuitHead|SweaterHat|FullSuit|'
okStack['ShortSleeveShirt'] = '|ShortSleeveShirt|Dress|'
okStack['Dress'] = '|FullTop|FullSuitHead|ShortSleeveShirt|Dress|Skirt|Pants|FullSuit|'
okStack['Skirt'] = '|FullSuitHead|Dress|Skirt|Pants|FullSuit|'
okStack['Torso1Legs1'] = '|Torso1Legs1|Legs1|'
okStack['Legs1'] = '|Torso1Legs1|Legs1|'
okStack['Shoes'] = '|Shoes|'
okStack['Pants'] = '|FullSuitHead|Dress|Skirt|Pants|FullSuit|'
okStack['Hat'] = '|FullHelmet|FullTop|FullSuitHead|Hat|FullHat|MaskFull|'
okStack['Tshirt'] = '|Tshirt|'
okStack['FullHat'] = '|FullHelmet|MaskEyes|FullTop|FullSuitHead|Hat|FullHat|Mask|MaskFull|'
okStack['Mask'] = '|FullHelmet|MaskEyes|FullTop|FullSuitHead|FullHat|Mask|MaskFull|'
okStack['JacketHat'] = '|BathRobe|FullTop|FullSuitHead|JacketHat|FullSuit|Jacket|'
okStack['Scarf'] = '|Scarf|'
okStack['Socks'] = '|Socks|'
okStack['FullSuit'] = '|TorsoExtra|BathRobe|Sweater|FullTop|FullSuitHead|SweaterHat|Dress|Skirt|Pants|JacketHat|FullSuit|Jacket|'
okStack['Jacket'] = '|BathRobe|FullTop|FullSuitHead|JacketHat|FullSuit|Jacket|'
okStack['TankTop'] = '|TankTop|'
okStack['MaskFull'] = '|FullHelmet|MaskEyes|FullSuitHead|Hat|FullHat|Mask|MaskFull|'
const locations = '|Groin|Head|LeftFoot|LeftForearm|LeftHand|LeftShin|LeftThigh|LeftUpperArm|LowerTorso|Neck|RightFoot|RightForearm|RightHand|RightShin|RightThigh|RightUpperArm|UpperTorso|'
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
    /*let uniqueValues = gather_unique('.BodyLocation')
    console.log(uniqueValues)
    let uniqueClothingItem = gather_unique('.ClothingItem')
    console.log(uniqueClothingItem)*/
    //console.log(attribArr)
    //console.log(itemCount)
    //console.log(dataHolder)
    //show_thing('.item h3','Hat_', 2)
    setUpEventListeners('.item','click',testClick)
}
function populate_dropdowns() {

}
function filter_things() {
    let items = document.querySelectorAll('.item')
    
    //console.log(items)
    items.forEach(item => {
        if (item.querySelectorAll('.Insulation .valuePair').length == 0 && item.querySelectorAll('.WindResistance .valuePair').length == 0 && item.querySelectorAll('.BiteDefense .valuePair').length == 0 && item.querySelectorAll('.ScratchDefense .valuePair').length == 0 && item.querySelectorAll('.BulletDefense .valuePair').length == 0) {

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
function show_thing(selector,searchTerm, parentLocation) {
    let items = document.querySelectorAll(selector)
    console.log(items)
    items.forEach(item => {
        if (item.innerText.includes(searchTerm)) {
            while (parentLocation > 0) {
                item = item.parentElement    
                parentLocation--
            }
            item.classList.remove('noShow')
        }
    })
}
function setUpEventListeners(selector,ev,fx) {
    let items = document.querySelectorAll(selector)
    items.forEach(item => {
        item.addEventListener(ev,fx)
    })
}
function testClick() {
    //1 check if the clicked item exists in the .Wearing portion
    let itemThere = false
    let wornItems = document.querySelectorAll('.Wearing .item')
    wornItems.forEach(wornItem => {
        if (wornItem.innerHTML == this.innerHTML) {
            itemThere = true
        }
    })
    
    if (!itemThere) {
        //2 see if it will replace something
        let noOverLap = okStack[this.querySelectorAll('.BodyLocation .valuePair')[0].innerText]
        console.log(noOverLap)
        if (wornItems.length > 0) {
            //there is stuff being worn
            wornItems.forEach(wornItem => {
                if (noOverLap.includes(`|${wornItem.querySelectorAll('.BodyLocation .valuePair')[0].innerText}|`)) {
                    //this worn item needs to be removed
                    console.log(`${wornItem.querySelectorAll('.BodyLocation .valuePair')[0].innerText}|`)
                    wornItem.parentNode.removeChild(wornItem)
                }
            })

        }
        //3 add the item
        document.querySelectorAll('.Wearing')[0].appendChild(this.cloneNode(true))

        //4 tally up the bite, scratch, and bullet
        let bite = []
        let scratch = []
        let bullet = []
        //initialize the three protection arrays to 0
        locations.split('|').forEach(location => {
            if (location) {
                bite[location] = 0
                scratch[location] = 0
                bullet[location] = 0
            }
        })
        wornItems = document.querySelectorAll('.Wearing .item')
        wornItems.forEach(wornItem => {
            //get the string for the particular body location, loop through them, and tally up the values
            bodyLocations[wornItem.querySelectorAll('.BodyLocation .valuePair')[0].innerText].split('|').forEach(location => {
                if (location) {
                    //bite
                    if (wornItem.querySelectorAll('.BiteDefense .valuePair').length > 0) {
                        bite[location] = bite[location] + Number(wornItem.querySelectorAll('.BiteDefense .valuePair')[0].innerText)
                    }
                    //scratch
                    if (wornItem.querySelectorAll('.ScratchDefense .valuePair').length > 0) {
                        scratch[location] = scratch[location] + Number(wornItem.querySelectorAll('.ScratchDefense .valuePair')[0].innerText)
                    }
                    //bullet
                    if (wornItem.querySelectorAll('.BulletDefense .valuePair').length > 0) {
                        bullet[location] = bullet[location] + Number(wornItem.querySelectorAll('.BulletDefense .valuePair')[0].innerText)
                    }
                }
            })
        })
        //5 set the locations to the appropriate values
        locations.split('|').forEach(location => {
            if (location) {
                //value
                document.querySelectorAll(`.${location} .bite`)[0].innerText = bite[location]
                //color
                document.querySelectorAll(`.${location} .bite`)[0].style.backgroundColor = `hsl(${bite[location]},${100 - (bite[location] / 2)}%,50%)`
                //value
                document.querySelectorAll(`.${location} .scratch`)[0].innerText = scratch[location]
                //color
                document.querySelectorAll(`.${location} .scratch`)[0].style.backgroundColor = `hsl(${scratch[location]},${100 - (scratch[location] / 2)}%,50%)`
                //value
                document.querySelectorAll(`.${location} .bullet`)[0].innerText = bullet[location]
                //color
                document.querySelectorAll(`.${location} .bullet`)[0].style.backgroundColor = `hsl(${bullet[location]},${100 - (bullet[location] / 2)}%,50%)`
            }
        })
        /*bodyLocations[this.querySelectorAll('.BodyLocation .valuePair')[0].innerText].split('|').forEach(el => {
            if (el) {
                let updateEl = ''
                let curValue = ''
                if (this.querySelectorAll('.BiteDefense .valuePair').length > 0) {
                    updateEl = document.querySelectorAll(`.${el} .bite`)[0]
                    curValue = Number(updateEl.innerText) + Number(this.querySelectorAll('.BiteDefense .valuePair')[0].innerText)
                    updateEl.style.backgroundColor = `hsl(${curValue},${100 - (curValue / 2)}%,50%)`
                    updateEl.innerText = curValue
                }
                if (this.querySelectorAll('.ScratchDefense .valuePair').length > 0) {
                    updateEl = document.querySelectorAll(`.${el} .scratch`)[0]
                    curValue = Number(updateEl.innerText) + Number(this.querySelectorAll('.ScratchDefense .valuePair')[0].innerText)
                    updateEl.style.backgroundColor = `hsl(${curValue},${100 - (curValue / 2)}%,50%)`
                    updateEl.innerText = curValue
                }
                if (this.querySelectorAll('.BulletDefense .valuePair').length > 0) {
                    updateEl = document.querySelectorAll(`.${el} .bullet`)[0]
                    curValue = Number(updateEl.innerText) + Number(this.querySelectorAll('.BulletDefense .valuePair')[0].innerText)
                    updateEl.style.backgroundColor = `hsl(${curValue},${100 - (curValue / 2)}%,50%)`
                    updateEl.innerText = curValue
                }
            }
        })*/

    }
    
    
}
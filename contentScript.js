// Listen for the extension to be installed

window.setInterval(applyDot975Multiplier, 1000)

// Function to apply the pink background
function applyDot975Multiplier() {
	let counter = 0
	let empireHeaderElement = document.querySelector(".mb-lg.text-light-1")
	if (empireHeaderElement) {
		empireHeaderElement.className = "Changed mb-lg text-light-1"
		empireHeaderElement.innerText = "Aba Toda Extension (c) Abu Blesy"
	}
	let buffAvatarNameElement = document.querySelector("#navbar-user-name")
	if (buffAvatarNameElement) {
		buffAvatarNameElement.innerText = "обезьяна"
		buffAvatarNameElement.style.fontSize = "22px"
	}

	// Find all buffPrices with the specified class name
	const buffPrices = document.querySelectorAll(".c_Gray.f_12px")

	// Loop through the buffPrices and modify their style
	buffPrices.forEach(function (buffPrice) {
		// Check if the element exists
		// element.style.backgroundColor = "yellow"

		buffPrice.className = "Changed"
		let buffPriceStr = buffPrice.innerText
		let buffPriceInt = 0
		if (buffPriceStr.includes("(")) {
			buffPriceInt = +buffPriceStr.substring(3, buffPriceStr.length - 1)
		} else {
			buffPriceInt = +buffPriceStr.substring(2, buffPriceStr.length - 1)
		}
		console.log(buffPriceInt)
		let buffPriceOriginalInt = buffPriceInt
		try {
			buffPriceInt = buffPriceInt * 0.975
			buffPriceInt = buffPriceInt.toFixed(3)
		} catch (err) {
			console.log("error ")
		}
		buffPrice.innerHTML = `<span style="font-size: 16px; font-family:poppins;font-weight:600">${buffPriceOriginalInt} | </span>`
		buffPrice.innerHTML += `<span style="font-size: 16px ;color: red;font-family:poppins;font-weight:600;background-color:yellow">${buffPriceInt}</span>`
		// buffPrice.style.backgroundColor = "cyan"
		buffPrice.fontSize = "16px"
	})

	const pricesInCoins = document.querySelectorAll(
		// "span.font-numeric.flex.items-center.justify-center.text-small.font-bold.text-light-grey-1"
		"span.font-numeric.flex.items-center.justify-center.text-large.font-bold"
	)

	pricesInCoins.forEach(function (itemPriceInCoins) {
		itemPriceInCoins.className = "Changed"
		let content = itemPriceInCoins.innerHTML
		// var start_index = content.lastIndexOf(">") - 5 // Find the index of the second-to-last '>'
		// var end_index = content.lastIndexOf(" ") // Find the index of the last '<'
		var start_index = content.lastIndexOf(">") - 12
		var end_index = content.lastIndexOf('"') + 2

		var result = content.substring(start_index, end_index).trim()
		var modifiedResult = result.replace(/,/, function (match) {
			return ""
		})
		let checkNumber = +modifiedResult
		checkNumber = checkNumber * 0.6134
		checkNumber = checkNumber.toFixed(3)
		let originalContent = itemPriceInCoins.innerHTML
		// if(originalContent)
		let insertedContent =
			originalContent.slice(0, 1220) + "Before: " + originalContent.slice(1220)

		itemPriceInCoins.innerHTML = insertedContent
		itemPriceInCoins.innerHTML += `${checkNumber.toString()}`
		// itemPriceInCoins.style.backgroundColor = "yellow"
		itemPriceInCoins.style.fontWeight = "bold"
		itemPriceInCoins.style.color = "white"
		itemPriceInCoins.style.fontSize = "15px"
	})
	console.log("skin names:")
	const itemNames = document.querySelectorAll(
		"div.mb-sm > p.size-small:not([class*='flex'])"
	)
	const skinNames = document.querySelectorAll(
		"div.flex.items-center.justify-between > p.size-medium.font-bold.text-light-1"
	)
	// console.log(itemNames)
	const conditions = document.querySelectorAll(
		".size-small.font-bold.uppercase"
	)
	// console.log(conditions)
	const percentages = document.querySelectorAll(".link.text-small.font-normal")
	// const itemCards = document.querySelectorAll(
	// 	".item.item--instant-withdraw.item--trading.item--730"
	// )
	//Each ItemCard - 1-skin pic name condition.2-Prices and percentages 3-more info
	const itemCards = document.querySelectorAll(".item__inner.cursor-pointer")

	itemNames.forEach(function (itemName, index) {
		//changed from skin to item //changed skinName -> itemName
		try {
			if (index > skinNames.length - 1) {
				return
			}
			// let itemCard = itemCards[index]
			// itemCard.className = "Changed item__inner cursor-pointer"
			// let centerCardOuter = itemCard.querySelector(".px-1.pb-1")
			// let centerCardInner = centerCardOuter.querySelector(
			// 	".-mb-1.-ml-1.flex.flex-wrap.items-center.justify-between"
			// )
			// let percentage = centerCardInner.querySelector(".ml-1.flex-1.pb-03")

			// if (percentage) {
			// 	if (percentage.innerText.includes("off")) {
			// 		let percentageInt = +percentage.innerText.split("%")[0]
			// 		// console.log(percentageInt)
			// 		if (percentageInt > 8) {
			// 			percentage.style.backgroundColor = "yellow"
			// 			// percentage.style.color = "white" // doesnt work for some reason
			// 		}
			// 	}
			// }

			itemName.className = "Changed"
			skinNames[index].className = "Changed"
			skinNames[index].style.color = "white"
			conditions[index].className =
				"Changed rounded-t px-2 text-xxxs font-bold uppercase"
			let conditionFull = conditions[index].innerText
			let condition = conditionFull.split("|")[0]
			let skinNameStr = skinNames[index].innerText
			var skinNameClean = skinNameStr.trim()
			if (skinNameClean.includes("-")) {
				skinNameClean = skinNameClean.split("-")[0].trim()
			}
			let itemNameStr = itemName.innerText
			var itemNameClean = itemNameStr.trim()

			let result = itemNameClean + " " + skinNameClean + " " + condition
			console.log(result)
			var fullSkinInfo = result.replace(/ /, function (match) {
				return "%20"
			})
			fullSkinInfo = fullSkinInfo.replace(/★/, function (match) {
				return ""
			})
			link = `<a href="https://buff.163.com/market/csgo#tab=selling&page_num=1&search=${fullSkinInfo}">  |Buff|</a>`
			itemName.innerHTML = `${link}  ` + itemName.innerHTML
			if (itemName.innerText.includes("StatTrak")) {
				itemName.style.color = "red"
			} else {
				itemName.style.color = "white"
			}
			// itemName.style.backgroundColor = "yellow"
			itemName.style.fontWeight = "bold"
			itemName.style.fontSize = "14px"
		} catch (err) {
			console.log("err ", err)
		}
	})
}

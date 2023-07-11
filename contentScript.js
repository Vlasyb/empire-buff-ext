// Listen for the extension to be installed

window.setInterval(applyDot975Multiplier, 1000)

// Function to apply the pink background
function applyDot975Multiplier() {
	// Find all elements with the specified class name
	const elements = document.querySelectorAll(".c_Gray.f_12px, .c_Gray\\.f_12px")

	// Loop through the elements and modify their style
	elements.forEach(function (element) {
		// Check if the element exists
		element.style.backgroundColor = "yellow"
		element.className = "Changed"
		let content = element.innerHTML
		console.log(content)

		const regex = /(\d+)/
		const match = content.match(regex)
		const beforeDot = match ? match[0] : null

		const regex2 = />(.*?)</
		const match2 = content.match(regex2)
		const afterDot = match2 ? match2[1] : null
		let resNum = ""

		try {
			const stringNum = beforeDot.toString() + afterDot.toString()
			resNum = +stringNum
			resNum = resNum * 0.975
			resNum = resNum.toFixed(3)
		} catch (err) {
			console.log("error ")
		}

		element.innerHTML = resNum.toString()
	})
	const elements2 = document.querySelectorAll(
		"span.font-numeric.flex.items-center.justify-center.text-small.font-bold.text-light-grey-1"
	)

	elements2.forEach(function (element2) {
		element2.className = "Changed"
		let content = element2.innerHTML
		var start_index = content.lastIndexOf(">") - 5 // Find the index of the second-to-last '>'
		var end_index = content.lastIndexOf(" ") // Find the index of the last '<'

		var result = content.substring(start_index, end_index).trim()
		var modifiedResult = result.replace(/,/, function (match) {
			return ""
		})
		let checkNumber = +modifiedResult
		checkNumber = checkNumber * 0.613
		checkNumber = checkNumber.toFixed(3)
		var originalContent = element2.innerHTML
		// if(originalContent)
		var insertedContent =
			originalContent.slice(0, 1220) + "Before: " + originalContent.slice(1220)

		element2.innerHTML = insertedContent
		element2.innerHTML += `Taxed: ${checkNumber.toString()}`
		// element2.style.backgroundColor = "yellow"
		element2.style.fontWeight = "bold"
		element2.style.color = "white"
		element2.style.fontSize = "14px"
	})

	const elements3 = document.querySelectorAll(
		"div.item__name.text-xs.font-bold"
	)
	const elements4 = document.querySelectorAll("div.mb-02.text-xxxs")

	elements3.forEach(function (element3, index) {
		try {
			element3.className = "Changed"
			elements4[index].className = "Changed"
			let contentStart = elements4[index].innerText
			var resultStart = contentStart.trim()
			let contentEnd = element3.innerText
			var resultEnd = contentEnd.trim()
			result = resultStart + " " + resultEnd
			var skinName = result.replace(/ /, function (match) {
				return "%20"
			})
			skinName = skinName.replace(/★/, function (match) {
				return ""
			})
			console.log()
			link = `<a href="https://buff.163.com/market/csgo#tab=selling&page_num=1&search=${skinName}">  |Buff|</a>`
			element3.innerHTML += `  ${link}`
			element3.color = "white"
			// element3.style.backgroundColor = "yellow"
			element3.style.fontWeight = "bold"
			element3.style.fontSize = "14px"
		} catch (err) {
			console.log("err ", err)
		}
	})
}
{
	/* <span data-v-13af5e87="" data-v-031ed274="" class="font-numeric flex items-center justify-center text-small font-bold text-light-grey-1"><svg data-v-13af5e87="" viewBox="0 0 22 22" class="w-12 h-12 fill-current text-gold mr-sm"><path d="M21.72 4a.86.86 0 0 0 0-.17c0-1.7-4.44-3.09-9.93-3.09S1.9 2.14 1.9 3.84a1.46 1.46 0 0 0 0 .22.86.86 0 0 1-.04-.06v2.55c0 .55.61 1.15 1.68 1.7 0 0 2.63 1.58 8.26 1.64a21.28 21.28 0 0 0 7-1.09c1.82-.64 2.91-1.46 2.91-2.19V4.05a.28.28 0 0 0 0-.09.08.08 0 0 1 .01.04ZM4.37 3.31c.73-1 3.78-1.71 7.43-1.71s6.78.75 7.46 1.74a.72.72 0 0 1 .14.41s0 .38 0 .41a2.55 2.55 0 0 0-.4-.32c-1.07-.76-3.9-1.2-7.18-1.2s-6 .4-7.1 1.14a1.73 1.73 0 0 0-.49.38v-.41a.77.77 0 0 1 .14-.44Zm15.52 6.46v2.55c0 .73-1.08 1.55-2.91 2.2a21 21 0 0 1-7 1.08c-5.67-.06-8.3-1.6-8.3-1.6C.61 13.42 0 12.82 0 12.27v-2.5a.28.28 0 0 1 0-.09.76.76 0 0 1 0-.16C0 9 .57 8.38 1.55 7.9V8c0 .58.67 1.21 1.85 1.78 0 0 2.58 1.38 8.1 1.55a19.56 19.56 0 0 0 7-1.08 10.48 10.48 0 0 0 1.32-.56 1 1 0 0 1-.08.28 1.59 1.59 0 0 0 .12-.27ZM22 15.41v2.5c0 .55-.61 1.15-1.68 1.7 0 0-2.63 1.57-8.27 1.63a21 21 0 0 1-7-1.08C3.19 19.52 2.11 18.7 2.11 18v-2.68a1.89 1.89 0 0 0 .09.21 10.35 10.35 0 0 0 1.23.52 19.78 19.78 0 0 0 7 1.08c5.52-.18 8.1-1.55 8.1-1.55 1.17-.57 1.85-1.2 1.85-1.78v-.08c1 .48 1.54 1 1.54 1.65v-.06a.28.28 0 0 1 .08.1Z"></path></svg><div data-v-13af5e87=""> 221.99</div></span> */
}

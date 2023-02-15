console.log("inserted");

(() => {
    const processMessage = async (msg) => {
		switch(msg.action) {
			case "insert":
				const input = document.querySelector(`d-textarea[aria-labelledby="translation-source-heading"]`);
				const output = document.querySelector("[data-language-to-translate-into]>span");
				const currentText = input.value;
				const currentTranslation = output?.textContent ?? "";
		        if (msg.text !== input.value && msg.text != currentTranslation) {
		        	console.log("inserted", msg.text);
							input.value = "";
							document.querySelector(`div[aria-labelledby="translation-source-heading"]>p`).innerHTML = '';
		        	input.focus();
		            document.execCommand("paste");
		        }
			    break
			case "uninject":
			    chrome.runtime.onMessage.removeListener(processMessage)
			    break
		}
    }

    chrome.runtime.onMessage.addListener(processMessage)
})()

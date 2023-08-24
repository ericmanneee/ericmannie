let textEl = document.getElementById('text')
let fileNameEl = document.getElementById('filename')
let saveBtnEl = document.getElementById('saveBtn')

saveBtnEl.addEventListener("click", (e) => {
    e.preventDefault()

    const textData = textEl.value
    const textDataBlob = new Blob([textEl.value], {type: "text/plain"})
    const downloadUrl = window.URL.createObjectURL(textDataBlob)
    const downloadLink = document.createElement('a')
    downloadLink.download = fileNameEl.value
    downloadLink.href = downloadUrl
    downloadLink.click()
})

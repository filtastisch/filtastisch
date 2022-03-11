const onType = (e : KeyboardEvent) => {
    console.log(e.key.toString)
}

window.addEventListener("type", onType)
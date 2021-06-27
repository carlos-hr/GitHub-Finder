export const goToHome = (history) => {
    history.push("/")
}

export const goToResults = (history, username) => {
    history.push(`/${username}`)
}
export const goToDetails = (history, username, request) => {
    history.push(`/details/${username}/${request}`)
}

export const goBack = (history) => {
    history.goBack()
}
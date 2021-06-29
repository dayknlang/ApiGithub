export const goBack = (history) => {
    history.goBack()
}

export const goToFirstProfile = (history) => {
    history.push(`/`)
}

export const goToProfile = (history, username) => {
    history.push(`/profile/${username}`)
}

export const goToReposList = (history, username) => {
    history.push(`/repos/${username}`)
}

export const goToStarredList = (history, username) => {
    history.push(`/starred/${username}`)
}

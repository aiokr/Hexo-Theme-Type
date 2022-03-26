const myGitmentTheme = {
    render(state, instance) {
        const container = document.createElement('div')
        container.lang = "en-US"
        container.className = 'gitment-container gitment-root-container'
        container.appendChild(instance.renderEditor(state, instance))
        container.appendChild(instance.renderHeader(state, instance))
        container.appendChild(instance.renderComments(state, instance))
        container.appendChild(instance.renderFooter(state, instance))
        return container
    },
}
export function cssAnimate(animSpeed: number = 500) {
    document.documentElement.style.setProperty("--app-anim-speed", `${animSpeed}ms`)
    document.documentElement.classList.add('animate')
    setTimeout(() => document.documentElement.classList.remove('animate'), animSpeed)
}
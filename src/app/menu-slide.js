export default function menu_slide() {

    const menu_toggle_div = document.querySelector('.menu-toggle')
    const menu_nav = document.querySelector('.menu-nav')
    
    menu_toggle_div.addEventListener('click', () => {

        menu_toggle_div.classList.toggle('on')
        menu_nav.classList.toggle('open')

    })

}
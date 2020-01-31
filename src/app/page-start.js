import menu_slide from './menu-slide'

export default function page_start(){

    window.onload = () => {

        menu_slide()

        var previous_pos = window.pageYOffset
    
        window.onscroll = () => {
    
            const header_tag_element = document.querySelector('#navigation')
            var current_pos = window.pageYOffset

            if(current_pos > previous_pos){
                header_tag_element.classList.add('shadow')

            }else{
                header_tag_element.classList.remove('shadow')

            }
    
        }
    
    }

}


export type State = {
    menu_state:boolean
} 

export type AppActions =
    | { type: 'swich_menu',payload:boolean}
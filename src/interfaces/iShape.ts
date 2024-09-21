export interface iShape {
    shape: 'Rect' | 'Circle' | 'Star',
    attributes: {
        [key:string]: string | number | boolean
    }
}
const dailyCont = document.querySelector('.dailyCont');
const highLow = document.querySelectorAll('.dailyCont > div > div');
const dailyCast = document.querySelector('.dailyCast');
export default function Check() {
    if (window.innerWidth < 670) {
        if (!dailyCont.hasAttribute('style')) {
            dailyCont.style['flex-direction'] = 'column';
            dailyCast.style.width = '50%';
            dailyCast.style['align-self'] = 'center';
            highLow.forEach((i) => {
                // eslint-disable-next-line no-param-reassign
                i.style['flex-direction'] = 'row';
            });
        }
    } else if (dailyCont.hasAttribute('style')) {
        dailyCont.removeAttribute('style');
        highLow.forEach((i) => {
            i.removeAttribute('style');
        });
        dailyCast.removeAttribute('style');
    }
}

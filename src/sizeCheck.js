const dailyCont = document.querySelector('.dailyCont');
const highLow = document.querySelectorAll('.dailyCont > div > div');
export default function Check() {
    if (window.innerWidth < 600) {
        if (!dailyCont.hasAttribute('style')) {
            dailyCont.style['flex-direction'] = 'column';
            highLow.forEach((i) => {
                // eslint-disable-next-line no-param-reassign
                i.style['flex-direction'] = 'row';
            });
        }
    } else {
        dailyCont.removeAttribute('style');
        highLow.forEach((i) => {
            i.removeAttribute('style');
        });
    }
}

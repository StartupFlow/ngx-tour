/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, RendererFactory2 } from '@angular/core';
export class TourBackdropService {
    /**
     * @param {?} rendererFactory
     */
    constructor(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} targetElement
     * @return {?}
     */
    show(targetElement) {
        /** @type {?} */
        const boundingRect = targetElement.nativeElement.getBoundingClientRect();
        if (!this.backdropElement) {
            this.backdropElement = this.renderer.createElement('div');
            this.renderer.addClass(this.backdropElement, 'ngx-tour_backdrop');
            this.renderer.appendChild(document.body, this.backdropElement);
        }
        this.setStyles(boundingRect);
    }
    /**
     * @return {?}
     */
    close() {
        if (this.backdropElement) {
            this.renderer.removeChild(document.body, this.backdropElement);
            this.backdropElement = null;
        }
    }
    /**
     * @private
     * @param {?} boundingRect
     * @return {?}
     */
    setStyles(boundingRect) {
        /** @type {?} */
        const styles = {
            position: 'fixed',
            width: boundingRect.width + 'px',
            height: boundingRect.height + 'px',
            top: boundingRect.top + 'px',
            left: boundingRect.left + 'px',
            'box-shadow': '0 0 0 9999px rgba(0, 0, 0, 0.7)',
            'z-index': '100'
        };
        for (const name of Object.keys(styles)) {
            this.renderer.setStyle(this.backdropElement, name, styles[name]);
        }
    }
}
TourBackdropService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TourBackdropService.ctorParameters = () => [
    { type: RendererFactory2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TourBackdropService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    TourBackdropService.prototype.backdropElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbWQtbWVudS8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWJhY2tkcm9wLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUk5QixZQUFZLGVBQWlDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFTSxJQUFJLENBQUMsYUFBeUI7O2NBQzdCLFlBQVksR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFO1FBRXhFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRU0sS0FBSztRQUNWLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxZQUFxQjs7Y0FDL0IsTUFBTSxHQUFHO1lBQ2IsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBSTtZQUNoQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2xDLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRyxHQUFHLElBQUk7WUFDNUIsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSTtZQUM5QixZQUFZLEVBQUUsaUNBQWlDO1lBQy9DLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBRUQsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7O1lBMUNGLFVBQVU7Ozs7WUFGaUMsZ0JBQWdCOzs7Ozs7O0lBSTFELHVDQUE0Qjs7Ozs7SUFDNUIsOENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb3VyQmFja2Ryb3BTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcml2YXRlIGJhY2tkcm9wRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93KHRhcmdldEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICBjb25zdCBib3VuZGluZ1JlY3QgPSB0YXJnZXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoIXRoaXMuYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuYmFja2Ryb3BFbGVtZW50LCAnbmd4LXRvdXJfYmFja2Ryb3AnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgdGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3R5bGVzKGJvdW5kaW5nUmVjdCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcbiAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFN0eWxlcyhib3VuZGluZ1JlY3Q6IERPTVJlY3QpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHdpZHRoOiBib3VuZGluZ1JlY3Qud2lkdGggKyAncHgnLFxuICAgICAgaGVpZ2h0OiBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArICdweCcsXG4gICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArICdweCcsXG4gICAgICAnYm94LXNoYWRvdyc6ICcwIDAgMCA5OTk5cHggcmdiYSgwLCAwLCAwLCAwLjcpJyxcbiAgICAgICd6LWluZGV4JzogJzEwMCdcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKHN0eWxlcykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5iYWNrZHJvcEVsZW1lbnQsIG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgfVxuICB9XG59XG4iXX0=
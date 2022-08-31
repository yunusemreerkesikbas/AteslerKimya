// import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: "[appHorizontalScroll]",
// })
// export class HorizontalScrollDirective {
//   constructor(private element: ElementRef) {}

//   @HostListener("wheel", ["$event"])
//   public onScroll(event: WheelEvent) {
//     this.element.nativeElement.onScroll += event.deltaY;
//     console.log('mouse hareketi')
//   }
// }




import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHorizontalScroll]'
})
export class HorizontalScrollDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string | undefined;
    

    constructor(
        private _el: ElementRef,
        private element: ElementRef
        ) {}

    @HostListener('scroll', ['$event'])
    public onScroll(event: any) {
        let currentSection: string | undefined;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
    @HostListener("wheel", ["$event"])
    public onScrollWheel(event: WheelEvent) {
        this.element.nativeElement.onScroll += event.deltaY;
        console.log('mouse hareketi')
    }

}

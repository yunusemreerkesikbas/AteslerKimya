




import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
    selector: '[appHorizontalScroll]'
})
export class HorizontalScrollDirective {
    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string | undefined;
    

    constructor(
        private _el: ElementRef,
        private element: ElementRef,
        private route:ActivatedRoute
        ) {}
        
   
    
}

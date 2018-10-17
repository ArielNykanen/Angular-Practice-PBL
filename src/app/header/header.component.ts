import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() futureSelected = new EventEmitter<string>();
    onSelect(future: string) {
        this.futureSelected.emit(future);
    }
}
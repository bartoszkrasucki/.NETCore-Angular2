/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { WordReverserComponent } from './wordreverser.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<WordReverserComponent>;

describe('Word Reverser component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WordReverserComponent],
            imports: [ReactiveFormsModule, FormsModule],
            providers: [{ provide: Http }],
        });
        fixture = TestBed.createComponent(WordReverserComponent);
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h4').textContent;
        expect(titleText).toEqual('Please enter below any word and click submit.');
    }));
});



